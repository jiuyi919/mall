module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: ['ignore'],
      minPixelValue: 1,
      mediaQuery: false,
      exclude: [/TabBar/], // 不需要转化的文件，里面是正则表达式方式匹配
    }
  }
}
