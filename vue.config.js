module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/assets/scss/_user.scss";
            @import "@/assets/scss/_user-variables.scss";
            @import "@/assets/scss/theme.scss";
            @import "@/assets/scss/theme-dark.scss";
          `
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000/',
        pathRewrite: {'^/api/': ''}
      }
    }
  }
};