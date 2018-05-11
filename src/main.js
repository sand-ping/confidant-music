import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/logs/main',
      'pages/play-music/main',
      '^pages/index/main',

    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#2698ca',
      navigationBarTitleText: '伯乐音乐',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      selectedColor: '#2698ca',
      color: '#8a8a8a',
      list: [{
        pagePath: 'pages/index/main',
        iconPath: '/image/首页.png',
        selectedIconPath: '/image/首页1.png',
        text: '首页'
      }, {
        pagePath: 'pages/logs/main',
        iconPath: '/image/我的.png',
        selectedIconPath: '/image/我的1.png',
        text: '我的'
      }]
    }
  }
}
