const title = 'WEB FRONTEND BLOG'
const description = 'フロントエンドでなんとかがんばっていくブログ'
const url = 'https://oi-tech.blog/'
const ogImage = `${url}/assets/image/ogp.jpg`

import axios from 'axios'
require('dotenv').config();
const { API_KEY } = process.env;

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title,
    //title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'ogTitle', property: 'og:title', content: title },
      { hid: 'ogType', property: 'og:type', content: 'website' },
      { hid: 'ogUrl', property: 'og:url', content: url },
      {
        hid: 'ogImage',
        property: 'og:image',
        content: ogImage
      },
      { property: 'og:site_name', content: title },
      {
        hid: 'ogDescription',
        property: 'og:description',
        content: description
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitterSite', name: 'twitter:site', content: title },
      { hid: 'twitterUrl', name: 'twitter:url', content: url },
      { hid: 'twitterTitle', name: 'twitter:title', content: title },
      {
        hid: 'twitterDescription',
        name: 'twitter:description',
        content: description
      },
      {
        hid: 'twitterImage',
        name: 'twitter:image:src',
        content: ogImage
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', moduleshref: '/favicon.ico' }
    ]
  },
  privateRuntimeConfig: {
    apiKey: API_KEY
  },
  publicRuntimeConfig: {
    apiKey: process.env.NODE_ENV !== 'production' ? API_KEY : undefined
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#63b3ed' },
  // loading: false,
  /*
  ** Global CSS
  */
  css: ['@/assets/scss/index.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/day.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-179553169-1' //自身のアナリティクスコード
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    '@nuxtjs/dotenv'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** styleResources
  ** 
  */
 styleResources: {
    scss: [
      '@/assets/scss/core/mixins.scss',
      '@/assets/scss/core/variables.scss',
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  env: {
    API_KEY
  },
  webfontloader: {
    google: {
      families: ['Roboto:ital,wght@1,700Sans']
    }
  },
  generate: {
    async routes() {
      const pages = await axios
        .get('https://oipon.microcms.io/api/v1/posts?limit=100', {
          headers: { 'X-API-KEY': 'e885d50d-8291-48d1-9664-d5cbbc4c3982' }
        })
        .then((res) =>
          res.data.contents.map((content) => ({
            route: `/${content.id}`,
            payload: content
          }))
        )
      const categories = await axios
        .get("https://oipon.microcms.io/api/v1/categories", {
          headers: { 'X-API-KEY': 'e885d50d-8291-48d1-9664-d5cbbc4c3982' }
        })
        .then(res => {
          return res.data.contents.map(category => {
            return "/category/" + category.id;
          })
        })
        return Promise.all([pages, categories]).then(values => {
          return values.join().split(",");
        })
    }
  }
}
