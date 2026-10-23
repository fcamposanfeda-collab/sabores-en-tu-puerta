# Sabores en tu Puerta

Web corporativa de comida casera y reparto a domicilio en Ciudad Real y alrededores. Hecha con Next.js (App Router), TypeScript y Tailwind CSS. Se exporta como web estática (HTML) y se sube a cualquier hosting.

No hay precios. Los botones piden presupuesto, llamada o WhatsApp.

## Arrancar

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abre http://localhost:3000.

Para generar la web de producción:

```bash
npm run build
```

El resultado queda en la carpeta `out/`. Para verla en local: `npx serve out`.

## Variables de entorno

Copia `.env.example`.

| Variable | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Dominio canónico, sin barra final. Sale en canonical, sitemap, Open Graph y datos estructurados. |
| `NEXT_PUBLIC_GA_ID` | ID de Google Analytics 4. Vacío = no se carga ningún script. |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Valor `content` de la meta de Search Console. |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Clave de Web3Forms para el formulario. Se crea gratis en web3forms.com con el email que debe recibir los presupuestos. Es pública por diseño. |

Sin `NEXT_PUBLIC_WEB3FORMS_KEY`, el formulario responde que el correo no está configurado y la persona puede llamar o escribir por WhatsApp.

Las variables se leen al hacer `npm run build`: si cambias alguna, vuelve a generar y subir la web.

## Dónde se edita el contenido

- Empresa, teléfono, email, Instagram y zona: `src/data/site.ts`
- Servicios: `src/data/services.ts`
- Platos: `src/data/dishes.ts`
- Localidades y radio: `src/data/localities.ts`
- Preguntas generales: `src/data/faqs.ts`
- Artículos: `content/blog/*.mdx`
- Logo: sustituye `public/logo.svg` por el SVG oficial. El componente ya apunta a ese archivo.
- Fotos: cuando existan, colócalas en la ruta que indica cada `TODO: foto`. El sitio las usa solas, sin cambiar código:
  - `public/images/hero/pescado.jpg`
  - `public/images/hero/ensalada.jpg`
  - `public/images/hero/crema.jpg`
  - `public/images/hero/estofado.jpg`
  - `public/images/platos/<slug>.jpg` (el nombre está en cada plato, campo `image`)

### Platos

Cada plato tiene `example: true`. Mientras sea así, la ficha dice que es un ejemplo y no se emite schema `MenuItem`. Cuando sea un plato real: cambia el texto, la foto, los alérgenos y pon `example: false`.

### Localidades

`src/data/localities.ts` trae la distancia en línea recta a Ciudad Real y a Puertollano. `enabled: true` genera la landing. `enabled: false` solo aparece en la lista de «fuera de radio» (Almadén, Tomelloso, Alcázar de San Juan, Herencia, Campo de Criptana, Villanueva de los Infantes y Argamasilla de Alba).

Para añadir un pueblo: copia un objeto, pon distancias, texto propio (no basta con cambiar el nombre) y `enabled: true`.

### Blog

Nuevo archivo en `content/blog/mi-articulo.mdx`:

```mdx
---
title: "Título largo, el del H1"
seoTitle: "Título corto de la pestaña, 60 caracteres o menos"
description: "Meta description de 155 caracteres o menos."
date: "2026-10-08"
category: "Colectividades"
---

Primer párrafo que responde la pregunta.
```

Enlaces internos con rutas del sitio, por ejemplo `[contacto](/contacto)`.

## Publicación en el hosting

1. Crea `.env.local` con los valores de producción (dominio, GA4, Search Console y Web3Forms).
2. `npm run build`.
3. Sube **el contenido** de `out/` (no la carpeta) a la raíz pública del hosting (`public_html` o similar) por FTP o el gestor de archivos.
4. Activa el certificado SSL gratuito (Let's Encrypt) en el panel del hosting.
5. `out/.htaccess` ya trae HTTPS forzado, quitar `www`, página 404, la redirección de `/servicios/eventos`, caché y cabeceras básicas. Funciona en hostings Apache o LiteSpeed. En Nginx habría que trasladar esas reglas a la configuración del servidor.
6. En Search Console, verifica con la meta tag y envía `https://tu-dominio/sitemap.xml`.

Cada cambio de contenido requiere repetir los pasos 2 y 3.

## Analítica

Analytics solo se carga si hay `NEXT_PUBLIC_GA_ID` y la persona acepta en el banner. Eventos:

- `click_llamar`
- `click_whatsapp`
- `generate_lead` al enviar el formulario con éxito

## Rutas

Inicio, servicios y una página por servicio, platos y ficha, sobre nosotros, zonas y una landing por localidad activa, preguntas frecuentes, contacto, gracias, blog, datos clave, aviso legal, privacidad, cookies, 404, `sitemap.xml`, `robots.txt`, `/llms.txt` y `/llms-full.txt`.
