import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        wild: resolve(__dirname, 'index.html'),
        summit: resolve(__dirname, 'summit.html'),
        weekend: resolve(__dirname, 'weekend.html'),
      },
    },
  },
});
