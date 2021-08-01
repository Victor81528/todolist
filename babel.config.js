module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/專案名稱/'
    : '/'
}
