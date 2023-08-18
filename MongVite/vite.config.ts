import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
  ],
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:5173'
    }
  },
  build: {
    target: 'esnext',
  },
});