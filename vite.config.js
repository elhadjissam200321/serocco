import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        packages: resolve(__dirname, 'pages/packages.html'),
        faq: resolve(__dirname, 'pages/faq.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
        reservation: resolve(__dirname, 'pages/reservation.html'),
      },
    },
  },
  server: {
    port: 3000
  }
});
