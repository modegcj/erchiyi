import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path:'/',
    name:'Box',
    component:()=>import('@/views/Box.vue'),
    redirect:{
      path:'/one'
    },
    children:[
      {
        path:'/one',
        name:'One',
        component:()=>import('@/views/study/BoxOne.vue')
      },
      {
        path:'/two',
        name:'Two',
        component:()=>import('@/views/study/BoxTwo.vue')
      },
      {
        path:'/three',
        name:'Three',
        component:()=>import('@/views/study/BoxThree.vue')
      },
      {
        path:'/fore',
        name:'Fore',
        component:()=>import('@/views/study/BoxFore.vue')
      }
    ]
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
