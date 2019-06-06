import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import Cart from './views/cart/Cart.vue'
import Classify from './views/classify/Classify.vue'
import Mine from './views/mine/Mine.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
  ]
})
