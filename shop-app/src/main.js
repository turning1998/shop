import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/js/rem'
Vue.config.productionTip = false
import {Field,CellGroup, Button, Tab, Tabs, Lazyload,NavBar,Icon,Tabbar, TabbarItem,Swipe, SwipeItem } from 'vant';
import './mock/mock.js';
Vue.use(Lazyload).use(Tab).use(Tabs).use(Field).use(Button).use(CellGroup);
Vue.use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
