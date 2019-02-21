const path = require('path')

module.exports = {
  publicPath: '',
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
    if (process.env.NODE_ENV === 'production') {
      // Ensure that webpack doesn't consider the main app source code part of the 'vendors' chunk,
      // otherwise this produces a non-working production build.
      config.optimization.get ('splitChunks').cacheGroups.vendors.test =
        /[\\/]node_modules[\\/](?!so-project-src)/
    }
    // Set process.env.IS_WEB to true. This avoids the import of a non-existent module.
    config
      .plugin('define')
      .tap (args => {
        args[0]['process.env']['IS_WEB'] = true
        return args
      })
    // Remove relative `node_modules` resolution as this causes issue when developing locally
    // using `npm link` / `yarn link`.
    config.resolve.modules.delete('node_modules')
    // Finally, intercept the original `exclude` function of the `js` target and whitelist the
    // source code in node_module to allow proper compilation.
    const ruleExcludes = config.module.rule ('js').exclude
    const origExcludesFn = ruleExcludes.values().shift()
    ruleExcludes.clear().add (filepath => {
      return !/so-project-src/.test (filepath) && origExcludesFn (filepath)
    })
  }
}
