const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const HappyPack = require('happypack');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  productionSourceMap: false,
  outputDir: 'dist',
  publicPath: './',
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    port: 8999,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    before: process.env.NODE_ENV == 'development' ? require('./mock/mock-server.js') : ''
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/styles/variables.scss";`
      }
    }
  },
  configureWebpack: {
    name: process.env.VUE_APP_BASE_NAME,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css/, //匹配文件名
        threshold: 10240, //对超过10k的数据压缩
        minRatio: 0.8
      })
    ],
    externals: {}
  },
  chainWebpack(config) {
    // 设置svg
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();

    //设置开发环境sourceMap
    config.when(process.env.NODE_ENV === 'development', config => config.devtool('cheap-source-map'));
    //生产环境
    config.when(process.env.NODE_ENV !== 'development', config => {
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial' // only package third parties that are initially dependent
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          }
        }
      });
      config.optimization.runtimeChunk('single');
    });

    config.plugin('HappyPack').use(HappyPack, [
      {
        loaders: [
          {
            loader: 'babel-loader?cacheDirectory=true'
          }
        ]
      }
    ]);
  }
};
