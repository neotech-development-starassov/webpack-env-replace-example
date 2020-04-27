module.exports = {
    chainWebpack(config) {
        
        if (!process.env.VUE_APP_LAYOUT_PHONE) {
        config.module
      .rule('vue')
      .use('string-replace-loader')
        .loader('string-replace-loader')
        .tap(options => {
          // modify the options...
            return {
                search: 'process.env.VUE_APP_LAYOUT_PHONE',
                replace: 'false',
                flags: 'g'
                
            }
        })
    }
    }
}