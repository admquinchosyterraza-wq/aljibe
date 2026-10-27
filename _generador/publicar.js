/* Arma dist/ con SOLO lo que va a internet (sin PRODUCT.md, DESIGN.md, .impeccable, etc.).
   Agrega ?v=<huella> a CSS y JS para que los cambios se vean al tiro.
   Copia recursiva propia: fs.cpSync se cae en Windows con rutas con tildes. */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const RAIZ = path.resolve(__dirname, '..');
const DIST = path.join(RAIZ, 'dist');
const ARCHIVOS_RAIZ = fs.readdirSync(RAIZ).filter(f =>
  f.endsWith('.html') || ['sitemap.xml', 'robots.txt', '_headers'].includes(f)
);
const CARPETAS = ['css', 'js', 'img'];
const EXCLUIR = new Set(['src', 'raw']);

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST);

const copiar = (desde, hasta) => {
  fs.mkdirSync(hasta, { recursive: true });
  for (const e of fs.readdirSync(desde, { withFileTypes: true })) {
    if (EXCLUIR.has(e.name) || e.name.endsWith('.json')) continue;
    const a = path.join(desde, e.name), b = path.join(hasta, e.name);
    if (e.isDirectory()) copiar(a, b); else fs.copyFileSync(a, b);
  }
};

for (const c of CARPETAS) copiar(path.join(RAIZ, c), path.join(DIST, c));

// huella de cada CSS/JS para evitar que el navegador muestre versiones viejas
const huella = rel => crypto.createHash('md5').update(fs.readFileSync(path.join(RAIZ, rel))).digest('hex').slice(0, 8);
for (const f of ARCHIVOS_RAIZ) {
  let txt = fs.readFileSync(path.join(RAIZ, f), 'utf8');
  if (f.endsWith('.html')) {
    txt = txt.replace(/(href|src)="((?:css|js)\/[^"?]+\.(?:css|js))"/g, (m, attr, rel) => `${attr}="${rel}?v=${huella(rel)}"`);
  }
  fs.writeFileSync(path.join(DIST, f), txt);
}

let total = 0, n = 0;
(function medir(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) medir(p); else { total += fs.statSync(p).size; n++; }
  }
})(DIST);
console.log(`\nCarpeta dist/ lista: ${n} archivos, ${(total / 1048576).toFixed(2)} MB`);
