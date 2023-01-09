import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    eslint({
      cache: false,
      include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
      exclude: ['node_modules'],
    }),
  ],
  resolve: {
    alias: [
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm-bundler.js', // compile template
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
      {
        find: '@config',
        replacement: path.resolve(__dirname, './config/index.ts'),
      },
    ],
    extensions: ['.ts', '.js'],
  },
  server: {
    proxy: {
      '/sys': {
        // target: 'http://www.zxietong.com:82',
        // target: 'http://localhost:8080',
        target: 'http://192.168.0.88',
        changeOrigin: true,
      },
    },
    cors: true,
  },
})
