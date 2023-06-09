const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const deps = require("./package.json").dependencies;

module.exports = {
  mode: "development",
  entry: "./src/index",

  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3004,
    historyApiFallback: true,
    hot: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers':
            'X-Requested-With, content-type, Authorization',
    },
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env','@babel/preset-react'] },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'reactModuleApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Sample': './src/bootstrap.js',
        "./Counter": "./src/components/Counter.js"
      },
      shared: {
        ...deps,
        react: { singleton: true }, "react-dom": { singleton: true }
      },
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      chunks: ['main'],
    }),
    new ExternalTemplateRemotesPlugin(),
  ],
};