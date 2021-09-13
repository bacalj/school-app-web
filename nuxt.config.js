export default {
  target: 'static',

  head: {
    title: 'campusschool.tech',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [],

  plugins: [
    { src: '@plugins/groqs.js' }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sanity/module'
  ],

  modules: [
    '@nuxtjs/firebase',
  ],

  build: {
  },

  googleFonts: {
    families: {
      Audiowide: true,
    }
  },

  firebase: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID
    },
    onFirebaseHosting: false,
    terminateDatabasesAfterGenerate: true,
    services: {
      auth: {
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChanged',
          subscribeManually: false
        }
      },
      firestore: {
        enablePersistence: {
          synchronizeTabs: true
        },
      }
    }
  },

  privateRuntimeConfig: {
    sanity: {
      token: process.env.SANITY_TOKEN,
      withCredentials: true
    },
  },

  sanity: {
    projectId: process.env.SANITY_PROJECT
  },

  generate: {
    fallback: true
  },
}
