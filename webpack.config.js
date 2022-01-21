const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dist = path.resolve(__dirname, 'dist');

module.exports = (env) => {
  return {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    mode: env.production ? 'production' : 'development',
    devServer: {
      contentBase: dist,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: path.resolve(__dirname, 'src'),
          use: 'ts-loader',
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: [ '@svgr/webpack' ],
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
      filename: 'index.js',
      path: dist,
      publicPath: '/',
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        filename: 'index.html',
        favicon: 'src/images/favicon.ico',
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'public/images', to: 'images' },
        ],
      }),
    ],
  };
};
