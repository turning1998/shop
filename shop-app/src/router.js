import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import Cart from './views/cart/Cart.vue'
import Classify from './views/classify/Classify.vue'
import Mine from './views/mine/Mine.vue'
import Details from './views/classify/Details.vue'
import CFooter from './components/CFooter.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
     // component: Home
     components:{
       default:Home,
       'cfooter':CFooter //配置footer
     }
    },
    {
      path: '/mine',
      name: 'mine',
     // component: Mine
     components:{
      default: Mine,
      'cfooter':CFooter //配置footer
    }
    },
    {
      path: '/cart',
      name: 'cart',
     // component: Cart
      components:{
        default:  Cart,
        'cfooter':CFooter //配置footer
      }
      },

    {
      path: '/classify',
      name: 'classify',
      components:{
        default: Classify,
        'cfooter':CFooter


      } 
    },
    {
      path:'/detail/:id',
      name:'details',
      component:Details,
    }
  ]
})
