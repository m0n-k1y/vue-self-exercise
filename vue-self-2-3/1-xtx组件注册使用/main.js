import Vue from 'vue'
import App from './App.vue'
import './styles/base.css' // css 样式重置
import './styles/common.css' // 公共全局样式
import './assets/iconfont/iconfont.css' // 字体图标的样式

Vue.config.productionTip = false

import NewGoodsItem from './components/NewGoodsItem'
import HotBrandItem from './components/HotBrandItem'

Vue.component('NewGoodsItem', NewGoodsItem)
Vue.component('HotBrandItem', HotBrandItem)

new Vue({
  render: h => h(App),
}).$mount('#app')
