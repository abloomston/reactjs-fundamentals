var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
var webpack = require('webpack');
var GithubCredentialsPlugin = new webpack.DefinePlugin({
  GITHUB_CLIENT_ID: JSON.stringify(process.env.GITHUB_CLIENT_ID || 'CLIENT_ID'),
  GITHUB_CLIENT_SECRET: JSON.stringify(process.env.GITHUB_CLIENT_SECRET || 'CLIENT_SECRET')
});
module.exports = {
  entry: [
    './app/index.jsx'
  ],
  module: {
    loaders: [
      {test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.css$/, loader: "style-loader!css-loader"}
    ]
  },
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/dist'
  },
  plugins: [HTMLWebpackPluginConfig, GithubCredentialsPlugin]
};
