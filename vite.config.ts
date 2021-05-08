import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@util': '/src/util',
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  },
  server: {
    cors: true,
  }
})
