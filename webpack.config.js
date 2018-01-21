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
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          query: {
            plugins: [
              'transform-class-properties',
            ],
            presets: [
              'es2015',
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
