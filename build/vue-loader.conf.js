var path = require('path')
var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  })
  // postcss: function postcss(pack) {
  //   return [
  //     require('postcss-import')({
  //       path: path.join(__dirname, '../src/styles'),
  //           // use webpack context
  //       addDependencyTo: pack
  //     }),
  //     // require('autoprefixer')({
  //     //     browsers: ['last 10 versions']
  //     // }),
  //     // require('postcss-salad')({
  //     //     browsers: ['ie > 8', 'last 2 versions'],
  //     //     features: {
  //     //         bem: {
  //     //             shortcuts: {
  //     //                 component: 'b',
  //     //                 modifier: 'm',
  //     //                 descendent: 'e'
  //     //             },
  //     //             'separators': {
  //     //                 'descendent': '__',
  //     //                 'modifier': '--'
  //     //             }
  //     //         }
  //     //     }
  //     // }),
  //     require('precss'),
  //     require('postcss-url')({
  //       basePath: path.join(__dirname, '../src/static')
  //     }),
  //     require('postcss-cssnext')({
  //       // see: https://github.com/ai/browserslist#queries
  //       browsers: 'Android >= 4, iOS >= 7',
  //       features: {
  //         customProperties: {
  //             variables: require(path.join(__dirname, '../src/styles/variables'))
  //           }
  //       }
  //     })
  //   ]
  // },
  // autoprefixer: true
}
