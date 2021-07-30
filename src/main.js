/*
 * @Author: your name
 * @Date: 2021-07-30 15:30:46
 * @LastEditTime: 2021-07-30 17:26:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zhihu_vue\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'//引入axios
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
