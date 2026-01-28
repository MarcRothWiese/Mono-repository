import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

const uiSrc = fileURLToPath(new URL('../../packages/ui-components/src', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@ui': uiSrc,
    },
  },
})
