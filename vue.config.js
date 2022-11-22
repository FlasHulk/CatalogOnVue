const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	publicPath: '/CatalogOnVue/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "~@/assets/styles/global.scss";',
      },
    },
  },
})

