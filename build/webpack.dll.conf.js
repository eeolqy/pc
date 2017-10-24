const path = require('path');
const webpack = require('webpack');
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: {
    vendor: ['vue','vue-router','vuex','element-ui']
  },
  output: {
    path: path.join(__dirname, '../static/vendor'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../static/vendor', '[name]-manifest.json'),
      name: '[name]_library'
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
};


