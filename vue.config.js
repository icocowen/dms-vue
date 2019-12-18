module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8086', //对应自己的接口
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
     },
  }