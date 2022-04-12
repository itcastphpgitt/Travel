import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/home/Home.vue"
import List from "@/pages/list/List.vue"

Vue.use(Router)
const   routes= [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },

]
 const router=new Router({
  routes
})
export default router
