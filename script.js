// =========================================================
// CATÁLOGO BASE Y ESTADO GLOBAL — DANNY SCENTS
// =========================================================
const DEFAULT_PRODUCTS = [
  {
    id: 'osito-miel-ambar',
    name: 'Osito Miel Ámbar Clásico',
    category: 'ositos',
    categoryLabel: '🧸 Ositos Ternura',
    scent: 'Miel Silvestre & Manzanilla',
    price: 6000,
    cost: 2400,
    stock: 20,
    minStock: 5,
    image: 'imagenes/osito-miel-ambar.png',
    badge: '🍯 Cera Natural',
    trayOrigin: 'Moldeado artesanal en tono ámbar miel con alto brillo y relieve en patitas',
    specs: ['Peso: 90 g', 'Duración: 16 h', 'Cera Vegetal & Abeja'],
    description: 'Figura artesanal de osito sentado en tono ámbar miel translúcido de alto brillo. Moldeado con tiernos detalles en orejas, hocico y patitas, ideal para recordatorios cálidos y decoración.'
  },
  {
    id: 'rosa-azul-noche',
    name: 'Rosa Azul Noche Bicolor',
    category: 'rosas',
    categoryLabel: '🌹 Rosas Esculpidas',
    scent: 'Manzanilla Nocturna & Lavanda Suave',
    price: 2500,
    cost: 1000,
    stock: 25,
    minStock: 5,
    image: 'imagenes/rosa-azul-noche.png',
    badge: '✨ Doble Tono',
    trayOrigin: 'Esculpida pétalo a pétalo con degradado azul índigo y base marfil cremosa',
    specs: ['Peso: 68 g', 'Duración: 12 h', 'Doble Tono Artesanal'],
    description: 'Rosa en flor esculpida pétalo a pétalo con degradado bicolor: corazón en azul índigo profundo que se funde suavemente hacia una base marfil cremosa.'
  },
  {
    id: 'margarita-blanca-manzanilla',
    name: 'Margarita Blanca de Manzanilla',
    category: 'margaritas',
    categoryLabel: '🌼 Margaritas',
    scent: 'Aceite Esencial Puro de Manzanilla',
    price: 2500,
    cost: 1000,
    stock: 25,
    minStock: 5,
    image: 'imagenes/margarita-blanca-manzanilla.png',
    badge: '🌼 Flor Insignia',
    trayOrigin: 'Inspirada en la flor natural de manzanilla con pétalos marfil y centro cálido',
    specs: ['Peso: 55 g', 'Duración: 9 h', '18 Pétalos Esculpidos'],
    description: 'Flor multipétalo en cera marfil luminosa con cálido centro amarillo-verdoso, inspirada directamente en la flor natural de la manzanilla.'
  },
  {
    id: 'flor-bicolor-amarillo-blanco',
    name: 'Flor Bicolor "Sol y Nube"',
    category: 'flores5',
    categoryLabel: '🌸 Flores de 5 Pétalos',
    scent: 'Manzanilla Solar & Flor de Azahar',
    price: 2500,
    cost: 1000,
    stock: 20,
    minStock: 5,
    image: 'imagenes/flor-bicolor-amarillo-blanco.png',
    badge: '☀️ Marmoleada',
    trayOrigin: 'Pétalos acolchados en mezcla artesanal de cera amarilla y blanca',
    specs: ['Peso: 52 g', 'Duración: 8 h', 'Efecto Marmoleado'],
    description: 'Flor de pétalos redondeados y acolchados que combina cera amarilla radiante con suaves nubes de cera blanca cremosa.'
  },
  {
    id: 'flor-terracota',
    name: 'Flor Terracota de Otoño',
    category: 'flores5',
    categoryLabel: '🌸 Flores de 5 Pétalos',
    scent: 'Manzanilla, Mandarina & Ámbar',
    price: 2500,
    cost: 1000,
    stock: 20,
    minStock: 5,
    image: 'imagenes/flor-terracota.png',
    badge: '🧡 Hecha a Mano',
    trayOrigin: 'Cinco pétalos redondeados en tono terracota cálido con centro oscuro',
    specs: ['Peso: 54 g', 'Duración: 8.5 h', '5 Pétalos Redondeados'],
    description: 'Flor artesanal de cinco pétalos en tono terracota cálido con corazón oscuro, perfecta para centros de mesa cálidos y luminosos.'
  },
  {
    id: 'mini-flores-solares',
    name: 'Set x4 Mini Flores Solares & Botón Dorado',
    category: 'especiales',
    categoryLabel: '💐 Ramos, Frascos & Esencia',
    scent: 'Miel de Manzanilla & Cítricos Suaves',
    price: 2000,
    cost: 800,
    stock: 30,
    minStock: 6,
    image: 'imagenes/mini-flores-solares.png',
    badge: '✨ Set x4 Unidades',
    trayOrigin: 'Mini flores solares acanaladas y botones redondos en cera amarillo miel',
    specs: ['Incluye: 4 Mini Velas', 'Peso Total: 80 g', 'Ideales para Eventos'],
    description: 'Conjunto de mini flores solares acanaladas y botón redondo en tonos amarillo oro y miel ámbar. Perfectas como recordatorios o para acompañar arreglos florales.'
  },
  {
    id: 'ramo-velas-sol',
    name: 'Bouquet Floral "Sol de Manzanilla"',
    category: 'especiales',
    categoryLabel: '💐 Ramos, Frascos & Esencia',
    scent: 'Bouquet Intenso de Manzanilla & Rosa',
    price: 10000,
    cost: 4000,
    stock: 12,
    minStock: 3,
    image: 'imagenes/ramo-velas-ia.png',
    badge: '💐 Bouquet Regalo',
    trayOrigin: 'Arreglo artesanal en tul verde escarchado con lazo satinado amarillo',
    specs: ['Incluye: 4 Velas en Ramo', 'Base de Vidrio + Tul', 'Listo para Regalar'],
    description: 'Espectacular arreglo tipo bouquet con una gran flor amarilla de 5 pétalos y centro rosa en la cima, rodeada de velas circulares amarillas sobre tul verde esmeralda con destellos y lazo satinado.'
  },
  {
    id: 'vela-frasco-bicolor',
    name: 'Frasco Bicolor "Brisa de Manzanilla"',
    category: 'especiales',
    categoryLabel: '💐 Ramos, Frascos & Esencia',
    scent: 'Aceite Esencial de Manzanilla & Verbena',
    price: 4500,
    cost: 1800,
    stock: 18,
    minStock: 4,
    image: 'imagenes/vela-frasco-rosa.jpeg',
    badge: '⭐ Favorito Danny Scents',
    trayOrigin: 'Frasco de vidrio con degradado verde-amarillo y rosa amarilla esculpida en la cima',
    specs: ['Contenido: 220 g', 'Duración: 40+ horas', 'Frasco Reutilizable'],
    description: 'Vela premium en frasco de vidrio cristalino con doble capa en degradado verde pradera y amarillo manzanilla, coronada en la superficie por una delicada rosa amarilla esculpida en cera.'
  },
  {
    id: 'manzanilla-deshidratada-natural',
    name: 'Manzanilla Deshidratada 100% Natural',
    category: 'especiales',
    categoryLabel: '💐 Ramos, Frascos & Esencia',
    scent: 'Flor de Manzanilla Pura & Notas Herbales',
    price: 1500,
    cost: 600,
    stock: 30,
    minStock: 6,
    image: 'imagenes/manzanilla-deshidratada.jpg',
    badge: '🌿 100% Natural',
    trayOrigin: 'Flores enteras y botones de manzanilla seleccionados y secados artesanalmente',
    specs: ['Flor Seca Seleccionada', 'Aroma Herbal Relajante', '100% Orgánica'],
    description: 'Selección botánica de flores y botones de manzanilla deshidratada de forma natural para conservar intacto su aroma dulce, herbal y relajante. Ideal para infusiones aromáticas, baños botánicos, saquitos perfumados o decoración artesanal.'
  },
  {
    id: 'vela-pequena-manzanilla',
    name: 'Vela Pequeña de Manzanilla 100% Natural',
    category: 'especiales',
    categoryLabel: '💐 Ramos, Frascos & Esencia',
    scent: 'Aroma de Manzanilla 100% Natural',
    price: 3000,
    cost: 1200,
    stock: 25,
    minStock: 5,
    image: 'imagenes/vela-pequena-manzanilla.jpg',
    badge: '🌼 100% Natural',
    trayOrigin: 'Frasco compacto de cristal coronado con flor acanalada ámbar y brote verde',
    specs: ['Contenido: 110 g', 'Duración: 18+ horas', 'Esencia 100% Natural'],
    description: 'Delicada vela pequeña en envase de cristal transparente con etiqueta artesanal Danny Essence, elaborada con aroma de manzanilla 100% natural y coronada por un relieve floral ámbar con pabilo de hojita verde.'
  },
  {
    id: 'vela-grandecita-manzanilla-flor',
    name: 'Vela Grandecita de Manzanilla con Flor',
    category: 'especiales',
    categoryLabel: '💐 Ramos, Frascos & Esencia',
    scent: 'Manzanilla 100% Natural & Miel Dorada',
    price: 4000,
    cost: 1600,
    stock: 20,
    minStock: 5,
    image: 'imagenes/vela-grandecita-manzanilla.jpg',
    badge: '🌸 Con Flor Encima',
    trayOrigin: 'Frasco alto decorado con lazo de yute rústico y flor esculpida en la cima',
    specs: ['Contenido: 180 g', 'Duración: 32+ horas', 'Con Flor Esculpida'],
    description: 'Vela grandecita en frasco de vidrio facetado decorado con un lazo de cabuya artesanal. Elaborada con esencia de manzanilla 100% natural en tonos dorados y verdes, coronada en la cima por una hermosa flor esculpida en cera con brote botánico.'
  },
  {
    id: 'aceite-manzanilla-natural',
    name: 'Aceite de Manzanilla 100% Natural',
    category: 'especiales',
    categoryLabel: '💐 Ramos, Frascos & Esencia',
    scent: 'Extracto Puro de Manzanilla Dorada',
    price: 2800,
    cost: 1100,
    stock: 25,
    minStock: 5,
    image: 'imagenes/aceite-manzanilla-natural.jpg',
    badge: '💧 Esencia Pura',
    trayOrigin: 'Botella de vidrio con tapón de corcho natural y lazo de rafia artesanal',
    specs: ['Extracto 100% Natural', 'Tapón de Corcho', 'Aromaterapia & Piel'],
    description: 'Aceite concentrado de manzanilla 100% natural presentado en una elegante botella de vidrio con tapón de corcho y lazo rústico. Su fórmula botánica de tono dorado luminoso es ideal para difusores, masajes relajantes, cuidado de la piel y aromaterapia en el hogar.'
  }
];

const CATEGORY_MAP = {
  ositos: '🧸 Ositos Ternura',
  rosas: '🌹 Rosas Esculpidas',
  margaritas: '🌼 Margaritas',
  flores5: '🌸 Flores de 5 Pétalos',
  especiales: '💐 Ramos, Frascos & Esencia'
};

const MONTH_NAMES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

let PRODUCTS = [...DEFAULT_PRODUCTS];
let MOVEMENTS = [];
let SALES = [];
let cart = [];

let currentUser = null;
let authToken = localStorage.getItem('ds_auth_token') || '';
let uploadedProductImageBase64 = '';

let currentCategory = 'todos';
let searchQuery = '';
let currentSort = 'featured';

function getTodayStr() {
  const d = new Date();
  const tz = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - tz).toISOString().slice(0, 10);
}

function formatCOP(amount) {
  return '$' + Math.round(Number(amount || 0)).toLocaleString('es-CO') + ' COP';
}

function formatMonthName(yyyyMM) {
  if (!yyyyMM || !yyyyMM.includes('-')) return yyyyMM || '';
  const [y, m] = yyyyMM.split('-');
  const idx = parseInt(m, 10) - 1;
  return `${MONTH_NAMES[idx] || m} ${y}`;
}

// =========================================================
// API HELPER CON MOTOR DE BASE DE DATOS LOCAL / SERVIDOR HÍBRIDO
// (Funciona con SQLite en Node.js y también en Render Static Site)
// =========================================================
const CLOUD_SYNC_PRIMARY = 'https://fes-construccion.onrender.com/api/danny-scents/state';
const CLOUD_NTFY_FILES = 'https://ntfy.sh/danny_scents_files_v1';
const CLOUD_NTFY_POINTER = 'https://ntfy.sh/danny_scents_pointer_v1';
const CLOUD_SYNC_MIRROR = 'https://api.restful-api.dev/objects/ff808181a09d98f701a1cffd7a7b1689';
let lastSyncedTimestamp = 0;

function getLocalDB() {
  const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
  const raw = localStorage.getItem('ds_full_database_v1');
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.products) && parsed.products.length > 0) {
        const deletedSet = new Set(Array.isArray(parsed.deletedIds) ? parsed.deletedIds : []);
        const existingIds = new Set(parsed.products.map(p => p.id));
        let addedMissingDefaults = false;
        for (const defProd of DEFAULT_PRODUCTS) {
          if (!existingIds.has(defProd.id) && !deletedSet.has(defProd.id)) {
            parsed.products.push({ ...defProd, createdAt: now, updatedAt: now });
            addedMissingDefaults = true;
          }
        }
        if (addedMissingDefaults) {
          localStorage.setItem('ds_full_database_v1', JSON.stringify(parsed));
        }
        return parsed;
      }
    } catch (e) {}
  }
  const initialDB = {
    updatedAt: 1,
    deletedIds: [],
    products: DEFAULT_PRODUCTS.map(p => ({ ...p, createdAt: now, updatedAt: now })),
    movements: DEFAULT_PRODUCTS.map((p, idx) => ({
      id: idx + 1,
      product_id: p.id,
      product_name: p.name,
      type: 'entrada',
      quantity: p.stock,
      prev_stock: 0,
      new_stock: p.stock,
      unit_cost: p.cost,
      note: 'Inventario inicial del catálogo',
      user_name: 'Sistema',
      created_at: now
    })),
    sales: []
  };
  localStorage.setItem('ds_full_database_v1', JSON.stringify(initialDB));
  return initialDB;
}

async function pushToCloud(dbData) {
  const payload = {
    updatedAt: Number(dbData.updatedAt) || Date.now(),
    deletedIds: Array.isArray(dbData.deletedIds) ? dbData.deletedIds : [],
    products: dbData.products || [],
    movements: (dbData.movements || []).slice(0, 250),
    sales: (dbData.sales || []).slice(0, 250)
  };
  const bodyStr = JSON.stringify(payload);

  const reqPrimary = fetch(CLOUD_SYNC_PRIMARY, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: bodyStr
  }).catch(() => null);

  const reqNtfy = (async () => {
    try {
      const fileRes = await fetch(CLOUD_NTFY_FILES, {
        method: 'PUT',
        headers: { 'Filename': 'danny_db.json' },
        body: bodyStr
      });
      if (!fileRes.ok) return null;
      const fileMeta = await fileRes.json();
      const fileUrl = fileMeta?.attachment?.url;
      if (!fileUrl) return null;

      const pointerObj = { updatedAt: payload.updatedAt, fileUrl };
      await Promise.all([
        fetch(CLOUD_NTFY_POINTER, {
          method: 'POST',
          body: JSON.stringify(pointerObj)
        }).catch(() => null),
        fetch(CLOUD_SYNC_MIRROR, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: 'danny-scents-shared-db-v1', data: pointerObj })
        }).catch(() => null)
      ]);
      return true;
    } catch (e) {
      return null;
    }
  })();

  await Promise.all([reqPrimary, reqNtfy]);
}

async function syncFromCloud() {
  const localDB = getLocalDB();
  const fetchJsonWithTimeout = (url, ms = 4500) => {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), ms);
    return fetch(url, { cache: 'no-store', signal: ctrl.signal })
      .then(r => (r.ok ? r.json() : null))
      .catch(() => null)
      .finally(() => clearTimeout(timer));
  };

  const fetchTextWithTimeout = (url, ms = 4500) => {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), ms);
    return fetch(url, { cache: 'no-store', signal: ctrl.signal })
      .then(r => (r.ok ? r.text() : null))
      .catch(() => null)
      .finally(() => clearTimeout(timer));
  };

  const [resPrimary, ntfyLinesRaw, resMirror] = await Promise.all([
    fetchJsonWithTimeout(CLOUD_SYNC_PRIMARY),
    fetchTextWithTimeout(`${CLOUD_NTFY_POINTER}/json?poll=1&since=all`),
    fetchJsonWithTimeout(CLOUD_SYNC_MIRROR)
  ]);

  let candidates = [];
  if (resPrimary && Array.isArray(resPrimary.products) && resPrimary.products.length > 0) {
    candidates.push(resPrimary);
  }

  let pointerUrls = [];
  if (ntfyLinesRaw) {
    const lines = ntfyLinesRaw.trim().split('\n').filter(Boolean);
    for (let i = lines.length - 1; i >= 0; i--) {
      try {
        const ev = JSON.parse(lines[i]);
        if (ev && ev.message) {
          const ptr = JSON.parse(ev.message);
          if (ptr && ptr.fileUrl) {
            pointerUrls.push(ptr.fileUrl);
            break;
          }
        }
      } catch (e) {}
    }
  }
  if (resMirror && resMirror.data && resMirror.data.fileUrl && !pointerUrls.includes(resMirror.data.fileUrl)) {
    pointerUrls.push(resMirror.data.fileUrl);
  }

  if (pointerUrls.length > 0) {
    const fileStates = await Promise.all(pointerUrls.map(u => fetchJsonWithTimeout(u)));
    for (const st of fileStates) {
      if (st && Array.isArray(st.products) && st.products.length > 0) {
        candidates.push(st);
      }
    }
  }

  // Si la nube aún está vacía, subir la base de datos de este dispositivo para compartirla con todos
  if (candidates.length === 0) {
    localDB.updatedAt = Number(localDB.updatedAt) || Date.now();
    localStorage.setItem('ds_full_database_v1', JSON.stringify(localDB));
    await pushToCloud(localDB);
    return localDB;
  }

  candidates.sort((a, b) => (Number(b.updatedAt) || 0) - (Number(a.updatedAt) || 0));
  const bestCloud = candidates[0];

  const deletedSet = new Set([
    ...(Array.isArray(bestCloud.deletedIds) ? bestCloud.deletedIds : []),
    ...(Array.isArray(localDB.deletedIds) ? localDB.deletedIds : [])
  ]);

  // Si este dispositivo tenía productos personalizados creados antes de sincronizar, unirlos y subirlos
  const cloudIds = new Set((bestCloud.products || []).map(p => p.id));
  const localExtraProducts = (localDB.products || []).filter(
    p => !cloudIds.has(p.id) && !deletedSet.has(p.id)
  );

  let finalState = bestCloud;
  if ((Number(localDB.updatedAt) || 0) > (Number(bestCloud.updatedAt) || 0)) {
    finalState = localDB;
    await pushToCloud(finalState);
  } else if (localExtraProducts.length > 0) {
    finalState = {
      ...bestCloud,
      updatedAt: Date.now(),
      deletedIds: Array.from(deletedSet),
      products: [...bestCloud.products, ...localExtraProducts]
    };
    await pushToCloud(finalState);
  }

  lastSyncedTimestamp = Number(finalState.updatedAt) || Date.now();
  localStorage.setItem('ds_full_database_v1', JSON.stringify(finalState));
  return finalState;
}

function saveLocalDB(dbData) {
  dbData.updatedAt = Date.now();
  lastSyncedTimestamp = dbData.updatedAt;
  localStorage.setItem('ds_full_database_v1', JSON.stringify(dbData));
  return pushToCloud(dbData);
}

async function handleLocalDBRequest(url, options = {}) {
  const method = (options.method || 'GET').toUpperCase();
  const body = options.body ? JSON.parse(options.body) : {};
  if (method === 'GET' && (url === '/api/products' || url === '/api/sales' || url === '/api/inventory/movements')) {
    await syncFromCloud();
  }
  const dbData = getLocalDB();
  const d = new Date();
  const tz = d.getTimezoneOffset() * 60000;
  const now = new Date(d.getTime() - tz).toISOString().slice(0, 19).replace('T', ' ');

  if (url === '/api/auth/login' && method === 'POST') {
    const u = String(body.username || '').trim().toLowerCase();
    const p = String(body.password || '');
    if ((u === 'admin' && p === 'admin123') || (u === 'danny' && (p === 'danny2026' || p === 'admin123'))) {
      const user = {
        id: u === 'admin' ? 1 : 2,
        username: u,
        fullName: u === 'admin' ? 'Administrador Danny Scents' : 'Danny Scents Principal',
        role: 'admin'
      };
      localStorage.setItem('ds_local_user', JSON.stringify(user));
      return { token: 'local-token-' + Date.now(), user };
    }
    throw new Error('Usuario o contraseña incorrectos');
  }

  if (url === '/api/auth/me' && method === 'GET') {
    const savedUser = localStorage.getItem('ds_local_user');
    if (savedUser) return { user: JSON.parse(savedUser) };
    throw new Error('No autenticado');
  }

  if (url === '/api/auth/logout' && method === 'POST') {
    localStorage.removeItem('ds_local_user');
    return { ok: true };
  }

  if (url === '/api/products' && method === 'GET') {
    return { products: dbData.products };
  }

  if (url === '/api/products' && method === 'POST') {
    const id = 'prod-' + Date.now();
    const newProd = {
      id,
      name: body.name,
      category: body.category || 'especiales',
      categoryLabel: body.categoryLabel || CATEGORY_MAP[body.category] || '✨ Edición Especial',
      scent: body.scent || 'Aceite Esencial Puro de Manzanilla',
      price: Number(body.price) || 0,
      cost: Number(body.cost) || 0,
      stock: Number(body.stock) || 0,
      minStock: Number(body.minStock) || 5,
      image: body.image || 'imagenes/osito-miel-ambar.png',
      badge: body.badge || '✨ Hecha a Mano',
      trayOrigin: body.trayOrigin || 'Elaborada artesanalmente en cera natural',
      specs: Array.isArray(body.specs) ? body.specs : ['Hecha a Mano'],
      description: body.description || '',
      createdAt: now,
      updatedAt: now
    };
    dbData.products.push(newProd);
    dbData.movements.unshift({
      id: Date.now(),
      product_id: id,
      product_name: newProd.name,
      type: 'entrada',
      quantity: newProd.stock,
      prev_stock: 0,
      new_stock: newProd.stock,
      unit_cost: newProd.cost,
      note: 'Stock inicial al crear producto',
      user_name: currentUser?.fullName || 'Admin',
      created_at: now
    });
    await saveLocalDB(dbData);
    return { product: newProd };
  }

  if (url.startsWith('/api/products/')) {
    const id = decodeURIComponent(url.replace('/api/products/', ''));
    const idx = dbData.products.findIndex(p => p.id === id);
    if (idx === -1) throw new Error('Producto no encontrado');

    if (method === 'PUT') {
      const prev = dbData.products[idx];
      const updated = { ...prev, ...body, updatedAt: now };
      dbData.products[idx] = updated;
      if (Number(updated.stock) !== Number(prev.stock)) {
        dbData.movements.unshift({
          id: Date.now(),
          product_id: id,
          product_name: updated.name,
          type: 'ajuste',
          quantity: Math.abs(Number(updated.stock) - Number(prev.stock)),
          prev_stock: prev.stock,
          new_stock: updated.stock,
          unit_cost: updated.cost,
          note: 'Ajuste desde edición de producto',
          user_name: currentUser?.fullName || 'Admin',
          created_at: now
        });
      }
      await saveLocalDB(dbData);
      return { product: updated };
    }

    if (method === 'DELETE') {
      dbData.deletedIds = Array.isArray(dbData.deletedIds) ? dbData.deletedIds : [];
      if (!dbData.deletedIds.includes(id)) dbData.deletedIds.push(id);
      dbData.products.splice(idx, 1);
      await saveLocalDB(dbData);
      return { ok: true };
    }
  }

  if (url === '/api/inventory/adjust' && method === 'POST') {
    const prod = dbData.products.find(p => p.id === body.productId);
    if (!prod) throw new Error('Producto no encontrado');
    const prevStock = Number(prod.stock || 0);
    const qty = Number(body.quantity || 0);
    let newStock = prevStock;
    if (body.type === 'entrada') newStock = prevStock + qty;
    else if (body.type === 'salida') newStock = Math.max(0, prevStock - qty);
    else if (body.type === 'ajuste') newStock = qty;

    prod.stock = newStock;
    prod.updatedAt = now;
    dbData.movements.unshift({
      id: Date.now(),
      product_id: prod.id,
      product_name: prod.name,
      type: body.type,
      quantity: body.type === 'ajuste' ? Math.abs(newStock - prevStock) : qty,
      prev_stock: prevStock,
      new_stock: newStock,
      unit_cost: prod.cost,
      note: body.note || 'Actualización de stock',
      user_name: currentUser?.fullName || 'Admin',
      created_at: now
    });
    await saveLocalDB(dbData);
    return { product: prod };
  }

  if (url === '/api/inventory/movements' && method === 'GET') {
    return { movements: dbData.movements };
  }

  if (url === '/api/sales' && method === 'GET') {
    return { sales: dbData.sales };
  }

  if (url === '/api/sales' && method === 'POST') {
    const rawDate = body.saleDate ? String(body.saleDate).trim() : now;
    const saleDate = rawDate.length === 10 ? `${rawDate} ${now.slice(11)}` : rawDate;
    const saleDay = saleDate.slice(0, 10);
    const saleMonth = saleDate.slice(0, 7);
    const saleYear = saleDate.slice(0, 4);

    let subtotal = 0;
    let totalCost = 0;
    let totalUnits = 0;
    const resolvedItems = [];

    for (const item of (body.items || [])) {
      const prod = dbData.products.find(p => p.id === item.id);
      const qty = Math.max(1, parseInt(item.qty, 10) || 1);
      const unitPrice = item.price !== undefined ? Number(item.price) : (prod ? Number(prod.price) : 0);
      const unitCost = prod ? Number(prod.cost || 0) : Math.round(unitPrice * 0.4);
      const itemSubtotal = unitPrice * qty;
      subtotal += itemSubtotal;
      totalCost += unitCost * qty;
      totalUnits += qty;

      resolvedItems.push({
        productId: prod ? prod.id : item.id,
        productName: prod ? prod.name : (item.name || 'Producto'),
        categoryLabel: prod ? prod.categoryLabel : '🕯️ Velas',
        qty,
        unitPrice,
        unitCost,
        subtotal: itemSubtotal
      });

      if (prod) {
        const prev = Number(prod.stock || 0);
        prod.stock = Math.max(0, prev - qty);
        dbData.movements.unshift({
          id: Date.now() + Math.floor(Math.random() * 1000),
          product_id: prod.id,
          product_name: prod.name,
          type: 'venta',
          quantity: qty,
          prev_stock: prev,
          new_stock: prod.stock,
          unit_cost: unitCost,
          note: `Venta (${body.customerName || 'Cliente'})`,
          user_name: currentUser?.fullName || 'Tienda Online',
          created_at: now
        });
      }
    }

    const discount = Math.max(0, Number(body.discount) || 0);
    const total = Math.max(0, subtotal - discount);
    const profit = total - totalCost;
    const nextNum = dbData.sales.length + 1;
    const invoiceNumber = `DS-${String(nextNum).padStart(4, '0')}`;

    const newSale = {
      id: Date.now(),
      invoiceNumber,
      customerName: body.customerName || 'Cliente General',
      customerPhone: body.customerPhone || '',
      paymentMethod: body.paymentMethod || 'Efectivo',
      status: 'Completada',
      subtotal,
      discount,
      total,
      totalCost,
      profit,
      giftMessage: body.giftMessage || '',
      notes: body.notes || '',
      saleDate,
      saleDay,
      saleMonth,
      saleYear,
      totalUnits,
      items: resolvedItems
    };

    dbData.sales.unshift(newSale);
    await saveLocalDB(dbData);
    return { sale: newSale };
  }

  if (url.startsWith('/api/sales/') && method === 'DELETE') {
    const saleId = Number(url.replace('/api/sales/', ''));
    const idx = dbData.sales.findIndex(s => Number(s.id) === saleId);
    if (idx !== -1) {
      const sale = dbData.sales[idx];
      for (const item of (sale.items || [])) {
        const prod = dbData.products.find(p => p.id === item.productId);
        if (prod) {
          const prev = Number(prod.stock || 0);
          prod.stock = prev + Number(item.qty);
          dbData.movements.unshift({
            id: Date.now() + Math.floor(Math.random() * 1000),
            product_id: prod.id,
            product_name: prod.name,
            type: 'entrada',
            quantity: item.qty,
            prev_stock: prev,
            new_stock: prod.stock,
            unit_cost: prod.cost,
            note: `Reverso por anulación de ${sale.invoiceNumber}`,
            user_name: currentUser?.fullName || 'Admin',
            created_at: now
          });
        }
      }
      dbData.sales.splice(idx, 1);
      await saveLocalDB(dbData);
    }
    return { ok: true };
  }

  return { ok: true };
}

const RENDER_CLOUD_URL = 'https://danny-scents.onrender.com';

function isRunningInMobileApp() {
  if (typeof window === 'undefined') return false;
  if (window.Capacitor && typeof window.Capacitor.isNativePlatform === 'function' && window.Capacitor.isNativePlatform()) {
    return true;
  }
  if (window.AndroidDownloader) return true;
  const proto = window.location.protocol;
  if (proto === 'capacitor:' || proto === 'file:') return true;
  if (window.location.hostname === 'localhost' && !window.location.port) return true;
  return false;
}

async function apiFetch(url, options = {}) {
  // Usar siempre el motor sincronizado en la nube para compartir productos, stock y ventas entre todos los celulares y la web
  return handleLocalDBRequest(url, options);
}

async function loadCatalogFromDB() {
  try {
    const data = await apiFetch('/api/products');
    if (Array.isArray(data.products) && data.products.length > 0) {
      PRODUCTS = data.products;
      localStorage.setItem('ds_products_backup', JSON.stringify(PRODUCTS));
    }
  } catch (err) {
    const saved = localStorage.getItem('ds_products_backup');
    if (saved) {
      try { PRODUCTS = JSON.parse(saved); } catch (e) {}
    }
  }
  updateCatalogCounts();
  renderProducts();
}

function updateCatalogCounts() {
  const allTab = document.querySelector('.cat-tab[data-cat="todos"]');
  if (allTab) {
    allTab.textContent = `Todos los Productos (${PRODUCTS.length})`;
  }
}

// =========================================================
// TIENDA PÚBLICA Y CARRITO
// =========================================================
function getStockBadgeHTML(product) {
  const stock = Number(product.stock ?? 20);
  const min = Number(product.minStock ?? 5);
  if (stock <= 0) {
    return `<span class="stock-pill out">🔴 Agotado (0 disponibles)</span>`;
  }
  if (stock <= min) {
    return `<span class="stock-pill low">🟡 ¡Últimas ${stock} unidades!</span>`;
  }
  return `<span class="stock-pill ok">🟢 Disponible (${stock} en stock)</span>`;
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  let filtered = PRODUCTS.filter(p => {
    const matchesCat = currentCategory === 'todos' || p.category === currentCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch = !q ||
      p.name.toLowerCase().includes(q) ||
      p.scent.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  if (currentSort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'name-asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: #FFF; border-radius: 18px;">
        <h3 class="serif" style="font-size: 1.8rem; margin-bottom: 8px;">No encontramos figuras con esa búsqueda</h3>
        <p style="color: var(--text-secondary); margin-bottom: 16px;">Prueba con otra palabra clave o muestra todas las categorías.</p>
        <button class="btn btn-secondary" onclick="filterByCategory('todos')">Ver Todos los Productos</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const outOfStock = Number(product.stock ?? 1) <= 0;
    return `
      <article class="product-card" data-category="${product.category}">
        <div class="product-img-box">
          <div class="product-badges">
            <span class="badge badge-category">${product.categoryLabel}</span>
            <span class="badge badge-ai">${product.badge}</span>
          </div>
          <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="if(this.src && !this.dataset.fb && '${product.image}'.startsWith('imagenes/')){this.dataset.fb='1';this.src='https://raw.githubusercontent.com/farleymrtnz25/DANNY-SCENTS/main/${product.image}';}" />
          <button class="quick-view-btn" onclick="openQuickView('${product.id}')">🔍 Ver Detalle</button>
        </div>
        <div class="product-info">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:6px; margin-bottom:4px;">
            <div class="product-scent">🌼 ${product.scent}</div>
            ${getStockBadgeHTML(product)}
          </div>
          <h3 class="product-title serif">${product.name}</h3>
          <p class="product-desc">${product.description}</p>
          <div class="product-specs">
            ${(product.specs || []).map(s => `<span>• ${s}</span>`).join('')}
          </div>
          <div class="product-footer">
            <div class="product-price">
              $${Number(product.price).toLocaleString('es-CO')} <small>COP</small>
            </div>
            <button class="add-to-cart-btn" ${outOfStock ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''} onclick="addToCart('${product.id}')">
              ${outOfStock ? 'Agotado' : '+ Agregar'}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

window.filterByCategory = function(cat) {
  currentCategory = cat;
  document.querySelectorAll('.cat-tab').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-cat') === cat);
  });
  renderProducts();
  const catSection = document.getElementById('catalogo');
  if (catSection) {
    catSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

window.openQuickView = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  document.getElementById('modalImg').src = product.image;
  document.getElementById('modalImg').alt = product.name;
  document.getElementById('modalCategory').textContent = product.categoryLabel;
  document.getElementById('modalScent').textContent = '🌼 ' + product.scent;
  document.getElementById('modalTitle').textContent = product.name;
  document.getElementById('modalDesc').textContent = product.description;
  document.getElementById('modalTrayOrigin').textContent = product.trayOrigin;
  document.getElementById('modalPrice').textContent = formatCOP(product.price);
  document.getElementById('modalSpecs').innerHTML = (product.specs || []).map(s => `<span>• ${s}</span>`).join(' ');

  const addBtn = document.getElementById('modalAddBtn');
  addBtn.onclick = () => {
    addToCart(product.id);
    closeModal();
  };

  document.getElementById('overlay').classList.add('open');
  document.getElementById('quickViewModal').classList.add('open');
};

window.closeModal = function() {
  document.getElementById('quickViewModal')?.classList.remove('open');
  if (!document.getElementById('cartDrawer')?.classList.contains('open')) {
    document.getElementById('overlay')?.classList.remove('open');
  }
};

window.closeAllModals = function() {
  document.getElementById('quickViewModal')?.classList.remove('open');
  document.getElementById('loginModal')?.classList.remove('open');
  document.getElementById('productFormModal')?.classList.remove('open');
  document.getElementById('stockModal')?.classList.remove('open');
  if (!document.getElementById('cartDrawer')?.classList.contains('open')) {
    document.getElementById('overlay')?.classList.remove('open');
  }
};

window.addToCart = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  if (Number(product.stock ?? 1) <= 0) {
    showToast('⚠️ Este producto está agotado actualmente');
    return;
  }

  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    if (existing.qty + 1 > product.stock) {
      showToast(`⚠️ Solo hay ${product.stock} unidades disponibles en stock`);
      return;
    }
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }
  updateCartUI();
  showToast(`🕯️ "${product.name}" agregada a tu pedido`);
};

window.changeQty = function(id, delta) {
  const idx = cart.findIndex(item => item.id === id);
  if (idx === -1) return;
  const prod = PRODUCTS.find(p => p.id === id);
  if (delta > 0 && prod && cart[idx].qty + delta > prod.stock) {
    showToast(`⚠️ Stock máximo disponible: ${prod.stock} unidades`);
    return;
  }
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  }
  updateCartUI();
};

function updateCartUI() {
  const countEl = document.getElementById('cartCount');
  const mobileCountEl = document.getElementById('mobileCartCount');
  const listEl = document.getElementById('cartItemsList');
  const totalEl = document.getElementById('cartTotalValue');

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (countEl) countEl.textContent = totalItems;
  if (mobileCountEl) mobileCountEl.textContent = totalItems;
  if (totalEl) totalEl.textContent = formatCOP(totalPrice);

  if (!listEl) return;
  if (cart.length === 0) {
    listEl.innerHTML = `
      <div style="text-align: center; padding: 40px 12px; color: var(--text-muted);">
        <p style="font-size: 2rem; margin-bottom: 8px;">🕯️</p>
        <p>Tu canasta está vacía. Explora nuestras figuras artesanales con aroma a manzanilla.</p>
      </div>
    `;
    return;
  }

  listEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" />
      <div>
        <strong style="font-size: 0.92rem; display: block;">${item.name}</strong>
        <span style="font-size: 0.82rem; color: var(--sage-primary); font-weight: 700;">
          ${formatCOP(item.price)}
        </span>
        <div class="cart-qty-controls">
          <button class="qty-btn" onclick="changeQty('${item.id}', -1)">−</button>
          <span style="font-size: 0.85rem; font-weight: 600;">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
        </div>
      </div>
      <div style="font-weight: 700; font-size: 0.9rem;">
        $${(item.price * item.qty).toLocaleString('es-CO')}
      </div>
    </div>
  `).join('');
}

window.openCart = function() {
  document.getElementById('overlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
};

window.closeCart = function() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
};

window.checkoutOrder = async function() {
  if (cart.length === 0) {
    showToast('Agrega al menos una vela a tu pedido');
    return;
  }
  const customerName = document.getElementById('cartCustomerName')?.value.trim() || 'Cliente Tienda Web';
  const paymentMethod = document.getElementById('cartPaymentMethod')?.value || 'Efectivo';
  const giftMsg = document.getElementById('giftMessageInput')?.value || 'Encendida para iluminar mis metas.';
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const lines = cart.map(i => `• ${i.qty}x ${i.name} ($${(i.price * i.qty).toLocaleString('es-CO')})`).join('\n');

  let invoiceTag = '';
  try {
    const res = await apiFetch('/api/sales', {
      method: 'POST',
      body: JSON.stringify({
        customerName,
        paymentMethod,
        giftMessage: giftMsg,
        notes: 'Pedido desde carrito web',
        items: cart.map(i => ({ id: i.id, name: i.name, qty: i.qty, price: i.price }))
      })
    });
    if (res.sale && res.sale.invoiceNumber) {
      invoiceTag = `\n🧾 Factura registrada: ${res.sale.invoiceNumber}`;
    }
    await loadCatalogFromDB();
    if (currentUser) {
      await loadAdminData();
    }
  } catch (err) {
    console.warn('No se pudo sincronizar venta con servidor, continuando por WhatsApp:', err);
  }

  const message = `¡Hola DANNY SCENTS! 🕯️🌼 Quiero realizar el siguiente pedido de velas artesanales:${invoiceTag}\n👤 Cliente: ${customerName}\n💳 Pago: ${paymentMethod}\n\n${lines}\n\n🎀 Frase en caja: "${giftMsg}"\n💰 Total: ${formatCOP(totalPrice)}`;

  cart = [];
  updateCartUI();
  closeCart();
  showToast('✅ Pedido registrado en contabilidad y listo para enviar');

  const waUrl = `https://wa.me/573204159350?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
};

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// =========================================================
// AUTENTICACIÓN E INICIO DE SESIÓN
// =========================================================
window.handleAuthNavClick = function() {
  if (currentUser) {
    const panel = document.getElementById('adminPanelSection');
    panel.classList.add('active');
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
    document.getElementById('overlay').classList.add('open');
    document.getElementById('loginModal').classList.add('open');
  }
};

window.submitLogin = async function(e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;

  try {
    const data = await apiFetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password })
    });
    authToken = data.token;
    currentUser = data.user;
    localStorage.setItem('ds_auth_token', authToken);
    closeAllModals();
    onUserLoggedIn();
    showToast(`🔓 Bienvenido(a), ${currentUser.fullName}`);
  } catch (err) {
    showToast(`❌ ${err.message}`);
  }
};

window.logoutUser = async function() {
  try {
    await apiFetch('/api/auth/logout', { method: 'POST' });
  } catch (e) {}
  authToken = '';
  currentUser = null;
  localStorage.removeItem('ds_auth_token');
  document.getElementById('adminPanelSection').classList.remove('active');
  const navBtn = document.getElementById('authNavBtn');
  navBtn.classList.remove('logged-in');
  document.getElementById('authNavIcon').textContent = '🔐';
  document.getElementById('authNavLabel').textContent = 'Iniciar Sesión';
  const mobIcon = document.getElementById('mobileAuthNavIcon');
  const mobLabel = document.getElementById('mobileAuthNavLabel');
  if (mobIcon) mobIcon.textContent = '🔐';
  if (mobLabel) mobLabel.textContent = 'Ingresar';
  showToast('Sesión cerrada correctamente');
};

async function checkExistingSession() {
  if (!authToken) return;
  try {
    const data = await apiFetch('/api/auth/me');
    if (data.user) {
      currentUser = data.user;
      onUserLoggedIn(false);
    }
  } catch (e) {
    authToken = '';
    localStorage.removeItem('ds_auth_token');
  }
}

async function onUserLoggedIn(scroll = true) {
  const navBtn = document.getElementById('authNavBtn');
  navBtn.classList.add('logged-in');
  document.getElementById('authNavIcon').textContent = '📊';
  document.getElementById('authNavLabel').textContent = 'Panel de Usuario';
  const mobIcon = document.getElementById('mobileAuthNavIcon');
  const mobLabel = document.getElementById('mobileAuthNavLabel');
  if (mobIcon) mobIcon.textContent = '📊';
  if (mobLabel) mobLabel.textContent = 'Contabilidad';
  document.getElementById('adminUserNameDisplay').textContent = `${currentUser.fullName} (@${currentUser.username})`;

  const panel = document.getElementById('adminPanelSection');
  panel.classList.add('active');

  await loadAdminData();

  if (scroll) {
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// =========================================================
// PANEL DE USUARIO: NAVEGACIÓN Y CARGA DE DATOS CONTABLES
// =========================================================
window.switchAdminTab = function(tabName) {
  document.querySelectorAll('.admin-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-admintab') === tabName);
  });
  document.querySelectorAll('.admin-view').forEach(view => {
    view.classList.toggle('active', view.id === `adminView-${tabName}`);
  });
};

async function loadAdminData() {
  await loadCatalogFromDB();
  try {
    const [movRes, salesRes] = await Promise.all([
      apiFetch('/api/inventory/movements'),
      apiFetch('/api/sales')
    ]);
    MOVEMENTS = movRes.movements || [];
    SALES = salesRes.sales || [];
  } catch (err) {
    console.warn('Error cargando datos administrativos:', err);
  }

  renderAdminInventory();
  renderAdminMovements();
  initDateFiltersAndRenderSales();
  initPosBuilder();
}

// =========================================================
// 1. GESTIÓN DE INVENTARIO, PRODUCTOS Y STOCK
// =========================================================
function renderAdminInventory() {
  const kpiContainer = document.getElementById('inventoryKpis');
  const tbody = document.getElementById('adminInventoryTableBody');
  if (!kpiContainer || !tbody) return;

  const totalRefs = PRODUCTS.length;
  const totalUnits = PRODUCTS.reduce((acc, p) => acc + Number(p.stock || 0), 0);
  const totalCostVal = PRODUCTS.reduce((acc, p) => acc + Number(p.stock || 0) * Number(p.cost || 0), 0);
  const totalSaleVal = PRODUCTS.reduce((acc, p) => acc + Number(p.stock || 0) * Number(p.price || 0), 0);
  const potentialProfit = totalSaleVal - totalCostVal;
  const lowStockCount = PRODUCTS.filter(p => Number(p.stock || 0) <= Number(p.minStock || 5)).length;

  kpiContainer.innerHTML = `
    <div class="kpi-card">
      <div class="kpi-label">Referencias Activas</div>
      <div class="kpi-value">${totalRefs} Productos</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Unidades en Inventario</div>
      <div class="kpi-value">${totalUnits} Unid.</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Costo Total en Stock</div>
      <div class="kpi-value">${formatCOP(totalCostVal)}</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Valor Venta en Stock</div>
      <div class="kpi-value">${formatCOP(totalSaleVal)}</div>
    </div>
    <div class="kpi-card highlight">
      <div class="kpi-label">Utilidad Estimada en Stock</div>
      <div class="kpi-value">${formatCOP(potentialProfit)}</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Alertas Stock Bajo</div>
      <div class="kpi-value" style="color:${lowStockCount > 0 ? '#C5221F' : '#137333'};">${lowStockCount}</div>
    </div>
  `;

  tbody.innerHTML = PRODUCTS.map(p => {
    const unitProfit = Number(p.price) - Number(p.cost || 0);
    const totalVal = Number(p.stock || 0) * Number(p.price);
    return `
      <tr>
        <td><img src="${p.image}" alt="${p.name}" class="thumb" /></td>
        <td>
          <strong>${p.name}</strong>
          <div style="font-size:0.78rem; color:var(--text-muted);">${p.categoryLabel}</div>
        </td>
        <td>${formatCOP(p.cost || 0)}</td>
        <td><strong>${formatCOP(p.price)}</strong></td>
        <td style="color:#137333; font-weight:700;">+${formatCOP(unitProfit)}</td>
        <td>${getStockBadgeHTML(p)}</td>
        <td><strong>${formatCOP(totalVal)}</strong></td>
        <td>
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            <button class="btn-sm" onclick="openStockModal('${p.id}')">📦 + Stock</button>
            <button class="btn-sm" onclick="openProductModal('${p.id}')">✏️ Editar</button>
            <button class="btn-sm danger" onclick="deleteProduct('${p.id}')">🗑️</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function renderAdminMovements() {
  const tbody = document.getElementById('adminMovementsTableBody');
  if (!tbody) return;
  if (MOVEMENTS.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:20px;">No hay movimientos registrados.</td></tr>`;
    return;
  }

  const badgeByType = {
    entrada: '<span class="stock-pill ok">➕ Entrada</span>',
    salida: '<span class="stock-pill out">➖ Salida</span>',
    ajuste: '<span class="stock-pill low">🎯 Ajuste</span>',
    venta: '<span class="stock-pill low">🛍️ Venta</span>'
  };

  tbody.innerHTML = MOVEMENTS.slice(0, 60).map(m => `
    <tr>
      <td style="font-size:0.8rem;">${m.created_at}</td>
      <td><strong>${m.product_name}</strong></td>
      <td>${badgeByType[m.type] || m.type}</td>
      <td><strong>${m.quantity} unid.</strong></td>
      <td>${m.prev_stock} → <strong>${m.new_stock}</strong></td>
      <td>${m.note || '-'}</td>
      <td>${m.user_name || 'Admin'}</td>
    </tr>
  `).join('');
}

// Modal Producto (Crear / Editar)
window.openProductModal = function(productId = null) {
  uploadedProductImageBase64 = '';
  const form = document.getElementById('productForm');
  form.reset();

  if (productId) {
    const p = PRODUCTS.find(item => item.id === productId);
    if (!p) return;
    document.getElementById('productModalTitle').textContent = 'Editar Producto';
    document.getElementById('prodFormId').value = p.id;
    document.getElementById('prodName').value = p.name;
    document.getElementById('prodCategory').value = p.category;
    document.getElementById('prodPrice').value = p.price;
    document.getElementById('prodCost').value = p.cost || Math.round(p.price * 0.4);
    document.getElementById('prodStock').value = p.stock ?? 20;
    document.getElementById('prodMinStock').value = p.minStock ?? 5;
    document.getElementById('prodScent').value = p.scent || '';
    document.getElementById('prodBadge').value = p.badge || '✨ Hecha a Mano';
    document.getElementById('prodImageSelect').value = p.image;
    document.getElementById('prodSpecs').value = (p.specs || []).join(', ');
    document.getElementById('prodDesc').value = p.description || '';
  } else {
    document.getElementById('productModalTitle').textContent = 'Agregar Nuevo Producto';
    document.getElementById('prodFormId').value = '';
    document.getElementById('prodStock').value = 15;
    document.getElementById('prodMinStock').value = 5;
  }

  document.getElementById('overlay').classList.add('open');
  document.getElementById('productFormModal').classList.add('open');
};

window.onSelectPresetImage = function(val) {
  uploadedProductImageBase64 = val;
};

window.handleProductImageUpload = function(e) {
  const file = e.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      const maxDim = 520;
      let w = img.width;
      let h = img.height;
      if (w > maxDim || h > maxDim) {
        if (w > h) {
          h = Math.round((h * maxDim) / w);
          w = maxDim;
        } else {
          w = Math.round((w * maxDim) / h);
          h = maxDim;
        }
      }
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, w, h);
      uploadedProductImageBase64 = canvas.toDataURL('image/jpeg', 0.78);
    };
    img.onerror = () => {
      uploadedProductImageBase64 = reader.result;
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
};

window.submitProductForm = async function(e) {
  e.preventDefault();
  const id = document.getElementById('prodFormId').value.trim();
  const category = document.getElementById('prodCategory').value;
  const payload = {
    name: document.getElementById('prodName').value.trim(),
    category,
    categoryLabel: CATEGORY_MAP[category] || '✨ Edición Especial',
    price: Number(document.getElementById('prodPrice').value),
    cost: Number(document.getElementById('prodCost').value),
    stock: parseInt(document.getElementById('prodStock').value, 10),
    minStock: parseInt(document.getElementById('prodMinStock').value, 10) || 5,
    scent: document.getElementById('prodScent').value.trim(),
    badge: document.getElementById('prodBadge').value.trim(),
    image: uploadedProductImageBase64 || document.getElementById('prodImageSelect').value,
    specs: document.getElementById('prodSpecs').value.split(',').map(s => s.trim()).filter(Boolean),
    description: document.getElementById('prodDesc').value.trim()
  };

  try {
    if (id) {
      await apiFetch(`/api/products/${encodeURIComponent(id)}`, {
        method: 'PUT',
        body: JSON.stringify(payload)
      });
      showToast('✅ Producto actualizado correctamente');
    } else {
      await apiFetch('/api/products', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
      showToast('✅ Nuevo producto agregado al catálogo e inventario');
    }
    closeAllModals();
    await loadAdminData();
  } catch (err) {
    showToast(`❌ ${err.message}`);
  }
};

window.deleteProduct = async function(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;
  if (!confirm(`¿Seguro que deseas eliminar "${prod.name}" del catálogo e inventario?`)) return;

  try {
    await apiFetch(`/api/products/${encodeURIComponent(productId)}`, { method: 'DELETE' });
    showToast(`🗑️ "${prod.name}" eliminado`);
    await loadAdminData();
  } catch (err) {
    showToast(`❌ ${err.message}`);
  }
};

// Modal Stock (Agregar / Ajustar Stock)
window.openStockModal = function(preselectedId = null) {
  const select = document.getElementById('stockProductId');
  select.innerHTML = PRODUCTS.map(p =>
    `<option value="${p.id}" ${p.id === preselectedId ? 'selected' : ''}>${p.name} (Actual: ${p.stock} unid.)</option>`
  ).join('');
  document.getElementById('stockMoveType').value = 'entrada';
  document.getElementById('stockQty').value = 10;
  document.getElementById('stockNote').value = '';

  document.getElementById('overlay').classList.add('open');
  document.getElementById('stockModal').classList.add('open');
};

window.submitStockForm = async function(e) {
  e.preventDefault();
  const productId = document.getElementById('stockProductId').value;
  const type = document.getElementById('stockMoveType').value;
  const quantity = parseInt(document.getElementById('stockQty').value, 10);
  const note = document.getElementById('stockNote').value.trim();

  try {
    await apiFetch('/api/inventory/adjust', {
      method: 'POST',
      body: JSON.stringify({ productId, type, quantity, note })
    });
    closeAllModals();
    await loadAdminData();
    showToast('📦 Stock actualizado y registrado en Kardex');
  } catch (err) {
    showToast(`❌ ${err.message}`);
  }
};

// =========================================================
// 2, 3 y 4. INFORMES DE VENTAS POR DÍA, POR MES Y POR AÑO
// =========================================================
function initDateFiltersAndRenderSales() {
  const today = getTodayStr();
  const dayInput = document.getElementById('filterDayInput');
  const monthInput = document.getElementById('filterMonthInput');
  const yearSelect = document.getElementById('filterYearSelect');

  if (dayInput && !dayInput.value) {
    dayInput.value = SALES.length > 0 ? SALES[0].saleDay : today;
  }
  if (monthInput && !monthInput.value) {
    monthInput.value = SALES.length > 0 ? SALES[0].saleMonth : today.slice(0, 7);
  }
  if (yearSelect) {
    const yearsSet = new Set([today.slice(0, 4), '2026', '2025']);
    SALES.forEach(s => { if (s.saleYear) yearsSet.add(s.saleYear); });
    const currentVal = yearSelect.value || today.slice(0, 4);
    yearSelect.innerHTML = Array.from(yearsSet).sort().reverse().map(y =>
      `<option value="${y}" ${y === currentVal ? 'selected' : ''}>Año ${y}</option>`
    ).join('');
  }

  renderSalesDayView();
  renderSalesMonthView();
  renderSalesYearView();
}

window.setTodayDayFilter = function() {
  const dayInput = document.getElementById('filterDayInput');
  if (dayInput) {
    dayInput.value = getTodayStr();
    renderSalesDayView();
  }
};

window.selectSpecificDay = function(dayStr) {
  const dayInput = document.getElementById('filterDayInput');
  if (dayInput) {
    dayInput.value = dayStr;
    renderSalesDayView();
  }
};

window.selectSpecificMonth = function(monthStr) {
  const monthInput = document.getElementById('filterMonthInput');
  if (monthInput) {
    monthInput.value = monthStr;
    renderSalesMonthView();
  }
};

// --- VISTA 2: VENTAS POR DÍA ---
window.renderSalesDayView = function() {
  const selectedDay = document.getElementById('filterDayInput')?.value || getTodayStr();
  document.getElementById('selectedDayLabel').textContent = selectedDay;

  const daySales = SALES.filter(s => s.saleDay === selectedDay);
  const count = daySales.length;
  const units = daySales.reduce((acc, s) => acc + s.totalUnits, 0);
  const revenue = daySales.reduce((acc, s) => acc + s.total, 0);
  const cost = daySales.reduce((acc, s) => acc + s.totalCost, 0);
  const profit = daySales.reduce((acc, s) => acc + s.profit, 0);

  document.getElementById('dayKpis').innerHTML = `
    <div class="kpi-card">
      <div class="kpi-label">Fecha Consultada</div>
      <div class="kpi-value">${selectedDay}</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Pedidos del Día</div>
      <div class="kpi-value">${count}</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Velas Vendidas</div>
      <div class="kpi-value">${units} Unid.</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Ingresos del Día</div>
      <div class="kpi-value">${formatCOP(revenue)}</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Costo de Producción</div>
      <div class="kpi-value">${formatCOP(cost)}</div>
    </div>
    <div class="kpi-card highlight">
      <div class="kpi-label">Ganancia Neta del Día</div>
      <div class="kpi-value">${formatCOP(profit)}</div>
    </div>
  `;

  const dayBody = document.getElementById('daySalesTableBody');
  if (daySales.length === 0) {
    dayBody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:20px;">No hay ventas registradas en la fecha ${selectedDay}. Puedes registrar una en la pestaña "🧾 Registrar Venta".</td></tr>`;
  } else {
    dayBody.innerHTML = daySales.map(s => {
      const itemsSummary = s.items.map(i => `${i.qty}x ${i.productName}`).join(', ');
      const timePart = (s.saleDate || '').slice(11, 16) || '12:00';
      return `
        <tr>
          <td><strong>${s.invoiceNumber}</strong></td>
          <td>${timePart}</td>
          <td>
            <strong>${s.customerName}</strong>
            <div style="font-size:0.76rem; color:var(--text-muted);">${s.paymentMethod}</div>
          </td>
          <td>${itemsSummary}</td>
          <td>${s.totalUnits}</td>
          <td><strong>${formatCOP(s.total)}</strong></td>
          <td>${formatCOP(s.totalCost)}</td>
          <td style="color:#137333; font-weight:700;">+${formatCOP(s.profit)}</td>
          <td>
            <button class="btn-sm danger" onclick="deleteSale(${s.id})" title="Anular venta y devolver stock">🗑️ Anular</button>
          </td>
        </tr>
      `;
    }).join('');
  }

  // Agrupar todos los días históricos
  const byDayMap = {};
  for (const s of SALES) {
    if (!byDayMap[s.saleDay]) {
      byDayMap[s.saleDay] = { day: s.saleDay, count: 0, units: 0, revenue: 0, cost: 0, profit: 0 };
    }
    byDayMap[s.saleDay].count += 1;
    byDayMap[s.saleDay].units += s.totalUnits;
    byDayMap[s.saleDay].revenue += s.total;
    byDayMap[s.saleDay].cost += s.totalCost;
    byDayMap[s.saleDay].profit += s.profit;
  }
  const allDays = Object.values(byDayMap).sort((a, b) => b.day.localeCompare(a.day));
  const allDaysBody = document.getElementById('allDaysSummaryTableBody');
  if (allDays.length === 0) {
    allDaysBody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:18px;">Sin días registrados aún.</td></tr>`;
  } else {
    allDaysBody.innerHTML = allDays.map(d => `
      <tr>
        <td><strong>${d.day}</strong></td>
        <td>${d.count}</td>
        <td>${d.units} unid.</td>
        <td><strong>${formatCOP(d.revenue)}</strong></td>
        <td>${formatCOP(d.cost)}</td>
        <td style="color:#137333; font-weight:700;">+${formatCOP(d.profit)}</td>
        <td>
          <button class="btn-sm" onclick="selectSpecificDay('${d.day}')">🔍 Ver Día</button>
        </td>
      </tr>
    `).join('');
  }
};

// --- VISTA 3: VENTAS POR MES ---
window.renderSalesMonthView = function() {
  const selectedMonth = document.getElementById('filterMonthInput')?.value || getTodayStr().slice(0, 7);
  document.getElementById('selectedMonthLabel').textContent = formatMonthName(selectedMonth);

  const monthSales = SALES.filter(s => s.saleMonth === selectedMonth);
  const count = monthSales.length;
  const units = monthSales.reduce((acc, s) => acc + s.totalUnits, 0);
  const revenue = monthSales.reduce((acc, s) => acc + s.total, 0);
  const cost = monthSales.reduce((acc, s) => acc + s.totalCost, 0);
  const profit = monthSales.reduce((acc, s) => acc + s.profit, 0);

  document.getElementById('monthKpis').innerHTML = `
    <div class="kpi-card">
      <div class="kpi-label">Mes Consultado</div>
      <div class="kpi-value">${formatMonthName(selectedMonth)}</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Pedidos en el Mes</div>
      <div class="kpi-value">${count}</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Unidades Vendidas</div>
      <div class="kpi-value">${units} Unid.</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Ingresos del Mes</div>
      <div class="kpi-value">${formatCOP(revenue)}</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Costos del Mes</div>
      <div class="kpi-value">${formatCOP(cost)}</div>
    </div>
    <div class="kpi-card highlight">
      <div class="kpi-label">Utilidad Neta Mensual</div>
      <div class="kpi-value">${formatCOP(profit)}</div>
    </div>
  `;

  // Desglose diario dentro del mes
  const daysInMonth = {};
  const productsInMonth = {};
  for (const s of monthSales) {
    if (!daysInMonth[s.saleDay]) {
      daysInMonth[s.saleDay] = { day: s.saleDay, count: 0, units: 0, revenue: 0, cost: 0, profit: 0 };
    }
    daysInMonth[s.saleDay].count += 1;
    daysInMonth[s.saleDay].units += s.totalUnits;
    daysInMonth[s.saleDay].revenue += s.total;
    daysInMonth[s.saleDay].cost += s.totalCost;
    daysInMonth[s.saleDay].profit += s.profit;

    for (const item of s.items) {
      if (!productsInMonth[item.productName]) {
        productsInMonth[item.productName] = {
          name: item.productName,
          category: item.categoryLabel,
          units: 0,
          revenue: 0,
          cost: 0,
          profit: 0
        };
      }
      productsInMonth[item.productName].units += item.qty;
      productsInMonth[item.productName].revenue += item.subtotal;
      productsInMonth[item.productName].cost += item.unitCost * item.qty;
      productsInMonth[item.productName].profit += item.subtotal - (item.unitCost * item.qty);
    }
  }

  const dailyRows = Object.values(daysInMonth).sort((a, b) => a.day.localeCompare(b.day));
  const dailyBody = document.getElementById('monthDailyBreakdownBody');
  dailyBody.innerHTML = dailyRows.length === 0
    ? `<tr><td colspan="6" style="text-align:center; padding:18px;">Sin ventas registradas en ${formatMonthName(selectedMonth)}.</td></tr>`
    : dailyRows.map(d => `
        <tr>
          <td><strong>${d.day}</strong></td>
          <td>${d.count}</td>
          <td>${d.units} unid.</td>
          <td><strong>${formatCOP(d.revenue)}</strong></td>
          <td>${formatCOP(d.cost)}</td>
          <td style="color:#137333; font-weight:700;">+${formatCOP(d.profit)}</td>
        </tr>
      `).join('');

  const prodRows = Object.values(productsInMonth).sort((a, b) => b.units - a.units);
  const prodBody = document.getElementById('monthProductsBreakdownBody');
  prodBody.innerHTML = prodRows.length === 0
    ? `<tr><td colspan="6" style="text-align:center; padding:18px;">Sin productos vendidos en este mes.</td></tr>`
    : prodRows.map(p => `
        <tr>
          <td><strong>${p.name}</strong></td>
          <td>${p.category}</td>
          <td><strong>${p.units} unid.</strong></td>
          <td>${formatCOP(p.revenue)}</td>
          <td>${formatCOP(p.cost)}</td>
          <td style="color:#137333; font-weight:700;">+${formatCOP(p.profit)}</td>
        </tr>
      `).join('');

  // Todos los meses históricos
  const allMonthsMap = {};
  for (const s of SALES) {
    if (!allMonthsMap[s.saleMonth]) {
      allMonthsMap[s.saleMonth] = { month: s.saleMonth, count: 0, units: 0, revenue: 0, cost: 0, profit: 0 };
    }
    allMonthsMap[s.saleMonth].count += 1;
    allMonthsMap[s.saleMonth].units += s.totalUnits;
    allMonthsMap[s.saleMonth].revenue += s.total;
    allMonthsMap[s.saleMonth].cost += s.totalCost;
    allMonthsMap[s.saleMonth].profit += s.profit;
  }
  const allMonths = Object.values(allMonthsMap).sort((a, b) => b.month.localeCompare(a.month));
  const allMonthsBody = document.getElementById('allMonthsSummaryTableBody');
  allMonthsBody.innerHTML = allMonths.length === 0
    ? `<tr><td colspan="7" style="text-align:center; padding:18px;">Sin meses con ventas aún.</td></tr>`
    : allMonths.map(m => `
        <tr>
          <td><strong>${formatMonthName(m.month)}</strong> (${m.month})</td>
          <td>${m.count}</td>
          <td>${m.units} unid.</td>
          <td><strong>${formatCOP(m.revenue)}</strong></td>
          <td>${formatCOP(m.cost)}</td>
          <td style="color:#137333; font-weight:700;">+${formatCOP(m.profit)}</td>
          <td><button class="btn-sm" onclick="selectSpecificMonth('${m.month}')">🔍 Ver Mes</button></td>
        </tr>
      `).join('');
};

// --- VISTA 4: VENTAS POR AÑO ---
window.renderSalesYearView = function() {
  const selectedYear = document.getElementById('filterYearSelect')?.value || getTodayStr().slice(0, 4);
  document.getElementById('selectedYearLabel').textContent = selectedYear;
  document.getElementById('selectedYearLabel2').textContent = selectedYear;

  const yearSales = SALES.filter(s => s.saleYear === selectedYear);
  const count = yearSales.length;
  const units = yearSales.reduce((acc, s) => acc + s.totalUnits, 0);
  const revenue = yearSales.reduce((acc, s) => acc + s.total, 0);
  const cost = yearSales.reduce((acc, s) => acc + s.totalCost, 0);
  const profit = yearSales.reduce((acc, s) => acc + s.profit, 0);

  document.getElementById('yearKpis').innerHTML = `
    <div class="kpi-card">
      <div class="kpi-label">Año Fiscal</div>
      <div class="kpi-value">${selectedYear}</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Pedidos Anuales</div>
      <div class="kpi-value">${count}</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Unidades Vendidas</div>
      <div class="kpi-value">${units} Unid.</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Ingresos Brutos Anuales</div>
      <div class="kpi-value">${formatCOP(revenue)}</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Costo Total Anual</div>
      <div class="kpi-value">${formatCOP(cost)}</div>
    </div>
    <div class="kpi-card highlight">
      <div class="kpi-label">Utilidad Neta Anual</div>
      <div class="kpi-value">${formatCOP(profit)}</div>
    </div>
  `;

  // Los 12 meses del año (Enero a Diciembre)
  const monthlyStats = Array.from({ length: 12 }, (_, idx) => {
    const mm = String(idx + 1).padStart(2, '0');
    return {
      monthKey: `${selectedYear}-${mm}`,
      monthName: MONTH_NAMES[idx],
      count: 0,
      units: 0,
      revenue: 0,
      cost: 0,
      profit: 0
    };
  });

  const productsInYear = {};
  for (const s of yearSales) {
    const mIdx = parseInt((s.saleMonth || '').split('-')[1], 10) - 1;
    if (mIdx >= 0 && mIdx < 12) {
      monthlyStats[mIdx].count += 1;
      monthlyStats[mIdx].units += s.totalUnits;
      monthlyStats[mIdx].revenue += s.total;
      monthlyStats[mIdx].cost += s.totalCost;
      monthlyStats[mIdx].profit += s.profit;
    }

    for (const item of s.items) {
      if (!productsInYear[item.productName]) {
        productsInYear[item.productName] = {
          name: item.productName,
          category: item.categoryLabel,
          units: 0,
          revenue: 0,
          cost: 0,
          profit: 0
        };
      }
      productsInYear[item.productName].units += item.qty;
      productsInYear[item.productName].revenue += item.subtotal;
      productsInYear[item.productName].cost += item.unitCost * item.qty;
      productsInYear[item.productName].profit += item.subtotal - (item.unitCost * item.qty);
    }
  }

  document.getElementById('yearMonthlyBreakdownBody').innerHTML = monthlyStats.map(m => {
    const margin = m.revenue > 0 ? Math.round((m.profit / m.revenue) * 100) : 0;
    return `
      <tr style="${m.count > 0 ? 'background:#FFFDF7;' : ''}">
        <td><strong>${m.monthName} ${selectedYear}</strong></td>
        <td>${m.count}</td>
        <td>${m.units} unid.</td>
        <td><strong>${formatCOP(m.revenue)}</strong></td>
        <td>${formatCOP(m.cost)}</td>
        <td style="color:${m.profit > 0 ? '#137333' : 'inherit'}; font-weight:700;">${formatCOP(m.profit)}</td>
        <td>${margin}%</td>
      </tr>
    `;
  }).join('');

  const yearProdRows = Object.values(productsInYear).sort((a, b) => b.units - a.units);
  document.getElementById('yearProductsBreakdownBody').innerHTML = yearProdRows.length === 0
    ? `<tr><td colspan="6" style="text-align:center; padding:18px;">Sin productos vendidos en el año ${selectedYear}.</td></tr>`
    : yearProdRows.map(p => `
        <tr>
          <td><strong>${p.name}</strong></td>
          <td>${p.category}</td>
          <td><strong>${p.units} unid.</strong></td>
          <td>${formatCOP(p.revenue)}</td>
          <td>${formatCOP(p.cost)}</td>
          <td style="color:#137333; font-weight:700;">+${formatCOP(p.profit)}</td>
        </tr>
      `).join('');
};

window.deleteSale = async function(saleId) {
  if (!confirm('¿Deseas anular esta venta? El stock de las velas se devolverá automáticamente al inventario.')) return;
  try {
    await apiFetch(`/api/sales/${saleId}`, { method: 'DELETE' });
    showToast('🗑️ Venta anulada y stock restaurado');
    await loadAdminData();
  } catch (err) {
    showToast(`❌ ${err.message}`);
  }
};

// =========================================================
// 5. PUNTO DE VENTA (POS) PARA REGISTRAR VENTAS
// =========================================================
function initPosBuilder() {
  const dateInput = document.getElementById('posSaleDate');
  if (dateInput && !dateInput.value) {
    dateInput.value = getTodayStr();
  }
  const container = document.getElementById('posItemsContainer');
  if (container && container.children.length === 0) {
    addPosItemRow();
  } else {
    updatePosTotalPreview();
  }
}

window.addPosItemRow = function() {
  const container = document.getElementById('posItemsContainer');
  if (!container) return;
  const row = document.createElement('div');
  row.className = 'pos-row';
  row.innerHTML = `
    <select class="form-control pos-prod-select" onchange="onPosProdChange(this)">
      ${PRODUCTS.map(p => `<option value="${p.id}" data-price="${p.price}">${p.name} — $${p.price.toLocaleString('es-CO')} (Stock: ${p.stock})</option>`).join('')}
    </select>
    <input type="number" class="form-control pos-qty-input" value="1" min="1" oninput="updatePosTotalPreview()" placeholder="Cant." />
    <input type="number" class="form-control pos-price-input" value="${PRODUCTS[0]?.price || 2500}" min="0" step="100" oninput="updatePosTotalPreview()" placeholder="Precio Unit." />
    <button type="button" class="btn-sm danger" onclick="this.parentElement.remove(); updatePosTotalPreview();">✕</button>
  `;
  container.appendChild(row);
  updatePosTotalPreview();
};

window.onPosProdChange = function(selectEl) {
  const row = selectEl.closest('.pos-row');
  const prod = PRODUCTS.find(p => p.id === selectEl.value);
  if (prod && row) {
    row.querySelector('.pos-price-input').value = prod.price;
    updatePosTotalPreview();
  }
};

window.updatePosTotalPreview = function() {
  const rows = document.querySelectorAll('#posItemsContainer .pos-row');
  let subtotal = 0;
  rows.forEach(r => {
    const q = parseInt(r.querySelector('.pos-qty-input')?.value, 10) || 0;
    const p = Number(r.querySelector('.pos-price-input')?.value) || 0;
    subtotal += q * p;
  });
  const discount = Number(document.getElementById('posDiscount')?.value) || 0;
  const total = Math.max(0, subtotal - discount);
  const el = document.getElementById('posTotalPreview');
  if (el) el.textContent = formatCOP(total);
};

window.submitPosSale = async function(e) {
  e.preventDefault();
  const rows = document.querySelectorAll('#posItemsContainer .pos-row');
  const items = [];
  rows.forEach(r => {
    const id = r.querySelector('.pos-prod-select')?.value;
    const qty = parseInt(r.querySelector('.pos-qty-input')?.value, 10) || 1;
    const price = Number(r.querySelector('.pos-price-input')?.value) || 0;
    if (id && qty > 0) items.push({ id, qty, price });
  });

  if (items.length === 0) {
    showToast('Agrega al menos un producto a la venta');
    return;
  }

  const payload = {
    customerName: document.getElementById('posCustomerName').value.trim(),
    customerPhone: document.getElementById('posCustomerPhone').value.trim(),
    paymentMethod: document.getElementById('posPaymentMethod').value,
    saleDate: document.getElementById('posSaleDate').value,
    discount: Number(document.getElementById('posDiscount').value) || 0,
    notes: document.getElementById('posNotes').value.trim(),
    items
  };

  try {
    const res = await apiFetch('/api/sales', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    showToast(`✅ Venta ${res.sale.invoiceNumber} registrada y stock descontado`);
    document.getElementById('posItemsContainer').innerHTML = '';
    addPosItemRow();
    document.getElementById('posNotes').value = '';
    document.getElementById('posDiscount').value = '0';
    await loadAdminData();
  } catch (err) {
    showToast(`❌ ${err.message}`);
  }
};

// =========================================================
// GENERACIÓN DE INFORMES CONTABLES EN PDF (PARA CADA SECCIÓN)
// Compatible con Web y Aplicación Móvil Android (Capacitor WebView)
// =========================================================
function savePDFDocument(doc, fileName) {
  try {
    if (typeof window !== 'undefined' && window.AndroidDownloader && typeof window.AndroidDownloader.saveBase64File === 'function') {
      const dataUri = doc.output('datauristring');
      const base64Data = dataUri.includes(',') ? dataUri.split(',')[1] : dataUri;
      window.AndroidDownloader.saveBase64File(base64Data, fileName, 'application/pdf');
      return;
    }
  } catch (err) {
    console.warn('Error en puente nativo Android PDF, usando descarga estándar:', err);
  }
  doc.save(fileName);
}

function createBrandedPDF(title, subtitle) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

  // Encabezado Corporativo DANNY SCENTS
  doc.setFillColor(20, 27, 22);
  doc.rect(0, 0, 210, 34, 'F');

  doc.setTextColor(218, 165, 32);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text('DANNY SCENTS — CONTABILIDAD & INVENTARIO', 14, 14);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  doc.text(title, 14, 22);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(210, 210, 210);
  doc.text(`${subtitle} | Generado: ${new Date().toLocaleString('es-CO')}`, 14, 29);

  doc.setTextColor(30, 30, 30);
  return doc;
}

// 1. PDF DE INVENTARIO Y VALORACIÓN CONTABLE
window.exportInventoryPDF = function() {
  const doc = createBrandedPDF(
    'INFORME CONTABLE DE INVENTARIO Y VALORACION DE STOCK',
    'Estado actual de productos, costos unitarios, precios de venta y utilidad proyectada'
  );

  const totalUnits = PRODUCTS.reduce((acc, p) => acc + Number(p.stock || 0), 0);
  const totalCost = PRODUCTS.reduce((acc, p) => acc + Number(p.stock || 0) * Number(p.cost || 0), 0);
  const totalSale = PRODUCTS.reduce((acc, p) => acc + Number(p.stock || 0) * Number(p.price || 0), 0);
  const totalProfit = totalSale - totalCost;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text(
    `Resumen Contable: ${PRODUCTS.length} Referencias | ${totalUnits} Unidades | Costo Total: ${formatCOP(totalCost)} | Venta Total: ${formatCOP(totalSale)} | Utilidad Potencial: ${formatCOP(totalProfit)}`,
    14,
    42
  );

  doc.autoTable({
    startY: 47,
    head: [['Producto', 'Categoria', 'Stock', 'Costo Unit.', 'Precio Venta', 'Costo Total', 'Valor Venta', 'Utilidad Stock']],
    body: PRODUCTS.map(p => {
      const s = Number(p.stock || 0);
      const c = Number(p.cost || 0);
      const pr = Number(p.price || 0);
      return [
        p.name,
        p.categoryLabel.replace(/[^\w\sáéíóúÁÉÍÓÚñÑ&]/g, '').trim(),
        `${s} unid.`,
        formatCOP(c),
        formatCOP(pr),
        formatCOP(s * c),
        formatCOP(s * pr),
        formatCOP(s * (pr - c))
      ];
    }),
    foot: [[
      'TOTALES', '', `${totalUnits} unid.`, '', '',
      formatCOP(totalCost), formatCOP(totalSale), formatCOP(totalProfit)
    ]],
    theme: 'grid',
    headStyles: { fillColor: [46, 74, 54], textColor: 255, fontSize: 8.5 },
    footStyles: { fillColor: [240, 234, 214], textColor: [20, 27, 22], fontStyle: 'bold', fontSize: 8.5 },
    styles: { fontSize: 8 }
  });

  savePDFDocument(doc, `Informe_Inventario_DannyScents_${getTodayStr()}.pdf`);
  showToast('📄 PDF de Inventario descargado');
};

// 2. PDF DE KARDEX / MOVIMIENTOS DE STOCK
window.exportMovementsPDF = function() {
  const doc = createBrandedPDF(
    'INFORME KARDEX — HISTORIAL DE MOVIMIENTOS DE INVENTARIO',
    'Entradas de stock, ajustes de inventario y salidas por ventas'
  );

  doc.autoTable({
    startY: 42,
    head: [['Fecha / Hora', 'Producto', 'Tipo Mov.', 'Cantidad', 'Stock Ant.', 'Stock Nuevo', 'Nota / Observacion', 'Usuario']],
    body: MOVEMENTS.map(m => [
      m.created_at,
      m.product_name,
      m.type.toUpperCase(),
      `${m.quantity} unid.`,
      String(m.prev_stock),
      String(m.new_stock),
      m.note || '-',
      m.user_name || 'Admin'
    ]),
    theme: 'striped',
    headStyles: { fillColor: [46, 74, 54], textColor: 255, fontSize: 8 },
    styles: { fontSize: 7.5 }
  });

  savePDFDocument(doc, `Informe_Movimientos_Stock_${getTodayStr()}.pdf`);
  showToast('📄 PDF de Movimientos de Stock descargado');
};

// 3. PDF DE VENTAS POR DÍA (FECHA SELECCIONADA)
window.exportSalesDayPDF = function() {
  const selectedDay = document.getElementById('filterDayInput')?.value || getTodayStr();
  const daySales = SALES.filter(s => s.saleDay === selectedDay);

  const doc = createBrandedPDF(
    `INFORME CONTABLE DE VENTAS POR DIA (${selectedDay})`,
    `Detalle de facturas, productos vendidos, costos y ganancia neta del dia ${selectedDay}`
  );

  const units = daySales.reduce((acc, s) => acc + s.totalUnits, 0);
  const revenue = daySales.reduce((acc, s) => acc + s.total, 0);
  const cost = daySales.reduce((acc, s) => acc + s.totalCost, 0);
  const profit = daySales.reduce((acc, s) => acc + s.profit, 0);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text(
    `Balance del Dia ${selectedDay}: ${daySales.length} Pedidos | ${units} Unidades | Ingresos: ${formatCOP(revenue)} | Costos: ${formatCOP(cost)} | Ganancia Neta: ${formatCOP(profit)}`,
    14,
    42
  );

  doc.autoTable({
    startY: 47,
    head: [['Factura', 'Hora', 'Cliente', 'Pago', 'Productos', 'Unid.', 'Total Venta', 'Costo', 'Ganancia Neta']],
    body: daySales.map(s => [
      s.invoiceNumber,
      (s.saleDate || '').slice(11, 16) || '12:00',
      s.customerName,
      s.paymentMethod,
      s.items.map(i => `${i.qty}x ${i.productName}`).join(', '),
      String(s.totalUnits),
      formatCOP(s.total),
      formatCOP(s.totalCost),
      formatCOP(s.profit)
    ]),
    foot: [[
      'TOTAL DIA', '', '', '', '', String(units),
      formatCOP(revenue), formatCOP(cost), formatCOP(profit)
    ]],
    theme: 'grid',
    headStyles: { fillColor: [46, 74, 54], textColor: 255, fontSize: 8 },
    footStyles: { fillColor: [240, 234, 214], textColor: [20, 27, 22], fontStyle: 'bold', fontSize: 8 },
    styles: { fontSize: 7.5 }
  });

  savePDFDocument(doc, `Informe_Ventas_Dia_${selectedDay}_DannyScents.pdf`);
  showToast(`📄 PDF de Ventas del Día (${selectedDay}) descargado`);
};

// 3B. PDF CONSOLIDADO DE TODOS LOS DÍAS
window.exportAllDaysConsolidatedPDF = function() {
  const doc = createBrandedPDF(
    'INFORME CONTABLE CONSOLIDADO DIA POR DIA',
    'Resumen historico de ventas, costos y ganancias agrupado por cada dia'
  );

  const byDayMap = {};
  for (const s of SALES) {
    if (!byDayMap[s.saleDay]) {
      byDayMap[s.saleDay] = { day: s.saleDay, count: 0, units: 0, revenue: 0, cost: 0, profit: 0 };
    }
    byDayMap[s.saleDay].count += 1;
    byDayMap[s.saleDay].units += s.totalUnits;
    byDayMap[s.saleDay].revenue += s.total;
    byDayMap[s.saleDay].cost += s.totalCost;
    byDayMap[s.saleDay].profit += s.profit;
  }
  const rows = Object.values(byDayMap).sort((a, b) => b.day.localeCompare(a.day));
  const totUnits = rows.reduce((a, r) => a + r.units, 0);
  const totRev = rows.reduce((a, r) => a + r.revenue, 0);
  const totCost = rows.reduce((a, r) => a + r.cost, 0);
  const totProf = rows.reduce((a, r) => a + r.profit, 0);

  doc.autoTable({
    startY: 42,
    head: [['Fecha (Dia)', 'N° Pedidos', 'Unidades Vendidas', 'Ingresos Brutos', 'Costo Produccion', 'Ganancia Neta']],
    body: rows.map(r => [
      r.day, String(r.count), `${r.units} unid.`, formatCOP(r.revenue), formatCOP(r.cost), formatCOP(r.profit)
    ]),
    foot: [['TOTAL GENERAL', String(SALES.length), `${totUnits} unid.`, formatCOP(totRev), formatCOP(totCost), formatCOP(totProf)]],
    theme: 'grid',
    headStyles: { fillColor: [46, 74, 54], textColor: 255, fontSize: 8.5 },
    footStyles: { fillColor: [240, 234, 214], textColor: [20, 27, 22], fontStyle: 'bold', fontSize: 8.5 },
    styles: { fontSize: 8 }
  });

  savePDFDocument(doc, `Informe_Consolidado_Por_Dias_DannyScents.pdf`);
  showToast('📄 PDF Consolidado por Días descargado');
};

// 4. PDF DE VENTAS POR MES
window.exportSalesMonthPDF = function() {
  const selectedMonth = document.getElementById('filterMonthInput')?.value || getTodayStr().slice(0, 7);
  const monthSales = SALES.filter(s => s.saleMonth === selectedMonth);

  const doc = createBrandedPDF(
    `INFORME CONTABLE MENSUAL — ${formatMonthName(selectedMonth).toUpperCase()}`,
    `Balance contable mensual, desglose diario y ventas por producto (${selectedMonth})`
  );

  const units = monthSales.reduce((acc, s) => acc + s.totalUnits, 0);
  const revenue = monthSales.reduce((acc, s) => acc + s.total, 0);
  const cost = monthSales.reduce((acc, s) => acc + s.totalCost, 0);
  const profit = monthSales.reduce((acc, s) => acc + s.profit, 0);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text(
    `Resumen ${formatMonthName(selectedMonth)}: ${monthSales.length} Pedidos | ${units} Unidades | Ingresos: ${formatCOP(revenue)} | Costos: ${formatCOP(cost)} | Utilidad: ${formatCOP(profit)}`,
    14,
    42
  );

  const daysInMonth = {};
  const productsInMonth = {};
  for (const s of monthSales) {
    if (!daysInMonth[s.saleDay]) {
      daysInMonth[s.saleDay] = { day: s.saleDay, count: 0, units: 0, revenue: 0, cost: 0, profit: 0 };
    }
    daysInMonth[s.saleDay].count += 1;
    daysInMonth[s.saleDay].units += s.totalUnits;
    daysInMonth[s.saleDay].revenue += s.total;
    daysInMonth[s.saleDay].cost += s.totalCost;
    daysInMonth[s.saleDay].profit += s.profit;

    for (const item of s.items) {
      if (!productsInMonth[item.productName]) {
        productsInMonth[item.productName] = { name: item.productName, units: 0, revenue: 0, cost: 0, profit: 0 };
      }
      productsInMonth[item.productName].units += item.qty;
      productsInMonth[item.productName].revenue += item.subtotal;
      productsInMonth[item.productName].cost += item.unitCost * item.qty;
      productsInMonth[item.productName].profit += item.subtotal - (item.unitCost * item.qty);
    }
  }

  doc.autoTable({
    startY: 47,
    head: [['Fecha del Mes', 'Pedidos', 'Unidades Vendidas', 'Ingresos del Dia', 'Costo del Dia', 'Utilidad Neta']],
    body: Object.values(daysInMonth).sort((a, b) => a.day.localeCompare(b.day)).map(d => [
      d.day, String(d.count), `${d.units} unid.`, formatCOP(d.revenue), formatCOP(d.cost), formatCOP(d.profit)
    ]),
    foot: [['TOTAL MES', String(monthSales.length), `${units} unid.`, formatCOP(revenue), formatCOP(cost), formatCOP(profit)]],
    theme: 'grid',
    headStyles: { fillColor: [46, 74, 54], textColor: 255, fontSize: 8.5 },
    footStyles: { fillColor: [240, 234, 214], textColor: [20, 27, 22], fontStyle: 'bold', fontSize: 8.5 },
    styles: { fontSize: 8 }
  });

  const nextY = (doc.lastAutoTable?.finalY || 90) + 10;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('Desglose por Producto Vendido en el Mes:', 14, nextY);

  doc.autoTable({
    startY: nextY + 4,
    head: [['Producto', 'Unidades Vendidas', 'Ingresos Generados', 'Costo Total', 'Utilidad Neta']],
    body: Object.values(productsInMonth).sort((a, b) => b.units - a.units).map(p => [
      p.name, `${p.units} unid.`, formatCOP(p.revenue), formatCOP(p.cost), formatCOP(p.profit)
    ]),
    theme: 'striped',
    headStyles: { fillColor: [20, 27, 22], textColor: 255, fontSize: 8.5 },
    styles: { fontSize: 8 }
  });

  savePDFDocument(doc, `Informe_Ventas_Mes_${selectedMonth}_DannyScents.pdf`);
  showToast(`📄 PDF Mensual (${selectedMonth}) descargado`);
};

// 5. PDF DE VENTAS POR AÑO
window.exportSalesYearPDF = function() {
  const selectedYear = document.getElementById('filterYearSelect')?.value || getTodayStr().slice(0, 4);
  const yearSales = SALES.filter(s => s.saleYear === selectedYear);

  const doc = createBrandedPDF(
    `INFORME CONTABLE ANUAL — AÑO ${selectedYear}`,
    `Balance general de los 12 meses del año ${selectedYear} (Enero a Diciembre)`
  );

  const units = yearSales.reduce((acc, s) => acc + s.totalUnits, 0);
  const revenue = yearSales.reduce((acc, s) => acc + s.total, 0);
  const cost = yearSales.reduce((acc, s) => acc + s.totalCost, 0);
  const profit = yearSales.reduce((acc, s) => acc + s.profit, 0);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text(
    `Balance Anual ${selectedYear}: ${yearSales.length} Pedidos | ${units} Unidades | Ingresos: ${formatCOP(revenue)} | Costos: ${formatCOP(cost)} | Utilidad Anual: ${formatCOP(profit)}`,
    14,
    42
  );

  const monthlyStats = Array.from({ length: 12 }, (_, idx) => ({
    monthName: `${MONTH_NAMES[idx]} ${selectedYear}`,
    count: 0,
    units: 0,
    revenue: 0,
    cost: 0,
    profit: 0
  }));

  for (const s of yearSales) {
    const mIdx = parseInt((s.saleMonth || '').split('-')[1], 10) - 1;
    if (mIdx >= 0 && mIdx < 12) {
      monthlyStats[mIdx].count += 1;
      monthlyStats[mIdx].units += s.totalUnits;
      monthlyStats[mIdx].revenue += s.total;
      monthlyStats[mIdx].cost += s.totalCost;
      monthlyStats[mIdx].profit += s.profit;
    }
  }

  doc.autoTable({
    startY: 47,
    head: [['Mes del Año', 'N° Pedidos', 'Unidades Vendidas', 'Ingresos Brutos', 'Costo Produccion', 'Utilidad Neta', 'Margen %']],
    body: monthlyStats.map(m => {
      const margin = m.revenue > 0 ? Math.round((m.profit / m.revenue) * 100) : 0;
      return [
        m.monthName,
        String(m.count),
        `${m.units} unid.`,
        formatCOP(m.revenue),
        formatCOP(m.cost),
        formatCOP(m.profit),
        `${margin}%`
      ];
    }),
    foot: [[
      `TOTAL AÑO ${selectedYear}`,
      String(yearSales.length),
      `${units} unid.`,
      formatCOP(revenue),
      formatCOP(cost),
      formatCOP(profit),
      revenue > 0 ? `${Math.round((profit / revenue) * 100)}%` : '0%'
    ]],
    theme: 'grid',
    headStyles: { fillColor: [46, 74, 54], textColor: 255, fontSize: 8.5 },
    footStyles: { fillColor: [240, 234, 214], textColor: [20, 27, 22], fontStyle: 'bold', fontSize: 8.5 },
    styles: { fontSize: 8 }
  });

  savePDFDocument(doc, `Informe_Contable_Anual_${selectedYear}_DannyScents.pdf`);
  showToast(`📄 PDF Contable Anual (${selectedYear}) descargado`);
};

// 6. PDF BALANCE CONTABLE GENERAL COMPLETO (INVENTARIO + VENTAS)
window.exportFullAccountingPDF = function() {
  const doc = createBrandedPDF(
    'ESTADO DE RESULTADOS Y BALANCE CONTABLE GENERAL',
    'Consolidado integral de Inventario Valorizado + Ventas Acumuladas + Rentabilidad'
  );

  const invUnits = PRODUCTS.reduce((a, p) => a + Number(p.stock || 0), 0);
  const invCost = PRODUCTS.reduce((a, p) => a + Number(p.stock || 0) * Number(p.cost || 0), 0);
  const invSale = PRODUCTS.reduce((a, p) => a + Number(p.stock || 0) * Number(p.price || 0), 0);

  const soldUnits = SALES.reduce((a, s) => a + s.totalUnits, 0);
  const soldRev = SALES.reduce((a, s) => a + s.total, 0);
  const soldCost = SALES.reduce((a, s) => a + s.totalCost, 0);
  const soldProfit = SALES.reduce((a, s) => a + s.profit, 0);

  doc.autoTable({
    startY: 42,
    head: [['Indicador Contable General — DANNY SCENTS', 'Valor / Resultado']],
    body: [
      ['Total Referencias Activas en Catalogo', `${PRODUCTS.length} Productos`],
      ['Unidades Totales Actualmente en Stock', `${invUnits} Unidades`],
      ['Capital Invertido en Inventario Actual (Al Costo)', formatCOP(invCost)],
      ['Valor Comercial del Inventario Actual (A Precio Venta)', formatCOP(invSale)],
      ['Total Facturas / Ventas Registradas', `${SALES.length} Ventas`],
      ['Total Unidades Vendidas Acumuladas', `${soldUnits} Unidades`],
      ['Ingresos Brutos por Ventas Acumuladas', formatCOP(soldRev)],
      ['Costo de Produccion de Unidades Vendidas', formatCOP(soldCost)],
      ['UTILIDAD NETA REAL ACUMULADA (GANANCIA)', formatCOP(soldProfit)]
    ],
    theme: 'grid',
    headStyles: { fillColor: [20, 27, 22], textColor: [218, 165, 32], fontSize: 9.5 },
    styles: { fontSize: 9 }
  });

  const nextY = (doc.lastAutoTable?.finalY || 120) + 10;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('Ultimas Ventas Registradas en Libro Contable:', 14, nextY);

  doc.autoTable({
    startY: nextY + 4,
    head: [['Factura', 'Fecha', 'Cliente', 'Metodo Pago', 'Unid.', 'Total Venta', 'Costo', 'Utilidad']],
    body: SALES.slice(0, 35).map(s => [
      s.invoiceNumber,
      s.saleDay,
      s.customerName,
      s.paymentMethod,
      String(s.totalUnits),
      formatCOP(s.total),
      formatCOP(s.totalCost),
      formatCOP(s.profit)
    ]),
    theme: 'striped',
    headStyles: { fillColor: [46, 74, 54], textColor: 255, fontSize: 8 },
    styles: { fontSize: 7.5 }
  });

  savePDFDocument(doc, `Balance_General_Contable_DannyScents_${getTodayStr()}.pdf`);
  showToast('📄 Balance General Contable en PDF descargado');
};

// =========================================================
// INICIALIZACIÓN DE LA APLICACIÓN
// =========================================================
document.addEventListener('DOMContentLoaded', async () => {
  if (isRunningInMobileApp()) {
    document.body.classList.add('is-mobile-app');
  }
  await loadCatalogFromDB();
  updateCartUI();
  await checkExistingSession();

  document.querySelectorAll('.cat-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.getAttribute('data-cat');
      document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts();
    });
  });

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  document.getElementById('openCartBtn')?.addEventListener('click', openCart);
  document.getElementById('closeCartBtn')?.addEventListener('click', closeCart);
  document.getElementById('overlay')?.addEventListener('click', () => {
    closeCart();
    closeAllModals();
  });

  // Sincronización automática entre celulares y navegadores web cuando vuelve al frente o cada 15s
  document.addEventListener('visibilitychange', async () => {
    if (document.visibilityState === 'visible') {
      await loadCatalogFromDB();
      if (currentUser) await loadAdminData();
    }
  });

  setInterval(async () => {
    if (document.visibilityState === 'visible') {
      const prevTs = lastSyncedTimestamp;
      const state = await syncFromCloud();
      if (state && Number(state.updatedAt) !== prevTs) {
        PRODUCTS = state.products || PRODUCTS;
        updateCatalogCounts();
        renderProducts();
        if (currentUser) await loadAdminData();
      }
    }
  }, 15000);
});
