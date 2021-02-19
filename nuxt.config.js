export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "sos",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Kanit:200,300,400,500,600",
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
    ],

    script: [
      {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js",
        type: "text/javascript",
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
        type: "text/javascript",
      },

      {
        src:
          "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
        type: "text/javascript",
      },
    ],
  },
  server: {
    port: 80,
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "bootstrap-vue/dist/bootstrap-vue.css",
    "~/assets/css/style.css",
    "~/assets/css/animate.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~plugins/app.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
  ],
  bootstrapVue: {
    icons: true,
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL : "https://api.bitkub.com"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // auth: {
  //   strategies: {
  //     local: {
  //       token: {
  //         property: 'token',
  //         // required: true,
  //         // type: 'Bearer'
  //       },
  //       user: {
  //         property: 'user',
  //         // autoFetch: true
  //       },
  //       endpoints: {
  //         login: { url: '/api/auth/login', method: 'post' },
  //         logout: { url: '/api/auth/logout', method: 'post' },
  //         user: { url: '/api/auth/user', method: 'get' }
  //       }
  //     }
  //   }
  // },
  auth: {
    auth: {
      redirect: {
        login: '/login',
        // logout: '/',
        // callback: '/login',
        // home: '/'
      }
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "https://api/sign_in", //link sign_in
            method: "post",
            propertyName: "modal.name",
          },
          logut: {
            url: "https://api/sign_out",//link sign_out
            method: "delete",
          },
          user: {
            url : "https://api/result",// result
            method: 'get',
            propertyName: "modal"
          },
        },
        // tokenName: "Authorization"
      },
    },
  },
}
