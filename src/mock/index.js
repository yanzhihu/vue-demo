import Mock from 'mockjs'

 // 配置拦截 ajax 的请求时的行为，支持的配置项目有 timeout。
Mock.setup({
  timeout: '200 - 400'
})

const vCode = '123456';

function loginFun (prarms) {
  const prarmsObj = JSON.parse(prarms.body)
  if (prarmsObj.userPassword == vCode) {
      return {ret:0, msg:'登录成功'}
  } else {
      return {ret:403, msg:'用户名或密码错误'}
  }
}

Mock.mock('/login', 'post', loginFun); //登录
export default Mock;