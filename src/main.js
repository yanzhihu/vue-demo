// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';                    //引入iview
import store from './store'
import axios from './api/axios'
import Mock from '@/mock'
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(iView);    
Vue.component('runoob', {
  data(){
    return {msg:''}
  },
  template: '<div class="hello"> <h3>我是全局组件</h3> <div class="content" style="display:flex;justify-content:center;"> <Input v-model="msg" placeholder="请输入值" style="width:30%" /> </div> </div>'
})
/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  // methods:{
  //   request(
  //     _url,
  //     _data = {},
  //     _success = this.defaultSuccess,
  //     _err = this.defaultFail,
  //     _method = "post"
  //   ) {
  //     axios.request({
  //       url: _url,
  //       method: _method,
  //       data: _data
  //     }).then(res =>{
  //       if(res.ret == 0 ){
  //         _success(res)
  //       }else if(ret == 403){
  //         this.$Message.error('抱歉您没有权限')
  //         this.$router.push({ path: 'error-404' })
  //       }else{
  //         _err(res)
  //       }
  //     }).catch(e=>{
  //       console.log('3242423423aaaaaaaaa4')
  //       this.$Message.error(e.msg || '网络错误')
  //     });
  //   },
  //   defaultSuccess(res){
  //     this.$Message.success(res.msg || '网络错误')
  //   },
  //   defaultFail(res){
  //     this.$Message.error(res.msg || '网络错误')
  //   }
  // }
})

// Vue.prototype.simpleApp = app
Vue.prototype.globalApp = App
