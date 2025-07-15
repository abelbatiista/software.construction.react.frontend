import path from 'path';
import { fileURLToPath } from 'url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@core': path.resolve(__dirname, './src/app/core'),
      '@features': path.resolve(__dirname, './src/app/features'),
      '@miscellaneous': path.resolve(__dirname, './src/app/miscellaneous'),
      '@ui': path.resolve(__dirname, './src/app/ui'),
      '@auth': path.resolve(__dirname, './src/app/features/auth'),
      '@exception': path.resolve(__dirname, './src/app/features/exception'),
      '@pages': path.resolve(__dirname, './src/app/features/pages'),
    },
  },
});
