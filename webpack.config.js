const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry:  {
    main: './src/main.js',
  },
  output: {
    filename: './src/[name].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html', filename: 'src/index.html' }), 
    new CopyPlugin({
      patterns: [
        { from: './manifest.json' },
        { from: './src/js/dist/twemoji.min.js', to: './src/js/dist/twemoji.min.js' },
        { from: './src/assets', to: './src/assets' },
      ],
    }),
  ],
};