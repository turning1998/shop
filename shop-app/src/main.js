/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/js/rem'

Vue.config.productionTip = false
import {  
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
   PullRefresh,
   List,Row,
   Col,Field,
   Toast,CellGroup,
    Button, Tab, 
    Tabs, Lazyload,
    NavBar,Icon,Tabbar, 
    TabbarItem,Swipe,
     SwipeItem,
     // eslint-disable-next-line no-unused-vars
      } from 'vant';
import './mock/mock.js';
// eslint-disable-next-line no-undef
Vue.use(GoodsAction);
//Vue.use(GoodsActionIcon);
//Vue.use(GoodsActionButton);
// eslint-disable-next-line no-undef

Vue.use(Lazyload).use(Tab).use(Tabs).use(Field).use(Button).use(CellGroup).use(Toast);
Vue.use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem);
Vue.use(Row).use(Col).use(List).use(PullRefresh).use;
//Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
