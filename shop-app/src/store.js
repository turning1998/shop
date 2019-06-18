import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{
      userName:'去登录'
    }
  },
  mutations: {
      changeLogin(state,status){
        state.userInfo=status;
      }
  },
  actions: {
    loginAction({commit},user){//调用changeLogin
      commit('changeLogin',user);
    }

  }
})
