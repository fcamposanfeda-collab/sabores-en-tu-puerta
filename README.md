# Sabores en tu Puerta

Web corporativa de comida casera y reparto a domicilio en Ciudad Real, Puertollano y hasta 60 km. Hecha con Next.js (App Router), TypeScript y Tailwind CSS. Pensada para Vercel.

No hay precios. Los botones piden presupuesto, llamada o WhatsApp.

## Arrancar

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abre http://localhost:3000.

Para comprobar la build de producción:

```bash
npm run build
npm start
```

## Variables de entorno

Copia `.env.example`.

| Variable | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Dominio canónico, sin barra final. Sale en canonical, sitemap, Open Graph y datos estructurados. |
| `NEXT_PUBLIC_GA_ID` | ID de Google Analytics 4. Vacío = no se carga ningún script. |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Valor `content` de la meta de Search Console. |
| `RESEND_API_KEY` | API key de Resend. |
| `CONTACT_FROM_EMAIL` | Remitente verificado en Resend. No puede ser el Gmail personal si el dominio no está verificado. |
| `CONTACT_TO_EMAIL` | Bandeja que recibe los presupuestos. Por defecto `Saboresentupuerta1@gmail.com`. |

Sin `RESEND_API_KEY` y `CONTACT_FROM_EMAIL`, el formulario responde que el correo no está configurado y la persona puede llamar o escribir por WhatsApp.

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

## Despliegue en Vercel

1. Sube el repositorio y crea el proyecto en Vercel con el directorio raíz de esta carpeta.
2. Framework: Next.js. No hace falta comando de build distinto.
3. Añade las variables de entorno de producción.
4. En Resend, verifica el dominio del `CONTACT_FROM_EMAIL`.
5. Cuando tengas el dominio real, ponlo en `NEXT_PUBLIC_SITE_URL`.
6. En Search Console, verifica con la meta tag y envía `https://tu-dominio/sitemap.xml`.

## Analítica

Analytics solo se carga si hay `NEXT_PUBLIC_GA_ID` y la persona acepta en el banner. Eventos:

- `click_llamar`
- `click_whatsapp`
- `generate_lead` al enviar el formulario con éxito

## Rutas

Inicio, servicios y una página por servicio, platos y ficha, sobre nosotros, zonas y una landing por localidad activa, preguntas frecuentes, contacto, gracias, blog, datos clave, aviso legal, privacidad, cookies, 404, `sitemap.xml`, `robots.txt`, `/llms.txt` y `/llms-full.txt`.
