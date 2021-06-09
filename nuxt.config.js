export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "temsib",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/ten10.png" },
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
  ssr: false,
  target: "static",
  server: {
    port: 8000,
  },
  css: [
    "bootstrap-vue/dist/bootstrap-vue.css",
    "~/assets/css/style.css",
    // "~/assets/css/new-style.css",
    "~/assets/css/animate.css",
  ],

  components: true,

  buildModules: [],

  plugins: [
    { src: "~plugins/bootstrap-vue.js", mode: "client" },
    { src: "~/plugins/axios.js", mode: "client" },
    // { src: '~/plugins/lightweightcharts.js', ssr: false},
    // { src: "~/plugins/vue-toast-notification.js", mode: "client" },
    { src:"~/plugins/axios.client.js", mode: "client"},
  ],
  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
     "@nuxtjs/proxy",
  ],
  bootstrapVue: {
    icons: true,
  },
  build: {},
  axios: {
     //proxy: true,
   baseURL:'https://mike.orangeworkshop.info/temsib'
   },

   proxy: {
     "/api/": "http://mike.orangeworkshop.info/temsib",
  },
  auth: {
     localStorage: false,
    strategies: {
      local: {
        endpoints: {
          // login: { url: "/api/v1/auth/login", method: "post", propertyName: "access_token" },
          login: { url: "/api/v1/auth/login", method: "post", propertyName: "access_token" },
          user: { url: "/api/v1/auth/me", method: "post", propertyName: "user" },
          logout: false,
      // logout: { url: "/api/logout", method: "post" },
        },
      },
    },
    redirect: {
      login: "/login",
    },
    tokenName: "auth-token"
  },
}
