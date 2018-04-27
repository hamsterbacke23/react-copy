const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            plugins: ['transform-class-properties'],
            presets: ['env', 'react']
          }
        }
      }
    ]
  },
  externals: {
    react: 'commonjs react'
  }
};

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|build)/,
        use: {
          loader: 'babel-loader',
          query: {
            plugins: ['transform-class-properties'],
            presets: ['env', 'react']
          }
        }
      }
    ]
  },
  // resolve: {
  //   alias: {
  //     react: path.resolve(__dirname, './node_modules/react'),
  //     'react-dom': path.resolve(__dirname, './node_modules/react-dom')
  //   }
  // },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM'
    },
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'prop-types',
      root: 'PropTypes'
    }
  }
};
