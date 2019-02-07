const path = require('path')

module.exports = {
  configureWebpack: {
    entry: {
      app: './node_modules/so-project-src/src/main.js'
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, './node_modules/so-project-src/src')
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin('define')
      .tap (args => {
        args[0]['process.env']['IS_WEB'] = true
        return args
      })
    const ruleExcludes = config.module.rule ('js').exclude
    const origExcludesFn = ruleExcludes.values().shift()
    ruleExcludes.clear().add (filepath => {
      return !/so-project-src/.test (filepath) && origExcludesFn (filepath)
    })
  }
}
