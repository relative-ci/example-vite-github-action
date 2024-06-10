import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { webpackStats } from 'rollup-plugin-webpack-stats';

export default defineConfig((env) => ({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
  plugins: [
    react(),
    // Output webpack-stats.json file
    webpackStats(),
  ],
}));
