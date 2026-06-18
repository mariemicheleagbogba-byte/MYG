// import tailwindcss from '@tailwindcss/vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';
// import { defineConfig } from 'vite';

// export default defineConfig(() => {
//   return {
//     plugins: [react(), tailwindcss()],
//     resolve: {
//       alias: { '@': path.resolve(__dirname, '.') },
//     },
//     server: {
//       allowedHosts: 'all',   // ← Railway fix
//       hmr: process.env.DISABLE_HMR !== 'true',
//       watch: process.env.DISABLE_HMR === 'true' ? null : {},
//     },
//   };
// });



// /// <reference types="node" />
// import tailwindcss from '@tailwindcss/vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';
// import { defineConfig } from 'vite';

// export default defineConfig(() => {
//   return {
//     plugins: [react(), tailwindcss()],
//     resolve: {
//       alias: { '@': path.resolve(__dirname, '.') },
//     },
//     server: {
//       allowedHosts: 'all',   // ← Railway fix
//       hmr: process.env.DISABLE_HMR !== 'true',
//       watch: process.env.DISABLE_HMR === 'true' ? null : {},
//     },
//   };
// });

/// <reference types="node" />
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: { '@': path.resolve(__dirname, '.') },
    },
    server: {
      // Configuration corrigée pour les types stricts de ta version de Vite
      allowedHosts: ['.railway.app'], 
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});