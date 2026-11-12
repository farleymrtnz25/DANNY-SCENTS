const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const { DatabaseSync } = require('node:sqlite');

const DB_PATH = path.join(__dirname, 'danny_scents.sqlite');
const db = new DatabaseSync(DB_PATH);

// Enable WAL and foreign keys
db.exec('PRAGMA journal_mode = WAL;');
db.exec('PRAGMA foreign_keys = ON;');

// Initialize tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    salt TEXT NOT NULL,
    full_name TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'admin',
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS sessions (
    token TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL,
    username TEXT NOT NULL,
    full_name TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at TEXT NOT NULL,
    expires_at TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    category_label TEXT NOT NULL,
    scent TEXT NOT NULL DEFAULT 'Aceite Esencial de Manzanilla',
    price INTEGER NOT NULL,
    cost INTEGER NOT NULL DEFAULT 0,
    stock INTEGER NOT NULL DEFAULT 0,
    min_stock INTEGER NOT NULL DEFAULT 5,
    image TEXT NOT NULL,
    badge TEXT NOT NULL DEFAULT '✨ Artesanal',
    tray_origin TEXT NOT NULL DEFAULT 'Elaborado a mano en cera natural con esencia de manzanilla',
    specs TEXT NOT NULL DEFAULT '[]',
    description TEXT NOT NULL DEFAULT '',
    active INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS inventory_movements (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id TEXT NOT NULL,
    product_name TEXT NOT NULL,
    type TEXT NOT NULL, -- 'entrada', 'salida', 'ajuste', 'venta'
    quantity INTEGER NOT NULL,
    prev_stock INTEGER NOT NULL,
    new_stock INTEGER NOT NULL,
    unit_cost INTEGER NOT NULL DEFAULT 0,
    note TEXT NOT NULL DEFAULT '',
    user_name TEXT NOT NULL DEFAULT 'Admin',
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS sales (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    invoice_number TEXT UNIQUE NOT NULL,
    customer_name TEXT NOT NULL DEFAULT 'Cliente General',
    customer_phone TEXT NOT NULL DEFAULT '',
    payment_method TEXT NOT NULL DEFAULT 'Efectivo',
    status TEXT NOT NULL DEFAULT 'Completada',
    subtotal INTEGER NOT NULL,
    discount INTEGER NOT NULL DEFAULT 0,
    total INTEGER NOT NULL,
    total_cost INTEGER NOT NULL DEFAULT 0,
    profit INTEGER NOT NULL DEFAULT 0,
    gift_message TEXT NOT NULL DEFAULT '',
    notes TEXT NOT NULL DEFAULT '',
    sale_date TEXT NOT NULL, -- YYYY-MM-DD HH:mm:ss local
    sale_day TEXT NOT NULL,  -- YYYY-MM-DD
    sale_month TEXT NOT NULL, -- YYYY-MM
    sale_year TEXT NOT NULL,  -- YYYY
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS sale_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sale_id INTEGER NOT NULL,
    product_id TEXT NOT NULL,
    product_name TEXT NOT NULL,
    category_label TEXT NOT NULL,
    qty INTEGER NOT NULL,
    unit_price INTEGER NOT NULL,
    unit_cost INTEGER NOT NULL DEFAULT 0,
    subtotal INTEGER NOT NULL,
    FOREIGN KEY (sale_id) REFERENCES sales(id) ON DELETE CASCADE
  );
`);

function getLocalISO(dateObj = new Date()) {
  const tzOffset = dateObj.getTimezoneOffset() * 60000;
  const local = new Date(dateObj.getTime() - tzOffset);
  return local.toISOString().slice(0, 19).replace('T', ' ');
}

function hashPassword(password, salt) {
  return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
}

// Seed default users if none exist
const userCount = db.prepare('SELECT COUNT(*) as count FROM users').get().count;
if (userCount === 0) {
  const now = getLocalISO();
  const salt1 = crypto.randomBytes(16).toString('hex');
  const hash1 = hashPassword('admin123', salt1);
  db.prepare(`
    INSERT INTO users (username, password_hash, salt, full_name, role, created_at)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run('admin', hash1, salt1, 'Administrador Danny Scents', 'admin', now);

  const salt2 = crypto.randomBytes(16).toString('hex');
  const hash2 = hashPassword('danny2026', salt2);
  db.prepare(`
    INSERT INTO users (username, password_hash, salt, full_name, role, created_at)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run('danny', hash2, salt2, 'Danny Scents Principal', 'admin', now);
}

// Seed initial 8 products if none exist
const INITIAL_PRODUCTS = [
  {
    id: 'osito-miel-ambar',
    name: 'Osito Miel Ámbar Clásico',
    category: 'ositos',
    category_label: '🧸 Ositos Ternura',
    scent: 'Miel Silvestre & Manzanilla',
    price: 6000,
    cost: 2400,
    stock: 20,
    min_stock: 5,
    image: 'imagenes/osito-miel-ambar.png',
    badge: '🍯 Cera Natural',
    tray_origin: 'Moldeado artesanal en tono ámbar miel con alto brillo y relieve en patitas',
    specs: ['Peso: 90 g', 'Duración: 16 h', 'Cera Vegetal & Abeja'],
    description: 'Figura artesanal de osito sentado en tono ámbar miel translúcido de alto brillo. Moldeado con tiernos detalles en orejas, hocico y patitas, ideal para recordatorios cálidos y decoración.'
  },
  {
    id: 'rosa-azul-noche',
    name: 'Rosa Azul Noche Bicolor',
    category: 'rosas',
    category_label: '🌹 Rosas Esculpidas',
    scent: 'Manzanilla Nocturna & Lavanda Suave',
    price: 2500,
    cost: 1000,
    stock: 25,
    min_stock: 5,
    image: 'imagenes/rosa-azul-noche.png',
    badge: '✨ Doble Tono',
    tray_origin: 'Esculpida pétalo a pétalo con degradado azul índigo y base marfil cremosa',
    specs: ['Peso: 68 g', 'Duración: 12 h', 'Doble Tono Artesanal'],
    description: 'Rosa en flor esculpida pétalo a pétalo con degradado bicolor: corazón en azul índigo profundo que se funde suavemente hacia una base marfil cremosa.'
  },
  {
    id: 'margarita-blanca-manzanilla',
    name: 'Margarita Blanca de Manzanilla',
    category: 'margaritas',
    category_label: '🌼 Margaritas',
    scent: 'Aceite Esencial Puro de Manzanilla',
    price: 2500,
    cost: 1000,
    stock: 25,
    min_stock: 5,
    image: 'imagenes/margarita-blanca-manzanilla.png',
    badge: '🌼 Flor Insignia',
    tray_origin: 'Inspirada en la flor natural de manzanilla con pétalos marfil y centro cálido',
    specs: ['Peso: 55 g', 'Duración: 9 h', '18 Pétalos Esculpidos'],
    description: 'Flor multipétalo en cera marfil luminosa con cálido centro amarillo-verdoso, inspirada directamente en la flor natural de la manzanilla.'
  },
  {
    id: 'flor-bicolor-amarillo-blanco',
    name: 'Flor Bicolor "Sol y Nube"',
    category: 'flores5',
    category_label: '🌸 Flores de 5 Pétalos',
    scent: 'Manzanilla Solar & Flor de Azahar',
    price: 2500,
    cost: 1000,
    stock: 20,
    min_stock: 5,
    image: 'imagenes/flor-bicolor-amarillo-blanco.png',
    badge: '☀️ Marmoleada',
    tray_origin: 'Pétalos acolchados en mezcla artesanal de cera amarilla y blanca',
    specs: ['Peso: 52 g', 'Duración: 8 h', 'Efecto Marmoleado'],
    description: 'Flor de pétalos redondeados y acolchados que combina cera amarilla radiante con suaves nubes de cera blanca cremosa.'
  },
  {
    id: 'flor-terracota',
    name: 'Flor Terracota de Otoño',
    category: 'flores5',
    category_label: '🌸 Flores de 5 Pétalos',
    scent: 'Manzanilla, Mandarina & Ámbar',
    price: 2500,
    cost: 1000,
    stock: 20,
    min_stock: 5,
    image: 'imagenes/flor-terracota.png',
    badge: '🧡 Hecha a Mano',
    tray_origin: 'Cinco pétalos redondeados en tono terracota cálido con centro oscuro',
    specs: ['Peso: 54 g', 'Duración: 8.5 h', '5 Pétalos Redondeados'],
    description: 'Flor artesanal de cinco pétalos en tono terracota cálido con corazón oscuro, perfecta para centros de mesa cálidos y luminosos.'
  },
  {
    id: 'mini-flores-solares',
    name: 'Set x4 Mini Flores Solares & Botón Dorado',
    category: 'especiales',
    category_label: '💐 Ramos, Frascos & Esencia',
    scent: 'Miel de Manzanilla & Cítricos Suaves',
    price: 2000,
    cost: 800,
    stock: 30,
    min_stock: 6,
    image: 'imagenes/mini-flores-solares.png',
    badge: '✨ Set x4 Unidades',
    tray_origin: 'Mini flores solares acanaladas y botones redondos en cera amarillo miel',
    specs: ['Incluye: 4 Mini Velas', 'Peso Total: 80 g', 'Ideales para Eventos'],
    description: 'Conjunto de mini flores solares acanaladas y botón redondo en tonos amarillo oro y miel ámbar. Perfectas como recordatorios o para acompañar arreglos florales.'
  },
  {
    id: 'ramo-velas-sol',
    name: 'Bouquet Floral "Sol de Manzanilla"',
    category: 'especiales',
    category_label: '💐 Ramos, Frascos & Esencia',
    scent: 'Bouquet Intenso de Manzanilla & Rosa',
    price: 10000,
    cost: 4000,
    stock: 12,
    min_stock: 3,
    image: 'imagenes/ramo-velas-ia.png',
    badge: '💐 Bouquet Regalo',
    tray_origin: 'Arreglo artesanal en tul verde escarchado con lazo satinado amarillo',
    specs: ['Incluye: 4 Velas en Ramo', 'Base de Vidrio + Tul', 'Listo para Regalar'],
    description: 'Espectacular arreglo tipo bouquet con una gran flor amarilla de 5 pétalos y centro rosa en la cima, rodeada de velas circulares amarillas sobre tul verde esmeralda con destellos y lazo satinado.'
  },
  {
    id: 'vela-frasco-bicolor',
    name: 'Frasco Bicolor "Brisa de Manzanilla"',
    category: 'especiales',
    category_label: '💐 Ramos, Frascos & Esencia',
    scent: 'Aceite Esencial de Manzanilla & Verbena',
    price: 4500,
    cost: 1800,
    stock: 18,
    min_stock: 4,
    image: 'imagenes/vela-frasco-rosa.jpeg',
    badge: '⭐ Favorito Danny Scents',
    tray_origin: 'Frasco de vidrio con degradado verde-amarillo y rosa amarilla esculpida en la cima',
    specs: ['Contenido: 220 g', 'Duración: 40+ horas', 'Frasco Reutilizable'],
    description: 'Vela premium en frasco de vidrio cristalino con doble capa en degradado verde pradera y amarillo manzanilla, coronada en la superficie por una delicada rosa amarilla esculpida en cera.'
  },
  {
    id: 'manzanilla-deshidratada-natural',
    name: 'Manzanilla Deshidratada 100% Natural',
    category: 'especiales',
    category_label: '💐 Ramos, Frascos & Esencia',
    scent: 'Flor de Manzanilla Pura & Notas Herbales',
    price: 1500,
    cost: 600,
    stock: 30,
    min_stock: 6,
    image: 'imagenes/manzanilla-deshidratada.jpg',
    badge: '🌿 100% Natural',
    tray_origin: 'Flores enteras y botones de manzanilla seleccionados y secados artesanalmente',
    specs: ['Flor Seca Seleccionada', 'Aroma Herbal Relajante', '100% Orgánica'],
    description: 'Selección botánica de flores y botones de manzanilla deshidratada de forma natural para conservar intacto su aroma dulce, herbal y relajante. Ideal para infusiones aromáticas, baños botánicos, saquitos perfumados o decoración artesanal.'
  },
  {
    id: 'vela-pequena-manzanilla',
    name: 'Vela Pequeña de Manzanilla 100% Natural',
    category: 'especiales',
    category_label: '💐 Ramos, Frascos & Esencia',
    scent: 'Aroma de Manzanilla 100% Natural',
    price: 3000,
    cost: 1200,
    stock: 25,
    min_stock: 5,
    image: 'imagenes/vela-pequena-manzanilla.jpg',
    badge: '🌼 100% Natural',
    tray_origin: 'Frasco compacto de cristal coronado con flor acanalada ámbar y brote verde',
    specs: ['Contenido: 110 g', 'Duración: 18+ horas', 'Esencia 100% Natural'],
    description: 'Delicada vela pequeña en envase de cristal transparente con etiqueta artesanal Danny Essence, elaborada con aroma de manzanilla 100% natural y coronada por un relieve floral ámbar con pabilo de hojita verde.'
  },
  {
    id: 'vela-grandecita-manzanilla-flor',
    name: 'Vela Grandecita de Manzanilla con Flor',
    category: 'especiales',
    category_label: '💐 Ramos, Frascos & Esencia',
    scent: 'Manzanilla 100% Natural & Miel Dorada',
    price: 4000,
    cost: 1600,
    stock: 20,
    min_stock: 5,
    image: 'imagenes/vela-grandecita-manzanilla.jpg',
    badge: '🌸 Con Flor Encima',
    tray_origin: 'Frasco alto decorado con lazo de yute rústico y flor esculpida en la cima',
    specs: ['Contenido: 180 g', 'Duración: 32+ horas', 'Con Flor Esculpida'],
    description: 'Vela grandecita en frasco de vidrio facetado decorado con un lazo de cabuya artesanal. Elaborada con esencia de manzanilla 100% natural en tonos dorados y verdes, coronada en la cima por una hermosa flor esculpida en cera con brote botánico.'
  },
  {
    id: 'aceite-manzanilla-natural',
    name: 'Aceite de Manzanilla 100% Natural',
    category: 'especiales',
    category_label: '💐 Ramos, Frascos & Esencia',
    scent: 'Extracto Puro de Manzanilla Dorada',
    price: 2800,
    cost: 1100,
    stock: 25,
    min_stock: 5,
    image: 'imagenes/aceite-manzanilla-natural.jpg',
    badge: '💧 Esencia Pura',
    tray_origin: 'Botella de vidrio con tapón de corcho natural y lazo de rafia artesanal',
    specs: ['Extracto 100% Natural', 'Tapón de Corcho', 'Aromaterapia & Piel'],
    description: 'Aceite concentrado de manzanilla 100% natural presentado en una elegante botella de vidrio con tapón de corcho y lazo rústico. Su fórmula botánica de tono dorado luminoso es ideal para difusores, masajes relajantes, cuidado de la piel y aromaterapia en el hogar.'
  }
];

const nowSeed = getLocalISO();
const checkProd = db.prepare('SELECT id FROM products WHERE id = ?');
const insertProd = db.prepare(`
  INSERT INTO products (
    id, name, category, category_label, scent, price, cost, stock, min_stock,
    image, badge, tray_origin, specs, description, active, created_at, updated_at
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ?)
`);
const insertMov = db.prepare(`
  INSERT INTO inventory_movements (
    product_id, product_name, type, quantity, prev_stock, new_stock, unit_cost, note, user_name, created_at
  ) VALUES (?, ?, 'entrada', ?, 0, ?, ?, 'Inventario inicial del catálogo', 'Sistema', ?)
`);

for (const p of INITIAL_PRODUCTS) {
  if (!checkProd.get(p.id)) {
    insertProd.run(
      p.id, p.name, p.category, p.category_label, p.scent, p.price, p.cost, p.stock, p.min_stock,
      p.image, p.badge, p.tray_origin, JSON.stringify(p.specs), p.description, nowSeed, nowSeed
    );
    insertMov.run(p.id, p.name, p.stock, p.stock, p.cost, nowSeed);
  }
}

module.exports = {
  db,
  getLocalISO,
  hashPassword
};
