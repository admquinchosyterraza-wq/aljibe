# Aljibe — sitio web

Rediseño de aljibe.cl (agua potable, maquinaria y transporte de carga · San Carlos, Ñuble).
Sitio estático: HTML + CSS + JS, sin generador. Los textos se editan directo en `index.html`.

## Estructura

- `index.html` — la página completa. `404.html` — página de error.
- `css/styles.css`, `js/main.js` (tablero split-flap, carrusel de servicios, radar), `js/early.js`.
- `img/` — fotos en WebP (vienen del sitio antiguo; originales en `.impeccable/originales/`).
- `_headers` — cabeceras de seguridad y caché para Cloudflare.
- `robots.txt`, `sitemap.xml` — apuntan a https://aljibe.cl/.
- `_generador/publicar.js` — arma `dist/` solo con lo publicable (agrega `?v=` a CSS/JS).
- `wrangler.jsonc` — configuración de Cloudflare (proyecto `aljibe`).
- `PRODUCT.md`, `DESIGN.md`, `.impeccable/` — documentación de diseño (no se publican).

## Vista previa local

`python -m http.server 8133` en esta carpeta → http://localhost:8133

## Publicar cambios

```
npx wrangler deploy
```

(Corre `node _generador/publicar.js` y sube `dist/`. Cuenta Cloudflare: admquinchosyterraza@gmail.com.)
El código también tiene respaldo en GitHub (privado): github.com/admquinchosyterraza-wq/aljibe
(`git add -A && git commit -m "..." && git push`). GitHub NO está conectado a Cloudflare: subir a GitHub no publica.

## Estado actual: BORRADOR en .workers.dev

- Borrador en vivo: https://aljibe.admquinchosyterraza.workers.dev
- `_headers` lleva `X-Robots-Tag: noindex, nofollow` para que Google no lo indexe todavía.
- aljibe.cl sigue mostrando el sitio antiguo (WordPress).

## Pendiente

- Fotos del personal (3 casillas "Foto pendiente" en "Nuestra gente").
- Fotos de servicios en mayor resolución (las actuales son de 500 px).
- Confirmar que se puede mostrar la razón social del certificado Giro Limpio.
- Al aprobar: conectar aljibe.cl y www.aljibe.cl en Cloudflare (Settings → Domains & Routes),
  redirección www → raíz, Always Use HTTPS, quitar la línea `X-Robots-Tag` de `_headers`,
  desactivar la ruta .workers.dev y dar de alta en Google Search Console.
