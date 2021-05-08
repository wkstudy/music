module.exports = {
  plugins: {
    // autoprefixer 里什么都不传的话不生效
    'autoprefixer': {
      "overrideBrowserslist": [
        "defaults",
        "not ie < 11",
        "last 2 versions",
        "> 1%",
        "iOS 7",
        "last 3 iOS versions"
      ]
    },
    // 本次没有ui图，所以这里不使用了，但实测是有效的
    // 'postcss-pxtorem': {
    //   rootValue: 75, 
    //   unitPrecision: 5, 
    //   propList: ['*', '!font-size', '!line-height'],
    //  exclude: /node_modules/i
    // }
  }
}