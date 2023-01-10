import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { webpackStats } from 'rollup-plugin-webpack-stats';

export default defineConfig((env) => ({
  plugins: [
    react(),
    // Output webpack-stats.json file
    webpackStats(),
  ],
}));
