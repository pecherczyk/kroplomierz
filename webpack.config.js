const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 9000,
    watchFiles: ['src/*']
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      title: 'Development'
    })
  ],

  module: {
    rules: [
      {
        test: /.ts$/,
        include: [path.resolve(__dirname, './src')],
        use: 'ts-loader'
      },
      {
        test: /.js$/,
        include: [path.resolve(__dirname, './src')],
        use: [
          'babel-loader',
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  }
}
