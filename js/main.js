(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- Topbar + menú ---------- */
  const topbar = $('.topbar');
  const onScrollBar = () => topbar.classList.toggle('is-solid', scrollY > 24);
  onScrollBar();
  addEventListener('scroll', onScrollBar, { passive: true });

  const menuBtn = $('.menu-btn');
  const nav = $('#nav');
  const setMenu = (open) => {
    nav.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  };
  menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
  $$('a', nav).forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  // sección activa en el menú
  const navLinks = $$('a', nav);
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  navLinks.forEach(a => { const t = $(a.getAttribute('href')); if (t) spy.observe(t); });

  /* ---------- Split-flap ---------- */
  const CHARS = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789';

  function setupFlap(el) {
    const text = el.textContent.trim();
    el.textContent = '';
    const sr = document.createElement('span');
    sr.className = 'sr-only';
    sr.textContent = text;
    const vis = document.createElement('span');
    vis.setAttribute('aria-hidden', 'true');
    vis.style.display = 'inline-flex';
    el.append(sr, vis);
    el._sr = sr; el._vis = vis; el._text = text;
    renderChars(el, text);
  }

  function renderChars(el, text) {
    el._vis.textContent = '';
    for (const c of text.toUpperCase()) {
      const s = document.createElement('span');
      s.className = 'ch';
      s.textContent = c;
      el._vis.append(s);
    }
  }

  function flapTo(el, text, { from = '', speed = 55 } = {}) {
    if (!el._vis) setupFlap(el);
    el._sr.textContent = text;
    el._text = text;
    const target = text.toUpperCase();
    if (reduce) { renderChars(el, text); return; }
    const start = (from || el._vis.textContent).toUpperCase();
    const len = Math.max(target.length, start.length);
    renderChars(el, start.padEnd(len, ' '));
    const cells = [...el._vis.children];
    const token = (el._token = Symbol());
    cells.forEach((cell, i) => {
      const final = target[i] ?? ' ';
      const steps = final === ' ' ? 1 : 3 + Math.floor(Math.random() * 4);
      let n = 0;
      const tick = () => {
        if (el._token !== token) return;
        n++;
        cell.classList.remove('is-flip');
        void cell.offsetWidth;
        cell.classList.add('is-flip');
        if (n >= steps) {
          cell.textContent = final;
          if (i === cells.length - 1) setTimeout(() => el._token === token && renderChars(el, text), speed * 2);
          return;
        }
        cell.textContent = final === '·' || final === '/' || final === '.' ? final : CHARS[Math.floor(Math.random() * CHARS.length)];
        setTimeout(tick, speed);
      };
      setTimeout(tick, i * 22);
    });
  }

  const flaps = $$('[data-flap]');
  flaps.forEach(setupFlap);

  // entrada del tablero: cada fila "cae" desde blanco
  const boardFlaps = $$('[data-board] [data-flap]');
  boardFlaps.forEach((el, i) => {
    const t = el._text;
    if (!reduce) renderChars(el, ' '.repeat(t.length));
    setTimeout(() => flapTo(el, t, { from: ' '.repeat(t.length) }), 450 + i * 110);
  });

  // ciclo de equipos en el tablero
  const cyclers = $$('[data-cycle]').map(el => ({ el, items: el.dataset.cycle.split('|'), i: 0 }));
  if (cyclers.length && !reduce) {
    let row = 0;
    setTimeout(() => setInterval(() => {
      if (document.hidden) return;
      const c = cyclers[row % cyclers.length];
      c.i = (c.i + 1) % c.items.length;
      flapTo(c.el, c.items[c.i]);
      row++;
    }, 2200), 3200);
  }

  // teléfono final: se arma al entrar en pantalla
  $$('[data-on-view]').forEach(el => {
    const t = el._text;
    const io = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting) return;
      io.disconnect();
      flapTo(el, t, { from: ' '.repeat(t.length), speed: 65 });
    }, { threshold: .6 });
    io.observe(el);
  });

  /* ---------- Marquesinas: duplicar contenido ---------- */
  $$('.ticker__track, .reel__track').forEach(track => {
    [...track.children].forEach(n => {
      const c = n.cloneNode(true);
      c.setAttribute('aria-hidden', 'true');
      if (c.tagName === 'IMG') c.alt = '';
      track.append(c);
    });
  });

  /* ---------- Contadores ---------- */
  const fmt = new Intl.NumberFormat('es-CL');
  $$('[data-count]').forEach(el => {
    const end = +el.dataset.count;
    const plain = el.hasAttribute('data-plain');
    const show = v => { el.textContent = plain ? String(v) : fmt.format(v); };
    if (reduce) return;
    const begin = plain ? end - 13 : 0;
    show(begin);
    const io = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now(), dur = 1400;
      const step = now => {
        const p = Math.min(1, (now - t0) / dur);
        const e = 1 - Math.pow(1 - p, 4);
        show(Math.round(begin + (end - begin) * e));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: .5 });
    io.observe(el);
  });

  /* ---------- Servicios: carrusel automático ---------- */
  const services = $('.services');
  const track = $('[data-track]');
  const viewport = $('.services__viewport');
  const cards = $$('.svc', track);
  const nowEl = $('[data-svc-now]');
  const bar = $('[data-svc-bar]');
  const AUTO_MS = 4500, IDLE_MS = 8000;

  let currentIdx = 0;
  const setCurrent = idx => {
    cards.forEach((c, i) => c.classList.toggle('is-current', i === idx));
    bar.style.transform = `scaleX(${(idx + 1) / cards.length})`;
    if (idx === currentIdx) return;
    currentIdx = idx;
    flapTo(nowEl, String(idx + 1), { speed: 45 });
  };
  setCurrent(0);

  const padLeft = () => parseFloat(getComputedStyle(track).paddingLeft) || 0;
  const maxScroll = () => viewport.scrollWidth - viewport.clientWidth;

  const goTo = idx => {
    const i = (idx + cards.length) % cards.length;
    const left = Math.min(maxScroll(), cards[i].offsetLeft - padLeft());
    viewport.scrollTo({ left, behavior: reduce ? 'auto' : 'smooth' });
    setCurrent(i);
  };

  // tarjeta actual según la posición del carrusel (deslizar con el dedo, flechas, teclado)
  const syncFromScroll = () => {
    const x = viewport.scrollLeft;
    if (x >= maxScroll() - 4) return setCurrent(cards.length - 1);
    let best = 0, dist = Infinity;
    cards.forEach((c, i) => { const d = Math.abs(c.offsetLeft - padLeft() - x); if (d < dist) { dist = d; best = i; } });
    setCurrent(best);
  };
  let raf = 0;
  viewport.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; syncFromScroll(); }); }, { passive: true });

  // avance automático: se detiene con el mouse encima, al tocar o al usar el teclado, y fuera de pantalla
  let hovering = false, inView = false, lastTouch = 0;
  const idle = () => Date.now() - lastTouch > IDLE_MS;
  const touched = () => { lastTouch = Date.now(); };
  viewport.addEventListener('pointerenter', () => { hovering = true; });
  viewport.addEventListener('pointerleave', () => { hovering = false; });
  ['pointerdown', 'touchstart', 'keydown'].forEach(ev => viewport.addEventListener(ev, touched, { passive: true }));
  // la rueda vertical (bajar por la página) no cuenta como interacción con el carrusel
  viewport.addEventListener('wheel', e => { if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) touched(); }, { passive: true });
  $('[data-svc-prev]').addEventListener('click', () => { touched(); goTo(currentIdx - 1); });
  $('[data-svc-next]').addEventListener('click', () => { touched(); goTo(currentIdx + 1); });
  new IntersectionObserver(([en]) => { inView = en.isIntersecting; }, { threshold: .35 }).observe(viewport);

  if (!reduce) {
    setInterval(() => {
      if (!inView || hovering || document.hidden || !idle() || services.querySelector(':focus-visible')) return;
      goTo(currentIdx + 1);
    }, AUTO_MS);
  }

  /* ---------- WhatsApp flotante: se oculta donde ya hay contacto o tapa contenido ---------- */
  const waFloat = $('.wa-float');
  const covering = new Set();
  const waIO = new IntersectionObserver(entries => {
    entries.forEach(en => en.isIntersecting ? covering.add(en.target) : covering.delete(en.target));
    waFloat.classList.toggle('is-hidden', covering.size > 0);
  }, { rootMargin: '-20% 0px -20% 0px' });
  ['.hero', '.services', '.pool', '.close'].forEach(s => waIO.observe($(s)));

  /* ---------- Mapa de Chile ---------- */
  const CARGA = 'Transporte de carga a todo Chile. Para agua potable o maquinaria, consúltanos por tu sector.';
  const regions = {
    nuble: ['Región de Ñuble', 'Nuestra región base: San Carlos y toda Ñuble.'],
    biobio: ['Región del Biobío', 'Distribución de agua y transporte en la Región del Biobío.'],
    maule: ['Región del Maule', 'Servicio hacia el norte, en la Región del Maule.'],
    araucania: ['Región de La Araucanía', 'Llegamos a algunas zonas de La Araucanía. Consúltanos por tu sector.'],
    arica: ['Región de Arica y Parinacota'], tarapaca: ['Región de Tarapacá'], antofagasta: ['Región de Antofagasta'],
    atacama: ['Región de Atacama'], coquimbo: ['Región de Coquimbo'], valparaiso: ['Región de Valparaíso'],
    rm: ['Región Metropolitana'], ohiggins: ["Región de O'Higgins"], losrios: ['Región de Los Ríos'],
    loslagos: ['Región de Los Lagos'], aysen: ['Región de Aysén'], magallanes: ['Región de Magallanes']
  };
  const tabs = $$('.regions [role="tab"]');
  const chmap = $('[data-chmap]');
  const zones = $$('[data-zone]', chmap);
  const labels = $$('[data-label]', chmap);
  const routes = $$('[data-route]', chmap);
  const tip = $('[data-tip]', chmap);
  const note = $('[data-region-note]');
  let userPicked = false;

  const selectRegion = (id, focus = false) => {
    tabs.forEach(t => {
      const on = t.dataset.region === id;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      if (on && focus) t.focus();
    });
    if (!tabs.some(t => t.dataset.region === id)) tabs[0].tabIndex = 0;
    zones.forEach(z => z.classList.toggle('is-on', z.dataset.zone === id));
    labels.forEach(l => l.classList.toggle('is-on', l.dataset.label === id));
    routes.forEach(r => r.classList.toggle('is-on', r.dataset.route === id));
    const [name, text = CARGA] = regions[id];
    note.textContent = regions[id][1] ? text : `${name}: ${text}`;
  };

  // clic en el mapa elige la región; al pasar el mouse se muestra su nombre
  zones.forEach(z => {
    z.addEventListener('click', () => { userPicked = true; selectRegion(z.dataset.zone); });
    z.addEventListener('pointermove', e => {
      const [name, text] = regions[z.dataset.zone];
      const box = chmap.getBoundingClientRect();
      const b = document.createElement('b');
      b.textContent = name;
      tip.replaceChildren(b, text ? 'Cobertura directa' : 'Transporte de carga');
      tip.style.left = `${e.clientX - box.left}px`;
      tip.style.top = `${e.clientY - box.top}px`;
      tip.hidden = false;
    });
    z.addEventListener('pointerleave', () => { tip.hidden = true; });
  });
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => { userPicked = true; selectRegion(t.dataset.region); });
    t.addEventListener('keydown', e => {
      const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      userPicked = true;
      selectRegion(tabs[(i + d + tabs.length) % tabs.length].dataset.region, true);
    });
  });
  selectRegion('nuble');

  // recorre las regiones solo mientras el mapa está a la vista
  let radarTimer = 0, radarIdx = 0;
  const radarIO = new IntersectionObserver(([en]) => {
    clearInterval(radarTimer);
    if (!en.isIntersecting || reduce) return;
    radarTimer = setInterval(() => {
      if (userPicked || document.hidden) return clearInterval(radarTimer);
      radarIdx = (radarIdx + 1) % tabs.length;
      selectRegion(tabs[radarIdx].dataset.region);
    }, 3200);
  }, { threshold: .4 });
  radarIO.observe(chmap);

  /* ---------- Cotizador de llenado de piscinas ---------- */
  const pool = $('[data-pool]');
  const num = v => (Number.isFinite(v) ? v : NaN);
  const dec = new Intl.NumberFormat('es-CL', { maximumFractionDigits: 1 });
  const poolM3 = $('[data-pool-m3]');
  let lastM3 = poolM3._text;

  const readPool = () => {
    const f = pool.elements;
    const forma = f.forma.value;
    const v = name => num(f[name].valueAsNumber);
    let m3 = NaN, medidas = '', ancho = v('largo');
    if (forma === 'rect') { m3 = v('largo') * v('ancho') * v('prof'); medidas = `Rectangular, ${dec.format(v('largo'))} × ${dec.format(v('ancho'))} m`; }
    if (forma === 'ovalada') { m3 = Math.PI * v('largo') / 2 * v('ancho') / 2 * v('prof'); medidas = `Ovalada, ${dec.format(v('largo'))} × ${dec.format(v('ancho'))} m`; }
    if (forma === 'redonda') { m3 = Math.PI * (v('diametro') / 2) ** 2 * v('prof'); medidas = `Redonda, ${dec.format(v('diametro'))} m de diámetro`; ancho = v('diametro'); }
    if (forma === 'm3') { m3 = v('vol'); medidas = 'Volumen indicado por el cliente'; }
    return { forma, m3, medidas, ancho, prof: v('prof') };
  };

  const updatePool = () => {
    const { forma, m3, ancho, prof } = readPool();
    $$('[data-show]', pool).forEach(el => { el.hidden = !el.dataset.show.split(' ').includes(forma); });
    const ok = m3 > 0;
    const shown = ok ? dec.format(Math.round(m3 * 10) / 10) : '—';
    if (shown !== lastM3) { flapTo(poolM3, shown, { speed: 40 }); lastM3 = shown; }
    $('[data-pool-l]').textContent = ok ? `${fmt.format(Math.round(m3 * 1000))} litros de agua potable` : 'Completa las medidas';
    // dibujo: ancho según el largo (3 a 25 m) y nivel según la profundidad (hasta 3 m)
    const w = forma === 'm3' ? 70 : 40 + 60 * Math.min(1, Math.max(0, (ancho - 3) / 22));
    const h = forma === 'm3' ? 60 : 15 + 75 * Math.min(1, Math.max(0, prof / 3));
    $('[data-pool-basin]').style.width = `${w || 40}%`;
    $('[data-pool-water]').style.height = `${h || 15}%`;
    $('[data-pool-w]').textContent = forma === 'm3' ? `${shown} m³` : `${dec.format(ancho || 0)} m`;
    $('[data-pool-d]').textContent = forma === 'm3' ? 'Volumen' : `${dec.format(prof || 0)} m`;
    $('[data-pool-d]').hidden = forma === 'm3';
  };
  pool.addEventListener('input', updatePool);
  updatePool();

  pool.addEventListener('submit', e => {
    e.preventDefault();
    const f = pool.elements;
    const { forma, m3, medidas, prof } = readPool();
    const err = $('[data-pool-err]', pool);
    const bad = [];
    $$('[data-show]:not([hidden]) input', pool).forEach(i => {
      const invalid = !(i.valueAsNumber > 0);
      i.setAttribute('aria-invalid', invalid);
      if (invalid) bad.push(i);
    });
    const comuna = f.comuna.value.trim();
    f.comuna.setAttribute('aria-invalid', !comuna);
    if (!comuna) bad.push(f.comuna);
    if (bad.length || !(m3 > 0)) {
      err.textContent = !comuna && bad.length === 1 ? 'Indícanos la comuna o sector donde está la piscina.' : 'Revisa las medidas y la comuna: hay campos sin completar.';
      err.hidden = false;
      bad[0]?.focus();
      return;
    }
    err.hidden = true;
    const fecha = f.fecha.value ? f.fecha.value.split('-').reverse().join('-') : 'A coordinar';
    const lines = [
      'Hola Aljibe, quiero cotizar *llenado de piscina*:',
      `• Piscina: ${medidas}`,
      forma === 'm3' ? null : `• Profundidad promedio: ${dec.format(prof)} m`,
      `• Volumen estimado: ${dec.format(Math.round(m3 * 10) / 10)} m³ (${fmt.format(Math.round(m3 * 1000))} litros)`,
      `• Tipo: ${f.tipo.value}`,
      `• Comuna / sector: ${comuna}`,
      `• Fecha deseada: ${fecha}`,
      f.nombre.value.trim() ? `• Nombre: ${f.nombre.value.trim()}` : null
    ].filter(Boolean);
    window.open(`https://wa.me/56985083990?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
  });

  /* ---------- Revelado al hacer scroll ---------- */
  const revealSel = ['.figures .fig', '.services__top', '.road__head', '.road__item', '.pool__copy', '.pool__viz', '.fire__copy', '.fire__media img', '.coverage__copy', '.chmap',
    '.company__media', '.company__copy', '.people__head', '.person', '.green__copy', '.green__cert', '.close__title', '.close__cta'];
  const revealIO = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add('is-in');
      revealIO.unobserve(en.target);
    });
  }, { threshold: .15 });
  $$(revealSel.join(',')).forEach(el => {
    const sibs = [...el.parentElement.children].filter(n => n.matches(revealSel.join(',')));
    const i = sibs.indexOf(el);
    if (sibs.length > 1) el.style.transitionDelay = Math.min(i, 4) * 90 + 'ms';
    el.setAttribute('data-reveal', '');
    revealIO.observe(el);
  });

  const y = $('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
