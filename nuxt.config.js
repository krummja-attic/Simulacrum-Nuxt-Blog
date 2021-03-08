export default {
  target: 'static',
  head: {
    title: 'simulacrum',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=PT+Serif&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Caveat&display=swap'
      }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML' },
      { src: 'https://d3js.org/d3.v6.min.js' },
      { src: '//unpkg.com/graphre/dist/graphre.js' },
      { src: '//unpkg.com/nomnoml/dist/nomnoml.js' }
    ]
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  modules: [
      '@nuxt/content'
  ],
  content: {
    markdown: {
      remarkPlugins: ['remark-footnotes']
    }
  },
  build: {
    extend (config, { isDev, isClient }) {
      config.node = {
        fs: 'empty'
      }
    }
  }
}
