export default defineNuxtConfig({
  ssr: false,
  devServer: {},
  typescript: {
    strict: false,
    typeCheck: true
  },
  components: {
    dirs: [
      {
        path: "~/components/global",
        global: true,
        pathPrefix: false
      }
    ]
  },
  css: ["@/css/application.css", "@/scss/application.scss"],

  webpack: {
    cssSourceMap: true,
    loaders: {
      scss: {
        sourceMap: true
      }
    }
  },

  sourcemap: {
    server: true,
    client: true
  },

  dev: true,

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  modules: [
    // "nuxt-typed-router"
    "@pinia/nuxt"
  ],

  plugins: []
});
