import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// Preload the self-hosted Rubik fonts so they're ready by first paint. Without this the
// browser only discovers them after parsing the CSS, so text first renders in the fallback
// font and then visibly resizes when Rubik swaps in. This runs for the dev server too, where
// the CSS is injected by JS and the fonts would otherwise be found even later.
const preloadFonts = () => ({
  name: 'preload-fonts',
  transformIndexHtml: {
    order: 'post',
    handler(html, {bundle}) {
      const files = bundle
        ? Object.keys(bundle)
            .filter(file => /rubik-latin-(400|700)-normal-.*\.woff2$/.test(file))
            .map(file => `/${file}`)
        : // The dev server serves the fontsource files straight from node_modules.
          [400, 700].map(weight => `/node_modules/@fontsource/rubik/files/rubik-latin-${weight}-normal.woff2`)
      return files.map(href => ({
        tag: 'link',
        attrs: {rel: 'preload', href, as: 'font', type: 'font/woff2', crossorigin: ''},
        injectTo: 'head',
      }))
    },
  },
})

export default defineConfig({
  plugins: [react(), preloadFonts()],
  css: {
    preprocessorOptions: {
      // Silence Dart Sass deprecation warnings for the existing @import-based styles.
      scss: {silenceDeprecations: ['import', 'global-builtin']},
    },
  },
})
