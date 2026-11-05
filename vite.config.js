import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// Preload the self-hosted Rubik fonts so they're ready by first paint. Without this the
// browser only discovers them after parsing the CSS, so text first renders in the fallback
// font and then visibly resizes when Rubik swaps in.
const preloadFonts = () => ({
  name: 'preload-fonts',
  apply: 'build',
  transformIndexHtml: {
    order: 'post',
    handler(html, {bundle}) {
      if (!bundle) return html
      return Object.keys(bundle)
        .filter((file) => /rubik-latin-(400|700)-normal-.*\.woff2$/.test(file))
        .map((file) => ({
          tag: 'link',
          attrs: {rel: 'preload', href: `/${file}`, as: 'font', type: 'font/woff2', crossorigin: ''},
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
