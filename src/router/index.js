import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import myRoute from './routers'
import store from '../store'

Vue.use(Router)

const loginName = 'login'

const router = new Router({ routes: myRoute })
router.beforeEach((to, from, next) => {
  let userName = store.state.userName
  if(!userName && to.name != loginName){
    next({
      replace: true,
      name: loginName
    })
  }else{
    next()
  }
  // next()
})

export default router
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path: '/index',
//       name: 'index',
//       component: () => import('../views/index.vue')
//     }
//   ]
// })
