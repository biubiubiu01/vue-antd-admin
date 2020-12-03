const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

function resolve(dir) {
  return path.join(__dirname, dir);
}

// const cdn = {
//   css: ['https://cdn.bootcdn.net/ajax/libs/ant-design-vue/1.6.5/antd.min.css'],
//   js: [
//     'https://cdn.bootcdn.net/ajax/libs/echarts/4.8.0/echarts.min.js',
//     'https://cdn.bootcdn.net/ajax/libs/axios/0.21.0/axios.min.js',
//     'https://cdn.bootcdn.net/ajax/libs/vue-router/3.2.0/vue-router.min.js',
//     'https://cdn.bootcdn.net/ajax/libs/vuex/3.5.1/vuex.min.js',
//     'https://cdn.bootcdn.net/ajax/libs/ant-design-vue/1.6.5/antd.min.js',
//     'https://cdn.jsdelivr.net/npm/echarts-wordcloud@1.1.3/dist/echarts-wordcloud.min.js',
//     'https://cdn.jsdelivr.net/npm/echarts-liquidfill@2.0.6/dist/echarts-liquidfill.min.js',
//     'https://cdn.jsdelivr.net/npm/vue-count-to@1.0.13/dist/vue-count-to.min.js',
//     'https://cdn.jsdelivr.net/npm/kriging@0.1.12/dist/kriging.js'
//   ]
// };

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
    externals: {},
    plugins: [
      new HappyPack({
        id: 'happyBabel',
        loaders: ['babel-loader?cacheDirectory=true'],
        threadPool: happyThreadPool
      })
    ]
  },
  chainWebpack(config) {
    config.plugins.delete('prefetch');
    config.plugins.delete('preload');
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
            chunks: 'initial'
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

      config.plugin('CompressionWebpackPlugin').use(CompressionWebpackPlugin, [
        {
          algorithm: 'gzip',
          test: /\.js$|\.css/, //匹配文件名
          threshold: 10240, //对超过10k的数据压缩
          minRatio: 0.8
        }
      ]);
      if (process.env.npm_config_report) {
        config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
      }
    });
  }
};
