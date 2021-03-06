const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const PrerendererWebpackPlugin = require('../../index.js')
const Renderer = require('@prerenderer/renderer-puppeteer')

module.exports = {
  entry: [ './src/main.js' ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: 'src/static',
      to: '.'
    }]),
    new PrerendererWebpackPlugin({
      staticDir: path.join(__dirname, 'dist'),
      outputDir: path.join(__dirname, 'prerendered'),
      routes: [ '/', '/about', '/some/deep/nested/route' ],

      renderer: new Renderer({
        inject: {
          foo: 'bar'
        }
      })
    })
  ]
}
