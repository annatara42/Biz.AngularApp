const { AngularCompilerPlugin } = require('@ngtools/webpack');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    storageexplorer: './src/index.ts'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
      extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        loader: '@ngtools/webpack'
      },
      {
        test: /\.(s*)css$/,
        use: ['to-string-loader', 'style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        use: [ {
          loader: 'html-loader',
          options: {
            minimize: true,
            caseSensitive: true
          }
        }]
      },
      {
        test: /[\/\\]@angular[\/\\]core[\/\\].+\.js$/,
        parser: { system: true }
      }
    ]
  },
  plugins: [
    new AngularCompilerPlugin({
      tsConfigPath: path.resolve(__dirname, 'tsconfig.json'),
      sourceMap: true,
      skipCodeGeneration: true
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  }
};