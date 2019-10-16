import Vue from 'vue'
import Vuex from 'vuex'
import globalApp from '../App'
// import user from './module/user'
// import app from './module/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
    msg: '',
    userName: localStorage.getItem('userName') || ''
  },
  getters: {
    apiUrl(){
      let data = globalApp.data()
      return data.apiUrl
    }
  },
  mutations: {
    setMsg(state,msg){
      console.log(msg)
      state.msg = msg
    },
    setUserName(state,name){
      localStorage.setItem('userName', name)
      state.userName = name
    }
    //
  },
  actions: {
    storeLogin(content,params){
      return globalApp.request(
        content.getters.apiUrl.login,
        params,
        res => {
          content.commit('setUserName', params.userAccount)
        }
      );
    }
  },
  // modules: {
  //   user,
  //   app
  // }
})
