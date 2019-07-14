# travel

> 一个基于Vue框架以及Vue-router、Vuex实现的移动端旅游网站。实现页面包括主页页面、城市选择页面和详情页面。
## 主页页面
- 主页页面包括头部组件（搜索框、当前城市显示）、swiper组件（展示广告图片）、导航选项栏组件、推荐旅游项目组件（点击可进入详情页面）。
- 主要使用api：awesome-swiper（滑动插件）
## 城市选择页面
- 城市选择页面包括头部组件（城市搜索框并实现搜索逻辑）、右侧首字母滚动条（根据滑动距离跳转到指定首字母的城市群）、城市组件（当前城市以及热门城市）、城市首字母点击跳转组件（通过点击跳转到指定的首字母的城市群）、城市首字母排序组件（城市按照首字母归类并显示）
- 主要使用api：better-scroll（移动端滚动插件，用于实现页面跳转）
## 详情页面
- 详情页面包括图片展示组件（点击图片可全屏展示）、各类型票价。
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
