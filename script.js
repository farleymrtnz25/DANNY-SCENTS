// Catálogo Completo Clasificado de DANNY SCENTS (18 Productos en 6 Categorías)
const PRODUCTS = [
  // CATEGORÍA 1: OSITOS TERNURA (4 Productos)
  {
    id: 'osito-caja-regalo',
    name: 'Osito en Caja Regalo "Ilumina mis Metas"',
    category: 'ositos',
    categoryLabel: '🧸 Ositos Ternura',
    scent: 'Manzanilla Dulce & Miel Dorada',
    price: 18500,
    image: 'imagenes/osito-caja-regalo-ia.png',
    badge: '🎁 Edición Regalo',
    trayOrigin: 'Presentación especial en caja blanca texturizada con ventana, mariposa y cinta dorada',
    specs: ['Peso: 95 g', 'Duración: 18 h', 'Caja de Regalo Incluida'],
    description: 'Tierno osito esculpido en cera natural color miel dorada con ojitos brillantes, presentado en caja blanca texturizada con ventana, lazo satinado dorado, mariposa amarilla, margaritas de manzanilla y la frase inspiradora "Encendida para iluminar mis metas."'
  },
  {
    id: 'osito-miel-ambar',
    name: 'Osito Miel Ámbar Clásico',
    category: 'ositos',
    categoryLabel: '🧸 Ositos Ternura',
    scent: 'Miel Silvestre & Manzanilla',
    price: 14000,
    image: 'imagenes/osito-miel-ambar.png',
    badge: '🍯 Cera Natural',
    trayOrigin: 'Moldeado artesanal en tono ámbar miel con alto brillo y relieve en patitas',
    specs: ['Peso: 90 g', 'Duración: 16 h', 'Cera Vegetal & Abeja'],
    description: 'Figura artesanal de osito sentado en tono ámbar miel translúcido de alto brillo. Moldeado con tiernos detalles en orejas, hocico y patitas, ideal para recordatorios cálidos y decoración.'
  },
  {
    id: 'osito-manzanilla-botanico',
    name: 'Osito Botánico con Pétalos de Manzanilla',
    category: 'ositos',
    categoryLabel: '🧸 Ositos Ternura',
    scent: 'Infusión Pura de Flor de Manzanilla',
    price: 15500,
    image: 'imagenes/osito-manzanilla-botanico.png',
    badge: '🌼 Botánico Natural',
    trayOrigin: 'Elaborado con pétalos secos de manzanilla y relieve detallado en las huellitas',
    specs: ['Peso: 92 g', 'Duración: 17 h', 'Con Pétalos Reales'],
    description: 'Osito escultórico elaborado en cera amarilla dorada con auténticos pétalos secos de manzanilla suspendidos en su interior y almohadillas definidas en sus patitas.'
  },

  // CATEGORÍA 2: ROSAS ESCULPIDAS (2 Productos)
  {
    id: 'rosa-azul-noche',
    name: 'Rosa Azul Noche Bicolor',
    category: 'rosas',
    categoryLabel: '🌹 Rosas Esculpidas',
    scent: 'Manzanilla Nocturna & Lavanda Suave',
    price: 13500,
    image: 'imagenes/rosa-azul-noche.png',
    badge: '✨ Doble Tono',
    trayOrigin: 'Esculpida pétalo a pétalo con degradado azul índigo y base marfil cremosa',
    specs: ['Peso: 68 g', 'Duración: 12 h', 'Doble Tono Artesanal'],
    description: 'Rosa en flor esculpida pétalo a pétalo con degradado bicolor: corazón en azul índigo profundo que se funde suavemente hacia una base marfil cremosa.'
  },
  {
    id: 'rosa-moka-imperial',
    name: 'Rosa Moka Imperial',
    category: 'rosas',
    categoryLabel: '🌹 Rosas Esculpidas',
    scent: 'Manzanilla Tostada, Cacao & Vainilla',
    price: 13500,
    image: 'imagenes/rosa-moka-imperial.png',
    badge: '✨ Acabado Satinado',
    trayOrigin: 'Cera satinada en tono café espresso y moka con pabilo 100% algodón',
    specs: ['Peso: 68 g', 'Duración: 12 h', 'Acabado Satinado'],
    description: 'Elegante rosa escultórica en tono café moka y bronce ciruela profundo. Su presencia sofisticada armoniza espacios de lectura, escritorios y salas modernas.'
  },

  // CATEGORÍA 3: MARGARITAS & CRISANTEMOS MULTIPÉTALO (3 Productos)
  {
    id: 'margarita-blanca-manzanilla',
    name: 'Margarita Blanca de Manzanilla',
    category: 'margaritas',
    categoryLabel: '🌼 Margaritas & Crisantemos',
    scent: 'Aceite Esencial Puro de Manzanilla',
    price: 11500,
    image: 'imagenes/margarita-blanca-manzanilla.png',
    badge: '🌼 Flor Insignia',
    trayOrigin: 'Inspirada en la flor natural de manzanilla con pétalos marfil y centro cálido',
    specs: ['Peso: 55 g', 'Duración: 9 h', '18 Pétalos Esculpidos'],
    description: 'Flor multipétalo en cera marfil luminosa con cálido centro amarillo-verdoso, inspirada directamente en la flor natural de la manzanilla.'
  },
  {
    id: 'crisantemo-ambar-canela',
    name: 'Crisantemo Ámbar & Canela',
    category: 'margaritas',
    categoryLabel: '🌼 Margaritas & Crisantemos',
    scent: 'Manzanilla Especiada & Canela Dulce',
    price: 11500,
    image: 'imagenes/crisantemo-ambar-canela.png',
    badge: '🍂 Aroma Cálido',
    trayOrigin: 'Doble corona de pétalos en tono caramelo tostado y canela',
    specs: ['Peso: 55 g', 'Duración: 9 h', 'Doble Corona de Pétalos'],
    description: 'Dalia o crisantemo multipétalo moldeado en cálidos tonos caramelo tostado y canela, ideal para ambientes acogedores de otoño e invierno.'
  },
  {
    id: 'margarita-verde-violeta',
    name: 'Margarita Mística Verde & Violeta',
    category: 'margaritas',
    categoryLabel: '🌼 Margaritas & Crisantemos',
    scent: 'Manzanilla Fresca, Salvia & Violetas',
    price: 12000,
    image: 'imagenes/margarita-verde-violeta.png',
    badge: '🌿 Bicolor Botánica',
    trayOrigin: 'Combinación artesanal en cera verde celadón con corazón violeta amatista',
    specs: ['Peso: 56 g', 'Duración: 9 h', 'Corazón Bicolor'],
    description: 'Exótica margarita botánica con pétalos exteriores en verde salvia translúcido y un vibrante botón central en tono violeta amatista.'
  },

  // CATEGORÍA 4: FLORES DE 5 PÉTALOS (4 Productos)
  {
    id: 'flor-bicolor-amarillo-blanco',
    name: 'Flor Bicolor "Sol y Nube"',
    category: 'flores5',
    categoryLabel: '🌸 Flores de 5 Pétalos',
    scent: 'Manzanilla Solar & Flor de Azahar',
    price: 11000,
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
    price: 11000,
    image: 'imagenes/flor-terracota.png',
    badge: '🧡 Hecha a Mano',
    trayOrigin: 'Cinco pétalos redondeados en tono terracota cálido con centro oscuro',
    specs: ['Peso: 54 g', 'Duración: 8.5 h', '5 Pétalos Redondeados'],
    description: 'Flor artesanal de cinco pétalos en tono terracota cálido con corazón oscuro, perfecta para centros de mesa cálidos y luminosos.'
  },
  {
    id: 'flor-salvia-pastel',
    name: 'Flor Salvia Pastel & Lavanda',
    category: 'flores5',
    categoryLabel: '🌸 Flores de 5 Pétalos',
    scent: 'Manzanilla Verde, Eucalipto & Lavanda',
    price: 11000,
    image: 'imagenes/flor-salvia-pastel.png',
    badge: '🌿 Relax & Spa',
    trayOrigin: 'Tono verde salvia pastel con corazón lavanda suave para aromaterapia',
    specs: ['Peso: 52 g', 'Duración: 8 h', 'Tono Botánico Relajante'],
    description: 'Delicada flor de cinco pétalos en verde menta y salvia pastel con un sutil matiz lavanda en el centro alrededor del pabilo.'
  },
  {
    id: 'flor-bruma-lavanda',
    name: 'Flor Bruma Lavanda en Relieve',
    category: 'flores5',
    categoryLabel: '🌸 Flores de 5 Pétalos',
    scent: 'Manzanilla & Lavanda Francesa',
    price: 11500,
    image: 'imagenes/flor-bruma-lavanda.png',
    badge: '💜 Calma Nocturna',
    trayOrigin: 'Pétalos con borde en doble relieve en tonos gris azulado y lavanda',
    specs: ['Peso: 54 g', 'Duración: 8.5 h', 'Pétalos Doble Relieve'],
    description: 'Flor escultórica de cinco pétalos con bordes en alto relieve en tono gris azulado y bruma lavanda, diseñada para rituales de calma nocturna.'
  },

  // CATEGORÍA 5: HOJAS BOTÁNICAS & ESCULTURAS (3 Productos)
  {
    id: 'hoja-arce-esmeralda',
    name: 'Hoja de Arce Esmeralda',
    category: 'hojas',
    categoryLabel: '🍃 Hojas & Esculturas',
    scent: 'Manzanilla Silvestre & Bosque Fresco',
    price: 11500,
    image: 'imagenes/hoja-arce-esmeralda.png',
    badge: '🍃 Relieve Botánico',
    trayOrigin: 'Hoja de cinco puntas en cera verde esmeralda con nervaduras talladas',
    specs: ['Peso: 50 g', 'Duración: 8 h', 'Nervaduras Talladas'],
    description: 'Hoja botánica de cinco puntas en cera verde esmeralda y oliva brillante, con nervaduras finamente definidas que capturan la luz.'
  },
  {
    id: 'hoja-jade-botanica',
    name: 'Hoja de Manzanilla Jade',
    category: 'hojas',
    categoryLabel: '🍃 Hojas & Esculturas',
    scent: 'Té Verde, Manzanilla & Hierbabuena',
    price: 11500,
    image: 'imagenes/hoja-jade-botanica.png',
    badge: '🌿 Hoja Esculpida',
    trayOrigin: 'Hoja redondeada en tono verde jade intenso con nervaduras orgánicas',
    specs: ['Peso: 55 g', 'Duración: 9 h', 'Acabado Liso Seda'],
    description: 'Hoja redondeada de volumen acolchado en tono verde jade profundo con pliegue central orgánico, acompañada de tarjeta decorativa de margarita.'
  },
  {
    id: 'escultura-blanca-pureza',
    name: 'Mini Osito Blanco Marfil (Edición Pureza)',
    category: 'ositos',
    categoryLabel: '🧸 Ositos Ternura',
    scent: 'Manzanilla Blanca & Algodón Puro',
    price: 12000,
    image: 'imagenes/escultura-blanca-pureza.png',
    badge: '🤍 Edición Pureza',
    trayOrigin: 'Figura miniatura en cera blanca marfil nacarada para recordatorios delicados',
    specs: ['Peso: 48 g', 'Duración: 9 h', 'Cera Blanca Nacarada'],
    description: 'Tierna figura miniatura de osito en cera blanca marfil brillante con pabilo lateral, ideal para recordatorios delicados, bautizos y espacios de paz.'
  },

  // CATEGORÍA 6: MINIATURAS, RAMOS, FRASCOS & ESENCIA (3 Productos)
  {
    id: 'mini-flores-solares',
    name: 'Set x4 Mini Flores Solares & Botón Dorado',
    category: 'especiales',
    categoryLabel: '💐 Ramos, Frascos & Esencia',
    scent: 'Miel de Manzanilla & Cítricos Suaves',
    price: 15000,
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
    price: 29500,
    image: 'imagenes/ramo-velas-ia.png',
    badge: '💐 Bouquet Regalo',
    trayOrigin: 'Arreglo artesanal en tul verde escarchado con lazo satinado amarillo',
    specs: ['Incluye: 4 Velas en Ramo', 'Base de Vidrio + Tul', 'Listo para Regalar'],
    description: 'Espectacular arreglo tipo bouquet con una gran flor amarilla de 5 pétalos y centro rosa en la cima, rodeada de velas circulares amarillas sobre tul verde esmeralda con destellos y lazo satinado.'
  },
  {
    id: 'vela-frasco-bicolor',
    name: 'Vela en Frasco Bicolor "Brisa de Manzanilla"',
    category: 'especiales',
    categoryLabel: '💐 Ramos, Frascos & Esencia',
    scent: 'Aceite Esencial de Manzanilla & Verbena',
    price: 32000,
    image: 'imagenes/vela-frasco-rosa.jpeg',
    badge: '⭐ Favorito Danny Scents',
    trayOrigin: 'Frasco de vidrio con degradado verde-amarillo y rosa amarilla esculpida en la cima',
    specs: ['Contenido: 220 g', 'Duración: 40+ horas', 'Frasco Reutilizable'],
    description: 'Vela premium en frasco de vidrio cristalino con doble capa en degradado verde pradera y amarillo manzanilla, coronada en la superficie por una delicada rosa amarilla esculpida en cera.'
  }
];

let cart = [
  {
    id: 'osito-caja-regalo',
    name: 'Osito en Caja Regalo "Ilumina mis Metas"',
    price: 18500,
    image: 'imagenes/osito-caja-regalo-ia.png',
    qty: 1
  }
];

let currentCategory = 'todos';
let searchQuery = '';
let currentSort = 'featured';

function formatCOP(amount) {
  return '$' + amount.toLocaleString('es-CO') + ' COP';
}

// Render Product Cards
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
        <button class="btn btn-secondary" onclick="filterByCategory('todos')">Ver las 18 Figuras</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => `
    <article class="product-card" data-category="${product.category}">
      <div class="product-img-box">
        <div class="product-badges">
          <span class="badge badge-category">${product.categoryLabel}</span>
          <span class="badge badge-ai">${product.badge}</span>
        </div>
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <button class="quick-view-btn" onclick="openQuickView('${product.id}')">🔍 Ver Detalle</button>
      </div>
      <div class="product-info">
        <div class="product-scent">🌼 ${product.scent}</div>
        <h3 class="product-title serif">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-specs">
          ${product.specs.map(s => `<span>• ${s}</span>`).join('')}
        </div>
        <div class="product-footer">
          <div class="product-price">
            $${product.price.toLocaleString('es-CO')} <small>COP</small>
          </div>
          <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">
            + Agregar
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// Filter by Category
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

// Quick View Modal
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
  document.getElementById('modalSpecs').innerHTML = product.specs.map(s => `<span>• ${s}</span>`).join(' ');

  const addBtn = document.getElementById('modalAddBtn');
  addBtn.onclick = () => {
    addToCart(product.id);
    closeModal();
  };

  document.getElementById('overlay').classList.add('open');
  document.getElementById('quickViewModal').classList.add('open');
};

window.closeModal = function() {
  document.getElementById('quickViewModal').classList.remove('open');
  if (!document.getElementById('cartDrawer').classList.contains('open')) {
    document.getElementById('overlay').classList.remove('open');
  }
};

// Cart Management
window.addToCart = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === product.id);
  if (existing) {
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

window.addPackToCart = function(name, price, image) {
  const id = 'pack-' + name.toLowerCase().replace(/\s+/g, '-');
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, name, price, image, qty: 1 });
  }
  updateCartUI();
  openCart();
  showToast(`🎁 "${name}" agregado a tu pedido`);
};

window.changeQty = function(id, delta) {
  const idx = cart.findIndex(item => item.id === id);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  }
  updateCartUI();
};

function updateCartUI() {
  const countEl = document.getElementById('cartCount');
  const listEl = document.getElementById('cartItemsList');
  const totalEl = document.getElementById('cartTotalValue');

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (countEl) countEl.textContent = totalItems;
  if (totalEl) totalEl.textContent = formatCOP(totalPrice);

  if (!listEl) return;
  if (cart.length === 0) {
    listEl.innerHTML = `
      <div style="text-align: center; padding: 40px 12px; color: var(--text-muted);">
        <p style="font-size: 2rem; margin-bottom: 8px;">🕯️</p>
        <p>Tu canasta está vacía. Explora nuestras 18 figuras artesanales con aroma a manzanilla.</p>
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
  if (!document.getElementById('quickViewModal').classList.contains('open')) {
    document.getElementById('overlay').classList.remove('open');
  }
};

window.checkoutOrder = function() {
  if (cart.length === 0) {
    showToast('Agrega al menos una vela a tu pedido');
    return;
  }
  const giftMsg = document.getElementById('giftMessageInput')?.value || 'Encendida para iluminar mis metas.';
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const lines = cart.map(i => `• ${i.qty}x ${i.name} ($${(i.price * i.qty).toLocaleString('es-CO')})`).join('\n');
  const message = `¡Hola DANNY SCENTS! 🕯️🌼 Quiero realizar el siguiente pedido de velas artesanales:\n\n${lines}\n\n🎀 Frase en caja: "${giftMsg}"\n💰 Total estimado: ${formatCOP(totalPrice)}`;

  const waUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
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
  }, 2800);
}

// Initialize Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();

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
    closeModal();
  });
});
