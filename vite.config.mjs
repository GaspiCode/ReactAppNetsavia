import { defineConfig } from 'vite';

export default defineConfig({
  root: './src/public', 
  base: '/',
  build: {
    outDir: 'dist', 
    assetsDir: 'assets', 
    sourcemap: true,
  },
  server: {
    port: 8080,
    open: false, 
    proxy: {
      '/api': {
        target: 'http://localhost:8080', 
        changeOrigin: true, 
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
