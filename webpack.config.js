const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
})

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  plugins: [HtmlWebpackPluginConfig],

    //setup rules here
  module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.(scss|css)$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ],

    },

  devServer: {
    static: {
      publicPath: '/build/',
    },

  port: 8080,

  //proxy server setup
  proxy: {
    '/api': 'http://localhost:3000',
  }
  },

  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
  }

}