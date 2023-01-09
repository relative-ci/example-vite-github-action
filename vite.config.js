import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { webpackStats } from 'rollup-plugin-webpack-stats';

export default defineConfig((env) => {
  console.log(env);

  return {
    plugins: [
      react(),
      webpackStats(),
    ],
  };
});
