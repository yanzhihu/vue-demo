import axios from 'axios'
import store from '../store'

axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(config => {
  const token = store.state.userName
  if(!token && config.url != '/login'){
    return Promise.reject({ret: 200 , msg:'请先登录'})
  }
  return config;
},
  error => {
    return Promise.reject(error);
  })

// 响应拦截器
axios.interceptors.response.use(response => {
  return response.data;
},
  error => {
    return Promise.reject(error);
  })

export default axios