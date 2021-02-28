const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let mode = 'development';
let target = 'web'; //fix for live reload
const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }), 
]

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist';
} else {
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  mode: mode,
  target: target,

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'img/[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        // optional
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024,

        //   }
        // }
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, 
            options: {
              publicPath: ""
            },
          },
          'css-loader', 
          'postcss-loader', 
          // sass-loader should be at the bottom
          'sass-loader'
        ],
      },
      { 
        test: /\.jsx?$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },

  plugins: plugins,

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};