import { messages } from './locales/index'

export default defineNuxtConfig({
  modules: [
    // https://pinia.vuejs.org/zh/ssr/nuxt.html
    '@pinia/nuxt',
    [
      '@nuxtjs/i18n',
      {
        locales: ['en', 'tw'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages
        }
      }
    ]
  ],
  typescript: {
    shim: false,
    typeCheck: true, // 類型檢查
    strict: true // greater safety
  },
  css: [
    // bootstrap5
    'bootstrap/dist/css/bootstrap.css',
    'vuetify/lib/styles/main.sass',
    '@/assets/scss/main.scss'
  ],
  plugins: [
    // bootstrap5
    { src: '@/plugins/bootstrap.ts', mode: 'client' },
    '@/plugins/vuetify.ts'
  ],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_colors.scss" as *;'
        }
      }
    },
    define: {
      'process.env.DEBUG': false
    }
  }
})
