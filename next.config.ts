import type { NextConfig } from "next";

// Exportación estática: `npm run build` genera la carpeta `out/`, que se sube tal cual
// a cualquier hosting. La redirección de /servicios/eventos está en public/.htaccess.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
