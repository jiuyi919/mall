module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'store': '@/store',
        'views': '@/views',
        'common': '@/common'
      }
    }
  }
}
