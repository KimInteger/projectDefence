const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

class CustomPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('CustomPlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).alterAssetTagGroups.tapAsync(
        'CustomPlugin',
        (data, cb) => {
          data.headTags = data.headTags.filter(
            (tag) => tag.tagName !== 'script',
          );
          data.bodyTags = data.bodyTags.filter(
            (tag) => tag.tagName !== 'script',
          );

          const scriptTag = {
            tagName: 'script',
            voidTag: false,
            attributes: {
              type: 'text/javascript',
            },
            innerHTML: compilation.assets['bundle.js'].source(),
          };

          data.bodyTags.push(scriptTag);

          delete compilation.assets['bundle.js'];

          cb(null, data);
        },
      );
    });
  }
}

module.exports = {
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new CustomPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
