<p align="center">
  <a href="http://gist006.gitee.io/vue-antd-admin/">
    <img src="https://images.gitee.com/uploads/images/2020/1129/181145_3aeaf5c3_7647779.png" alt="Logo" width="250">
   <h1 align="center"> vue antd admin</h3>
  </a>
</p>

  <p align="center">
    <a href="https://github.com/biubiubiu01/vue-antd-admin"><strong>探索本项目的文档 »</strong></a>
    <br />
    <br />
    <a href="http://gist006.gitee.io/vue-antd-admin/">在线预览</a>
    ·
    <a href="https://github.com/biubiubiu01/vue-antd-admin/issues">提出Bug</a>
    ·
    <a href="https://github.com/biubiubiu01/vue-antd-admin/issues">提出建议</a>
  </p>
  
  
## 最近更新
```
1.优化之前版本的权限控制，菜单通过角色控制，可以给用户对应的角色和多角色
2.优化mock数据部分，建立用户常量和角色常量
3.添加tag标签页鼠标滚动功能
4.添加真正的整体换肤功能
5.添加外链
6.添加可视化图，饼图，柱状图等拖拽


之后可能不咋会更新了，准备写一个vue3+ts+vite了.
```

## 简介（有好的idea可以提issues,灵感丧失了...）

[vue-antd-admin](http://gist006.gitee.io/vue-antd-admin/)是一个后台管理系统，基于[vue](https://github.com/vuejs/vue)+[ant-design-vue](https://github.com/vueComponent/ant-design-vue)开发，包含动态路由+权限管理解决用户权限问题，提供基础固定权限：admin、test、editor和自定义用户权限，可自定义修改角色对应的菜单,可定义用户多角色，布局方面提供左右布局和上下布局两种，可自由切换；系统内置了混合主题、浅色主题，深色主题，可随意切换；还有一些后台管理系统常用的功能如表单，table表等；

## 测试账号
```
过一段时间后才发现忘记放测试账号和密码了，哈哈哈


1.  用户名：admin  密码 任意6位数 （如果你喜欢，可以用123456） 拥有admin的权限可以查看所有页面
2.  用户名：test   密码 任意6位数 （如果你喜欢，可以用123456） 拥有test的页面权限，可以查看部分页面
3.  用户名：editor 密码 任意6位数 （如果你喜欢，可以用123456） 拥有editor的页面权限，可以查看富文本等页面
4.  使用手机号验证码登录 ，默认拥有admin的权限

```

已实现基础版node+express+mysql后台，地址：[vue-antd-server](https://github.com/biubiubiu01/vue-antd-server)

react版本，地址：[reacct-antd-admin](https://github.com/biubiubiu01/react-antd-admin)


## 前序准备
* 该项目采用[vue](https://github.com/vuejs/vue)+[vue-cli4](https://github.com/vuejs/vue-cli)+[vuex](https://github.com/vuejs/vuex)+[ant-design-vue](https://github.com/vueComponent/ant-design-vue)和[axios](https://github.com/axios/axios)开发，数据采用[mock.js](https://github.com/nuysoft/Mock)进行模拟,后期打算使用node写后台；
* [webpack](https://github.com/webpack/webpack)大幅度优化了下，首屏加载速度更快；
* 系统内置了echarts常用的图表展示和arcgis地图；
* 使用了[jest](https://github.com/facebook/jest)单元测试，目前覆盖率还比较低，有时间再写；
* 格式化方面采用 [ESlint](https://github.com/eslint/eslint)+[prettier](https://github.com/prettier/prettier)。

![home](https://images.gitee.com/uploads/images/2020/1129/194928_63e651ea_7647779.png)

## 功能

```
- 登录  用户名密码/手机号验证码
- 权限  
- 动态路由
- echarts各种图表
- arcgis地图
- 克里金插值分析图
- 全景图
- 富文本
- Markdown
- 错误页面 403 404 500
- 个人设置
- 系统设置
- 更换主题
- 两种布局方式
- 面包屑
- 标签页
- webSocket 
- svg图标
- 全屏
- 返回顶部
- webpack优化
- 抽奖页
- table表
- form表单
- 上传Excel
- 上传头像和裁剪
- htmlcanvas2截屏
- 封装自定义loading
```

## webpack优化
```
- 关闭生产环境sourceMap;
- 关闭预加载(vue会预加载后面的页面，会导致首屏加载比较慢)
- g-zip压缩(需要nginx配置);
- 生产环境CDN加载部分插件
- 去除生产环境console和debugger;
- 公共代码抽离
- 打包大小分析
- 打包缓存
- 部分依赖使用异步cdn加载

```

## 使用说明
```
- 拥有 admin、test和editor三种权限，每个权限对应的路由和左侧菜单不同；
- 点击个人设置个性化或者右边设置，可以更改页面的设置，如果标签页是否开启，布局方式,主题颜色等；
- 系统管理员拥有所有权限，可以更改用户对应的菜单路由和角色对应的权限。
......
```


### 文件目录说明
```

├── mock                             ---mock模拟数据
├── public                           ---静态资源文件
├── src          
│  ├── api                           ---接口     
│  ├── assets                        ---图片
│  ├── components                    ---可复用的vue组件
│  ├── layouts                       ---布局方式
│  ├── router                        ---路由
│  ├── store                         ---vuex
│  ├── styles                        ---sass样式
│  ├── utils                         ---方法函数
│  ├── vendor                        ---导出excel
│  ├── views                         ---页面
│  ├── App.vue                       
│  ├── main.js            
│  ├── permission.js                 ---路由拦截           
├── tests                            ---单元测试文件
├── .browserslistrc
├── .env
├── .eslintrc.js
├──  babel.config.js
├── .jest.config.js                  ---jest的配置
├──  package.json
├──  package-lock.json
├──  README.md
└──  vue.config.js                   ---webpack的配置


```


 
## 安装

```
# 克隆项目
git clone https://github.com/biubiubiu01/vue-antd-admin.git
# 进入项目目录
cd vue-antd-admin
# 安装依赖
npm install
# 本地开发 启动项目
npm run serve
```


### 部署

```
# 打包项目
npm run build
# 单元测试
npm run test:unit
```

## Online Demo

[在线 Demo](http://gist006.gitee.io/vue-antd-admin/)

## 最后

这个项目参考了 [vue-element-admin](https://panjiachen.gitee.io/vue-element-admin/#/) 和 [ant-design-pro](https://preview.pro.antdv.com/dashboard/workplace),发现了好多好用的写法和方法，建议如果真想提升自己的代码水平，可以多看看大佬们的代码。
开源不易，若觉得这个项目对你有用，可以点个[star](https://github.com/biubiubiu01/vue-antd-admin)，欢迎提出建议和bug :smile: 。


## 捐赠

开源不易，若觉得这个项目对你有用，可以点个[star](https://github.com/biubiubiu01/EchartsMap)，欢迎提出建议和bug :smile: 。如果这个项目对你有所帮助，可以给作者买杯咖啡，欢迎投喂，任意金额捐赠加好友问题咨询。

<img src="https://i.328888.xyz/2023/02/28/zV27Q.jpeg" alt="alipay" width="250"><img src="https://i.328888.xyz/2023/02/28/zVw2H.jpeg" alt="wechat" width="250">








