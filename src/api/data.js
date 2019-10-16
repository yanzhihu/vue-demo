import axios from './axios'

var qs = require('qs')
// mock不需要qs
// 用户列表
export const login = (params) => {
  return axios.request({
    url: '/login',
    method: 'post',
    data: params
  })
}
