const path=require("path")
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app:{
    baseURL: '/nuxt-github-pages/'
  },
  // nitro:{
  //   output:{
  //     publicDir:path.join(__dirname,'docs')
  //   }
  // }
})
