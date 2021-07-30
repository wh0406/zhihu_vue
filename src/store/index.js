/*
 * @Author: your name
 * @Date: 2021-07-21 08:17:25
 * @LastEditTime: 2021-07-29 21:37:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
 //相当于组件的data,专门用来放全局的数据
  state: {
    collectnum:5
  },
  //相当于组件中的computed,getters是全局的 ，computed是组件内部使用的
  getters:{
  

  },
  //相当于组件中的 methods 不能使用异步（定时器，axios）
   mutations: {

  },
  //专门用来处理异步，实际修改值的仍然是mutations
  actions: {
  
  },
  modules: {
  }
})
