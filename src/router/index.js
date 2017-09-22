import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage/homePage'
import menuList from '@/components/homePage/menuList'
import userList from '@/components/homePage/userList'
import workSpace from '@/components/homePage/workSpace'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homePage/userList'
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: homePage,
      children:[
        {
          path: '/homePage/menuList',
          name: 'menuList',
          component: menuList
        },
        {
          path: '/homePage/userList',
          name: 'userList',
          component: userList
        },
        {
          path: '/homePage/workSpace',
          name: 'workSpace',
          component: workSpace
        },
      ]
    },
    
  ]
})