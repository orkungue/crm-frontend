import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from '@/components/Page'
import Signin from '@/components/Signin'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
     path: '/',
     name: 'Signin',
     component: Signin,
     meta: {
       layout: "simple"
     }
   },
    {
      path: '*',
      name: 'Page',
      component: Page,
      /*meta: {
        requiresAuth: true,
      },*/
      props: (route) => ({ route: route.path })
    },
  ]
})
