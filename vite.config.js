import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import webpackStatsPlugin from 'rollup-plugin-webpack-stats';
import { rollupStats } from 'rollup-plugin-stats';

export default defineConfig((env) => ({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
        manualChunks(id) {
          if (id.includes('react-markdown')) {
            return 'react-markdown';
          }
        },
      },
    },
  },
  plugins: [
    react(),
    // Output webpack-stats.json file
    webpackStatsPlugin(),
    // Output stats.json file
    rollupStats(),
  ],
}));
