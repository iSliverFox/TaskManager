//这是入口文件，App.vue在此注册
import Vue from 'vue'  //此处引入的并不是完整版Vue.js,而是vue.runtime.esm.js【它不支持template编译器】
import App from './App.vue'
//关闭生产提示
Vue.config.productionTip = false

new Vue({
  el: '#root',
  //由于上面引入的Vue不是完整版的Vue，所以此处需要使用render替代template完成渲染
  render: h => h(App),   //h是对象，名称随意，App即上面import的App.vue
  beforeCreate() {
    Vue.prototype.$bus = this
  }
})
