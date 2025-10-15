// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    'nuxt-aos'
  ],
  app: {
    head: {
      title: ''
    }
  },

  googleFonts: {
    families: {
      'Jacques Francois': [400],
      'Alex Brush': [400],
    },
    display: 'swap',
  },
})