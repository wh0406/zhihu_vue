/*
 * @Author: your name
 * @Date: 2021-07-27 13:51:18
 * @LastEditTime: 2021-07-27 14:04:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zhihu_vue\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
/*   {
    path: '/',
    name: 'unfinished',
    component: () => import('../views/unfinished.vue')
  } */
]

const router = new VueRouter({
  routes
})

export default router
