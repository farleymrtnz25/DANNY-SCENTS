const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { db, getLocalISO, hashPassword } = require('./db');

const PORT = process.env.PORT || 8080;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.apk': 'application/vnd.android.package-archive',
  '.webmanifest': 'application/manifest+json'
};

const CATEGORY_LABELS = {
  ositos: '🧸 Ositos Ternura',
  rosas: '🌹 Rosas Esculpidas',
  margaritas: '🌼 Margaritas',
  flores5: '🌸 Flores de 5 Pétalos',
  especiales: '💐 Ramos, Frascos & Esencia',
  otros: '✨ Edición Especial'
};

function sendJSON(res, status, data) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
  });
  res.end(JSON.stringify(data));
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 15 * 1024 * 1024) {
        reject(new Error('Payload demasiado grande'));
      }
    });
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (e) {
        reject(new Error('JSON inválido'));
      }
    });
    req.on('error', reject);
  });
}

function getAuthUser(req) {
  const authHeader = req.headers['authorization'] || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : '';
  if (!token) return null;
  const session = db.prepare('SELECT * FROM sessions WHERE token = ?').get(token);
  if (!session) return null;
  return {
    id: session.user_id,
    username: session.username,
    fullName: session.full_name,
    role: session.role,
    token: session.token
  };
}

function formatProductRow(row) {
  let specs = [];
  try {
    specs = JSON.parse(row.specs || '[]');
  } catch (e) {
    specs = [];
  }
  return {
    id: row.id,
    name: row.name,
    category: row.category,
    categoryLabel: row.category_label,
    scent: row.scent,
    price: Number(row.price),
    cost: Number(row.cost || 0),
    stock: Number(row.stock || 0),
    minStock: Number(row.min_stock || 5),
    image: row.image,
    badge: row.badge,
    trayOrigin: row.tray_origin,
    specs,
    description: row.description,
    active: Boolean(row.active),
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

function saveBase64ImageIfNeeded(imageStr, slug) {
  if (!imageStr || !imageStr.startsWith('data:image/')) {
    return imageStr || 'imagenes/osito-miel-ambar.png';
  }
  try {
    const match = imageStr.match(/^data:image\/([a-zA-Z0-9+]+);base64,(.+)$/);
    if (!match) return imageStr;
    const ext = match[1] === 'jpeg' ? 'jpg' : match[1];
    const buffer = Buffer.from(match[2], 'base64');
    const fileName = `prod-${slug}-${Date.now()}.${ext}`;
    const relPath = `imagenes/${fileName}`;
    const absPath = path.join(PUBLIC_DIR, 'imagenes', fileName);
    fs.writeFileSync(absPath, buffer);
    return relPath;
  } catch (e) {
    return imageStr;
  }
}

function slugify(str) {
  return String(str || 'producto')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '') + '-' + Math.floor(100 + Math.random() * 900);
}

async function handleApi(req, res, pathname) {
  if (req.method === 'OPTIONS') {
    return sendJSON(res, 200, { ok: true });
  }

  // AUTH: Login
  if (pathname === '/api/auth/login' && req.method === 'POST') {
    const body = await parseBody(req);
    const username = String(body.username || '').trim().toLowerCase();
    const password = String(body.password || '');

    const user = db.prepare('SELECT * FROM users WHERE LOWER(username) = ?').get(username);
    if (!user) {
      return sendJSON(res, 401, { error: 'Usuario o contraseña incorrectos' });
    }
    const candidateHash = hashPassword(password, user.salt);
    if (candidateHash !== user.password_hash) {
      return sendJSON(res, 401, { error: 'Usuario o contraseña incorrectos' });
    }

    const token = crypto.randomBytes(32).toString('hex');
    const now = getLocalISO();
    const expires = getLocalISO(new Date(Date.now() + 30 * 24 * 3600 * 1000));
    db.prepare(`
      INSERT INTO sessions (token, user_id, username, full_name, role, created_at, expires_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(token, user.id, user.username, user.full_name, user.role, now, expires);

    return sendJSON(res, 200, {
      token,
      user: {
        id: user.id,
        username: user.username,
        fullName: user.full_name,
        role: user.role
      }
    });
  }

  // AUTH: Me
  if (pathname === '/api/auth/me' && req.method === 'GET') {
    const user = getAuthUser(req);
    if (!user) return sendJSON(res, 401, { error: 'No autenticado' });
    return sendJSON(res, 200, { user });
  }

  // AUTH: Logout
  if (pathname === '/api/auth/logout' && req.method === 'POST') {
    const user = getAuthUser(req);
    if (user) {
      db.prepare('DELETE FROM sessions WHERE token = ?').run(user.token);
    }
    return sendJSON(res, 200, { ok: true });
  }

  // AUTH: Change password
  if (pathname === '/api/auth/change-password' && req.method === 'POST') {
    const user = getAuthUser(req);
    if (!user) return sendJSON(res, 401, { error: 'No autorizado' });
    const body = await parseBody(req);
    const newPassword = String(body.newPassword || '').trim();
    if (newPassword.length < 4) {
      return sendJSON(res, 400, { error: 'La contraseña debe tener al menos 4 caracteres' });
    }
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = hashPassword(newPassword, salt);
    db.prepare('UPDATE users SET password_hash = ?, salt = ? WHERE id = ?').run(hash, salt, user.id);
    return sendJSON(res, 200, { ok: true, message: 'Contraseña actualizada correctamente' });
  }

  // PRODUCTS: List all
  if (pathname === '/api/products' && req.method === 'GET') {
    const rows = db.prepare('SELECT * FROM products WHERE active = 1 ORDER BY created_at ASC').all();
    return sendJSON(res, 200, { products: rows.map(formatProductRow) });
  }

  // PRODUCTS: Create new product (Admin)
  if (pathname === '/api/products' && req.method === 'POST') {
    const user = getAuthUser(req);
    if (!user) return sendJSON(res, 401, { error: 'Inicia sesión para agregar productos' });

    const body = await parseBody(req);
    const name = String(body.name || '').trim();
    if (!name) return sendJSON(res, 400, { error: 'El nombre del producto es obligatorio' });

    const id = body.id ? String(body.id).trim() : slugify(name);
    const category = String(body.category || 'especiales').trim();
    const categoryLabel = String(body.categoryLabel || CATEGORY_LABELS[category] || '✨ Edición Especial').trim();
    const scent = String(body.scent || 'Aceite Esencial Puro de Manzanilla').trim();
    const price = Math.max(0, Number(body.price) || 0);
    const cost = Math.max(0, Number(body.cost) || Math.round(price * 0.4));
    const stock = Math.max(0, parseInt(body.stock, 10) || 0);
    const minStock = Math.max(0, parseInt(body.minStock, 10) || 5);
    const badge = String(body.badge || '✨ Hecha a Mano').trim();
    const trayOrigin = String(body.trayOrigin || 'Elaborada artesanalmente con cera natural y manzanilla').trim();
    const description = String(body.description || 'Vela artesanal esculpida a mano con aceite esencial puro de manzanilla.').trim();
    const specs = Array.isArray(body.specs)
      ? body.specs
      : String(body.specs || 'Cera Natural, Hecha a Mano')
          .split(',')
          .map(s => s.trim())
          .filter(Boolean);
    const image = saveBase64ImageIfNeeded(body.image, id);
    const now = getLocalISO();

    db.prepare(`
      INSERT INTO products (
        id, name, category, category_label, scent, price, cost, stock, min_stock,
        image, badge, tray_origin, specs, description, active, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ?)
    `).run(
      id, name, category, categoryLabel, scent, price, cost, stock, minStock,
      image, badge, trayOrigin, JSON.stringify(specs), description, now, now
    );

    if (stock > 0) {
      db.prepare(`
        INSERT INTO inventory_movements (
          product_id, product_name, type, quantity, prev_stock, new_stock, unit_cost, note, user_name, created_at
        ) VALUES (?, ?, 'entrada', ?, 0, ?, ?, 'Stock inicial al crear producto', ?, ?)
      `).run(id, name, stock, stock, cost, user.fullName, now);
    }

    const created = db.prepare('SELECT * FROM products WHERE id = ?').get(id);
    return sendJSON(res, 201, { product: formatProductRow(created) });
  }

  // PRODUCTS: Update or Delete by ID
  if (pathname.startsWith('/api/products/')) {
    const user = getAuthUser(req);
    if (!user) return sendJSON(res, 401, { error: 'No autorizado' });
    const id = decodeURIComponent(pathname.replace('/api/products/', ''));
    const existing = db.prepare('SELECT * FROM products WHERE id = ?').get(id);
    if (!existing) return sendJSON(res, 404, { error: 'Producto no encontrado' });

    if (req.method === 'PUT') {
      const body = await parseBody(req);
      const name = body.name !== undefined ? String(body.name).trim() : existing.name;
      const category = body.category !== undefined ? String(body.category).trim() : existing.category;
      const categoryLabel = body.categoryLabel !== undefined
        ? String(body.categoryLabel).trim()
        : (CATEGORY_LABELS[category] || existing.category_label);
      const scent = body.scent !== undefined ? String(body.scent).trim() : existing.scent;
      const price = body.price !== undefined ? Math.max(0, Number(body.price)) : existing.price;
      const cost = body.cost !== undefined ? Math.max(0, Number(body.cost)) : existing.cost;
      const newStock = body.stock !== undefined ? Math.max(0, parseInt(body.stock, 10)) : existing.stock;
      const minStock = body.minStock !== undefined ? Math.max(0, parseInt(body.minStock, 10)) : existing.min_stock;
      const badge = body.badge !== undefined ? String(body.badge).trim() : existing.badge;
      const trayOrigin = body.trayOrigin !== undefined ? String(body.trayOrigin).trim() : existing.tray_origin;
      const description = body.description !== undefined ? String(body.description).trim() : existing.description;
      const specs = body.specs !== undefined
        ? JSON.stringify(
            Array.isArray(body.specs)
              ? body.specs
              : String(body.specs).split(',').map(s => s.trim()).filter(Boolean)
          )
        : existing.specs;
      const image = body.image ? saveBase64ImageIfNeeded(body.image, id) : existing.image;
      const now = getLocalISO();

      db.prepare(`
        UPDATE products
        SET name = ?, category = ?, category_label = ?, scent = ?, price = ?, cost = ?,
            stock = ?, min_stock = ?, image = ?, badge = ?, tray_origin = ?, specs = ?,
            description = ?, updated_at = ?
        WHERE id = ?
      `).run(
        name, category, categoryLabel, scent, price, cost,
        newStock, minStock, image, badge, trayOrigin, specs,
        description, now, id
      );

      if (newStock !== existing.stock) {
        const diff = newStock - existing.stock;
        db.prepare(`
          INSERT INTO inventory_movements (
            product_id, product_name, type, quantity, prev_stock, new_stock, unit_cost, note, user_name, created_at
          ) VALUES (?, ?, 'ajuste', ?, ?, ?, ?, 'Ajuste directo desde edición de producto', ?, ?)
        `).run(id, name, Math.abs(diff), existing.stock, newStock, cost, user.fullName, now);
      }

      const updated = db.prepare('SELECT * FROM products WHERE id = ?').get(id);
      return sendJSON(res, 200, { product: formatProductRow(updated) });
    }

    if (req.method === 'DELETE') {
      db.prepare('DELETE FROM products WHERE id = ?').run(id);
      return sendJSON(res, 200, { ok: true });
    }
  }

  // INVENTORY: Adjust / Add Stock
  if (pathname === '/api/inventory/adjust' && req.method === 'POST') {
    const user = getAuthUser(req);
    if (!user) return sendJSON(res, 401, { error: 'No autorizado' });

    const body = await parseBody(req);
    const productId = String(body.productId || '').trim();
    const type = String(body.type || 'entrada').trim(); // 'entrada', 'salida', 'ajuste'
    const quantity = Math.max(0, parseInt(body.quantity, 10) || 0);
    const note = String(body.note || '').trim() || (type === 'entrada' ? 'Ingreso de stock de producción' : 'Ajuste de inventario');

    const product = db.prepare('SELECT * FROM products WHERE id = ?').get(productId);
    if (!product) return sendJSON(res, 404, { error: 'Producto no encontrado' });
    if (quantity <= 0 && type !== 'ajuste') {
      return sendJSON(res, 400, { error: 'La cantidad debe ser mayor a 0' });
    }

    const prevStock = Number(product.stock || 0);
    let newStock = prevStock;
    if (type === 'entrada') {
      newStock = prevStock + quantity;
    } else if (type === 'salida') {
      newStock = Math.max(0, prevStock - quantity);
    } else if (type === 'ajuste') {
      newStock = quantity;
    }

    const unitCost = body.unitCost !== undefined ? Math.max(0, Number(body.unitCost)) : Number(product.cost || 0);
    const now = getLocalISO();

    db.prepare('UPDATE products SET stock = ?, cost = ?, updated_at = ? WHERE id = ?')
      .run(newStock, unitCost, now, productId);

    db.prepare(`
      INSERT INTO inventory_movements (
        product_id, product_name, type, quantity, prev_stock, new_stock, unit_cost, note, user_name, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      productId,
      product.name,
      type,
      type === 'ajuste' ? Math.abs(newStock - prevStock) : quantity,
      prevStock,
      newStock,
      unitCost,
      note,
      user.fullName,
      now
    );

    const updated = db.prepare('SELECT * FROM products WHERE id = ?').get(productId);
    return sendJSON(res, 200, { product: formatProductRow(updated) });
  }

  // INVENTORY: Movements history
  if (pathname === '/api/inventory/movements' && req.method === 'GET') {
    const user = getAuthUser(req);
    if (!user) return sendJSON(res, 401, { error: 'No autorizado' });

    const movements = db.prepare('SELECT * FROM inventory_movements ORDER BY id DESC LIMIT 300').all();
    return sendJSON(res, 200, { movements });
  }

  // SALES: Create sale (from Store Checkout or Admin POS)
  if (pathname === '/api/sales' && req.method === 'POST') {
    const body = await parseBody(req);
    const items = Array.isArray(body.items) ? body.items : [];
    if (items.length === 0) {
      return sendJSON(res, 400, { error: 'La venta debe incluir al menos un producto' });
    }

    const customerName = String(body.customerName || 'Cliente General').trim();
    const customerPhone = String(body.customerPhone || '').trim();
    const paymentMethod = String(body.paymentMethod || 'Efectivo').trim();
    const discount = Math.max(0, Number(body.discount) || 0);
    const giftMessage = String(body.giftMessage || '').trim();
    const notes = String(body.notes || '').trim();

    const now = getLocalISO();
    const rawDate = body.saleDate ? String(body.saleDate).trim() : now;
    const saleDate = rawDate.length === 10 ? `${rawDate} ${now.slice(11)}` : rawDate;
    const saleDay = saleDate.slice(0, 10);
    const saleMonth = saleDate.slice(0, 7);
    const saleYear = saleDate.slice(0, 4);

    // Prepare items and calculate totals
    let subtotal = 0;
    let totalCost = 0;
    const resolvedItems = [];

    for (const item of items) {
      const prod = db.prepare('SELECT * FROM products WHERE id = ?').get(item.id);
      const qty = Math.max(1, parseInt(item.qty, 10) || 1);
      const unitPrice = item.price !== undefined ? Number(item.price) : (prod ? Number(prod.price) : 0);
      const unitCost = prod ? Number(prod.cost || 0) : Math.round(unitPrice * 0.4);
      const itemSubtotal = unitPrice * qty;

      subtotal += itemSubtotal;
      totalCost += unitCost * qty;

      resolvedItems.push({
        productId: prod ? prod.id : String(item.id || 'custom'),
        productName: prod ? prod.name : String(item.name || 'Producto'),
        categoryLabel: prod ? prod.category_label : '🕯️ Velas',
        qty,
        unitPrice,
        unitCost,
        subtotal: itemSubtotal,
        currentStock: prod ? Number(prod.stock || 0) : null
      });
    }

    const total = Math.max(0, subtotal - discount);
    const profit = total - totalCost;

    // Generate next invoice number
    const lastSale = db.prepare('SELECT id FROM sales ORDER BY id DESC LIMIT 1').get();
    const nextNum = (lastSale ? lastSale.id : 0) + 1;
    const invoiceNumber = `DS-${String(nextNum).padStart(4, '0')}`;

    const insertSale = db.prepare(`
      INSERT INTO sales (
        invoice_number, customer_name, customer_phone, payment_method, status,
        subtotal, discount, total, total_cost, profit, gift_message, notes,
        sale_date, sale_day, sale_month, sale_year, created_at
      ) VALUES (?, ?, ?, ?, 'Completada', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = insertSale.run(
      invoiceNumber, customerName, customerPhone, paymentMethod,
      subtotal, discount, total, totalCost, profit, giftMessage, notes,
      saleDate, saleDay, saleMonth, saleYear, now
    );
    const saleId = result.lastInsertRowid;

    const insertItem = db.prepare(`
      INSERT INTO sale_items (
        sale_id, product_id, product_name, category_label, qty, unit_price, unit_cost, subtotal
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const updateStock = db.prepare('UPDATE products SET stock = ?, updated_at = ? WHERE id = ?');
    const insertMov = db.prepare(`
      INSERT INTO inventory_movements (
        product_id, product_name, type, quantity, prev_stock, new_stock, unit_cost, note, user_name, created_at
      ) VALUES (?, ?, 'venta', ?, ?, ?, ?, ?, ?, ?)
    `);

    const authUser = getAuthUser(req);
    const actor = authUser ? authUser.fullName : 'Tienda Online';

    for (const ri of resolvedItems) {
      insertItem.run(
        saleId, ri.productId, ri.productName, ri.categoryLabel,
        ri.qty, ri.unitPrice, ri.unitCost, ri.subtotal
      );

      if (ri.currentStock !== null) {
        const newStock = Math.max(0, ri.currentStock - ri.qty);
        updateStock.run(newStock, now, ri.productId);
        insertMov.run(
          ri.productId,
          ri.productName,
          ri.qty,
          ri.currentStock,
          newStock,
          ri.unitCost,
          `Venta ${invoiceNumber} (${customerName})`,
          actor,
          now
        );
      }
    }

    return sendJSON(res, 201, {
      sale: {
        id: saleId,
        invoiceNumber,
        customerName,
        customerPhone,
        paymentMethod,
        subtotal,
        discount,
        total,
        totalCost,
        profit,
        saleDate,
        saleDay,
        saleMonth,
        saleYear,
        items: resolvedItems
      }
    });
  }

  // SALES: Get sales + Day, Month, Year reports (Admin)
  if (pathname === '/api/sales' && req.method === 'GET') {
    const user = getAuthUser(req);
    if (!user) return sendJSON(res, 401, { error: 'No autorizado' });

    const salesRows = db.prepare('SELECT * FROM sales ORDER BY sale_date DESC, id DESC').all();
    const itemRows = db.prepare('SELECT * FROM sale_items ORDER BY id ASC').all();

    const itemsBySale = {};
    for (const item of itemRows) {
      if (!itemsBySale[item.sale_id]) itemsBySale[item.sale_id] = [];
      itemsBySale[item.sale_id].push({
        id: item.id,
        saleId: item.sale_id,
        productId: item.product_id,
        productName: item.product_name,
        categoryLabel: item.category_label,
        qty: Number(item.qty),
        unitPrice: Number(item.unit_price),
        unitCost: Number(item.unit_cost),
        subtotal: Number(item.subtotal)
      });
    }

    const sales = salesRows.map(s => {
      const sItems = itemsBySale[s.id] || [];
      const totalUnits = sItems.reduce((acc, i) => acc + i.qty, 0);
      return {
        id: s.id,
        invoiceNumber: s.invoice_number,
        customerName: s.customer_name,
        customerPhone: s.customer_phone,
        paymentMethod: s.payment_method,
        status: s.status,
        subtotal: Number(s.subtotal),
        discount: Number(s.discount),
        total: Number(s.total),
        totalCost: Number(s.total_cost),
        profit: Number(s.profit),
        giftMessage: s.gift_message,
        notes: s.notes,
        saleDate: s.sale_date,
        saleDay: s.sale_day,
        saleMonth: s.sale_month,
        saleYear: s.sale_year,
        totalUnits,
        items: sItems
      };
    });

    return sendJSON(res, 200, { sales });
  }

  // SALES: Delete a sale and restore stock
  if (pathname.startsWith('/api/sales/') && req.method === 'DELETE') {
    const user = getAuthUser(req);
    if (!user) return sendJSON(res, 401, { error: 'No autorizado' });

    const saleId = parseInt(pathname.replace('/api/sales/', ''), 10);
    const sale = db.prepare('SELECT * FROM sales WHERE id = ?').get(saleId);
    if (!sale) return sendJSON(res, 404, { error: 'Venta no encontrada' });

    const items = db.prepare('SELECT * FROM sale_items WHERE sale_id = ?').all(saleId);
    const now = getLocalISO();

    for (const item of items) {
      const prod = db.prepare('SELECT * FROM products WHERE id = ?').get(item.product_id);
      if (prod) {
        const prevStock = Number(prod.stock || 0);
        const newStock = prevStock + Number(item.qty);
        db.prepare('UPDATE products SET stock = ?, updated_at = ? WHERE id = ?').run(newStock, now, prod.id);
        db.prepare(`
          INSERT INTO inventory_movements (
            product_id, product_name, type, quantity, prev_stock, new_stock, unit_cost, note, user_name, created_at
          ) VALUES (?, ?, 'entrada', ?, ?, ?, ?, ?, ?, ?)
        `).run(
          prod.id,
          prod.name,
          item.qty,
          prevStock,
          newStock,
          prod.cost,
          `Reverso por anulación de venta ${sale.invoice_number}`,
          user.fullName,
          now
        );
      }
    }

    db.prepare('DELETE FROM sales WHERE id = ?').run(saleId);
    return sendJSON(res, 200, { ok: true });
  }

  return sendJSON(res, 404, { error: 'Ruta API no encontrada' });
}

const server = http.createServer(async (req, res) => {
  const safeUrl = decodeURIComponent(req.url.split('?')[0]);

  if (safeUrl.startsWith('/api/')) {
    try {
      await handleApi(req, res, safeUrl);
    } catch (err) {
      console.error('API Error:', err);
      sendJSON(res, 500, { error: err.message || 'Error interno del servidor' });
    }
    return;
  }

  let filePath = path.join(PUBLIC_DIR, safeUrl === '/' ? 'index.html' : safeUrl);

  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      filePath = path.join(PUBLIC_DIR, 'index.html');
    }
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500);
        return res.end('Server Error');
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    });
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`DANNY SCENTS servidor + base de datos SQLite activo en http://localhost:${PORT}`);
});
