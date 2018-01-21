const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            plugins: [
              'transform-class-properties',
            ],
            presets: [
              'env',
              'react',
            ],
          },
        },
      },
    ],
  },
  externals: {
    react: 'commonjs react',
  },
};
