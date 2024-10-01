import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import postcssPresetEnv from 'postcss-preset-env' // importar esto

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv({
          stage: false,
          features: {
            'nesting-rules': true,
            'custom-media-queries': true
            /**
             * "blank-pseudo-class": false,
             * "focus-visible-pseudo-class": false,
             * "focus-within-pseudo-class": false,
             * "has-pseudo-class": false,
             * "prefers-color-scheme-query": false
             */
          }
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
