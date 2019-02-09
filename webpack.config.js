function getStyleUse(bundleFilename) {
  return [
    {
      loader: 'file-loader',
      options: {
        name: bundleFilename,
      },
    },
    { loader: 'extract-loader' },
    { loader: 'css-loader' },
    {
      loader: 'sass-loader',
      options: {
        includePaths: ['./node_modules'],
      }
    },
  ];
}
var NgrockWebpackPlugin = require('ngrock-webpack-plugin')

module.exports = [
  {
    entry: './login.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      path: __dirname + '/dist',
      filename: 'style-bundle-login.js',
    },
    module: {
      rules: [{
        test: /login.scss$/,
        use: getStyleUse('bundle-login.css')
      }]
    },
    devServer: {
            hot: true,
            inline: true,
            headers: {'Access-Control-Allow-Origin': '*'},
            historyApiFallback: {
                index: 'http://localhost:8080/login.html'
            }
        },
        plugins: [new NgrockWebpackPlugin()]
  },
  {
    entry: './hostjoin.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle-hostjoin.js',
    },
    module: {
      rules: [{
        test: /hostjoin.scss$/,
        use: getStyleUse('bundle-hostjoin.css')
      }]
    },
  },
  {
    entry: './game.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle-game.js',
    },
    module: {
      rules: [{
        test: /game.scss$/,
        use: getStyleUse('bundle-game.css')
      }]
    },
  },
  {
    entry: './postgame.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle-postgame.js',
    },
    module: {
      rules: [{
        test: /postgame.scss$/,
        use: getStyleUse('bundle-postgame.css')
      }]
    },
  },
  {
    entry: "./login.js",
    output: {
      filename: "bundle-login.js"
    },
    module: {
      loaders: [{
        test: /login.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  },
  {
    entry: "./game.js",
    output: {
      filename: "bundle-game.js"
    },
    module: {
      loaders: [{
        test: /game.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  },
  {
    entry: "./hostjoin.js",
    output: {
      filename: "bundle-hostjoin.js"
    },
    module: {
      loaders: [{
        test: /hostjoin.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  },
  {
    entry: "./postgame.js",
    output: {
      filename: "bundle-postgame.js"
    },
    module: {
      loaders: [{
        test: /postgame.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  }
];
