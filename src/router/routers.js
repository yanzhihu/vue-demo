import HelloWorld from '@/components/HelloWorld'
import indexPage from '../views/index.vue'
import CommonPage from '@/components/common/common'

export default [
  {
    path: '/',
    name: 'login',
    component:  () => import('../views/login.vue')
  },
  {
    path: '/login',
    name: 'login',
    component:  () => import('../views/login.vue')
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('../views/error_404.vue')
  },
  {
    path: '/hh',
    name: 'jsX',
    component: CommonPage,
    children: [
      {
        path: '/homePage',
        name: 'jsX',
        component: () => import('../views/jsx.vue'),
        children: [
          {
            path: '/third',
            name: 'third',
            component: () => import('../views/index.vue')
          }
        ]
      }
    ]
  },
  // {
  //   path: '/ii',
  //   name: '子与子',
  //   component: CommonPage,
  //   children: [
  //     {
  //       path: '/indexPage',
  //       name: '子与子',
  //       component: () => import('../views/index.vue')
  //     }
  //   ]
  // },
  {
    path: '/main',
    name: '多选',
    component: CommonPage,
    children: [
      {
        path: '/index',
        name: '子与子',
        component: () => import('../views/index.vue')
      },
      {
        path: '/home',
        name: '父与子',
        component: HelloWorld
      }
    ]
  }
]