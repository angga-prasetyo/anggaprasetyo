import path from 'path';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { compression } from 'vite-plugin-compression2';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    optimizeDeps: {
      include: [
        'react-router-dom',
        'three',
        '@react-three/fiber',
        '@react-three/drei',
      ],
    },
    plugins: [react(), tailwindcss(), svgr(), ViteImageOptimizer(), compression({
      algorithm: 'brotliCompress',
      exclude: [/\.(br)$/, /\.(gz)$/],
    }), cloudflare()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      dedupe: ['three'],
    },
    server: {
      port: 3000,
      open: true,
    },
    preview: {
      port: 3000,
      open: true,
    },
    build: {
      minify: 'esbuild',
      outDir: './build',
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (
                id.includes('react/') ||
                id.includes('react-dom/') ||
                id.includes('react-router')
              ) {
                return 'vendor-react';
              }
              if (id.includes('@tanstack')) {
                return 'vendor-query';
              }
            }
          },
        },
      },
    },
    test: {
      setupFiles: './src/setupTests.ts',
      environment: 'jsdom',
      globals: true,
      testTimeout: 30000,
      hookTimeout: 30000,
      exclude: ['**/node_modules/**', '**/e2e/**'],
      coverage: {
        exclude: ['**/assets/**', '**/*.scss', '**/*.css'],
        reportsDirectory: './coverage',
      },
      server: {
        deps: {
          inline: ['rc-*'],
        },
      },
    },
  });
};