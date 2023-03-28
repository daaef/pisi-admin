export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      theme: 'light',
      'data-theme': 'light'
    },
    titleTemplate: '%s - admin',
    title: 'admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/style.scss',
    'viconly/src/iconly/style.css',
    'viconly/src/iconly/bulk-style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/iconly.js' },
    { src: '~/plugins/repository' },
    { src: '~/plugins/services.plugin.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dayjs',
    '@nuxtjs/toast'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL,
    progress: false,
    debug: false,
    headers: {
      'Content-type': 'application/json',
      common: {
        Accept: 'application/json, text/plain, */*'
      }
    }
  },
  toast: {
    position: 'top-center',
    register: [
      // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },

  auth: {
    strategies: {
      local: {
        user: {
          property: 'data.user',
          autoFetch: true
        },
        endpoints: {
          login: { url: '/auth/sign-in', method: 'post' },
          logout: false,
          user: { url: '/user' }
        },
        token: {
          property: 'data.accessToken',
          maxAge: 1800
        }
      }
    },
    redirect: {
      login: '/',
      logout: '/',
      home: '/dashboard'
    },
    fullPathRedirect: true
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  pageTransition: {
    name: 'my-page',
    mode: 'out-in',
    beforeEnter(el) {
      console.log('Before enter...', el)
    }
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#2936AC',
          accent: '#042343',
          secondary: '#202020',
          info: '#547FC9',
          warning: '#FF8F6B',
          error: '#E51919',
          success: '#05A753'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  router: {
    middleware: ['auth']
  },
  build: {
    transpile: ['defu']
  }
}
