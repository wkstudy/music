import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import legacy from '@vitejs/plugin-legacy';
import path from 'path';
import proxy from './proxy';
const chalk = require("chalk");


const rd = process.env.npm_config_rd || 'default'
console.log(chalk.blue("连接代理服务端： ") + chalk.cyan(rd) + '  ' + chalk.green(proxy[rd]));
// https://vitejs.dev/config/
export default defineConfig({
  base: '/music',
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
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
  ],
  resolve: {
    // alias: {
    //   '@': path.resolve(__dirname, 'src'),
    //   '@api': path.resolve(__dirname, 'src/api'),
    //   '@utils': '/src/utils',
    //   '@assets': path.resolve(__dirname, 'src/assets')
    // },
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '@api',
        replacement: path.resolve(__dirname, 'src/api'),
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, 'src/utils'),
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets'),
      }
    ],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.d.ts']
  },
  server: {
    cors: true,
    proxy: {
      "/api/": {
        rewrite: (path) => path.replace(/^\/api/, ''),
        target: proxy[rd],
        changeOrigin: true
      },
    }
  }
})
