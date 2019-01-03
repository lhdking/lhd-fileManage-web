import pageRouters from './router.config';
import webpackplugin from './plugin.config';
export default {
    //umi的设置
    plugins: [
        ['umi-plugin-react', {
            //引用ant desgin 组件
            antd: true,
            //应用dva
            dva: {
                hmr: true,
            },
            //实现路由级的动态加载（code splitting），可按需指定哪一级的按需加载 页面初始化的时候 有个转圈的过程
            dynamicImport: {
                loadingComponent: './components/PageLoading/index',
            },
            //国际化
            locale: {
                enable: true, // 默认false
                default: 'zh-CN', // 默认是中文
                baseNavigator: true, // 默认TRUE，当它为真时，将使用改写默认值
              },
            //兼容ie11
            polyfills: ['ie11']
            
        }],
      ],
    
    history: 'hash',
    //路由的配置
    routes: pageRouters,
    //设置主题  antdPro的主题
    // theme: {
    //     'primary-color': defaultSettings.primaryColor,
    //   },
    //扩展webpack 这里只用来引用antd本身的样式使用  和antd 的主题
    chainWebpack: webpackplugin,
    //css 加载器选项配置  
    cssLoaderOptions: {
        modules: true,
        getLocalIdent: (context, localIdentName, localName) => {
          if (
            context.resourcePath.includes('node_modules') ||
            context.resourcePath.includes('ant.design.pro.less') ||
            context.resourcePath.includes('global.less')
          ) {
            return localName;
          }
          const match = context.resourcePath.match(/src(.*)/);
          if (match && match[1]) {
            const antdProPath = match[1].replace('.less', '');
            const arr = antdProPath
              .split('/')
              .map(a => a.replace(/([A-Z])/g, '-$1'))
              .map(a => a.toLowerCase());
            return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
          }
          return localName;
        },
      },
  "proxy": {
    "/api": {
      "target": "http://127.0.0.1:8080",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
  
  disableDynamicImport: true,
  publicPath: './',
  hash: true,
}