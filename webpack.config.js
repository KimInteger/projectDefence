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

const entryPoint = 'app';

module.exports = {
  entry: `./frontend/src/${entryPoint}.ts`,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // 순서 중요 css가 읽히고 style이 읽혀야 한다. script화 이후 DOM으로 넣어주기
      },
      {
        test: /\.(js|jsx|ts|tsx)$/, // 자스인지 확인할 거야.
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx$/, // 타스인지 확인할 거야.
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/static/index.html',
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
