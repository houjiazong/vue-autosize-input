module.exports = {
  publicPath: './',
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
  // 修改 src 目录 为 examples 目录
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
}
