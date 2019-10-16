<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from "./api/axios";
import iView from "iview";
import router from './router'
import qs from "qs";
export default {
  name: "App",
  data() {
    return {
      apiUrl: {
        login: "/login"
      }
    };
  },
  methods: {
  },
  request(
    _url,
    _data = {},
    _success = this.defaultSuccess,
    _err = this.defaultFail,
    _method = "post"
  ) {
    axios
      .request({
        url: _url,
        method: _method,
        data: _data
      })
      .then(res => {
        console.log(res.ret)
        if (res.ret == 0) {
          _success(res);
        } else if (res.ret == 403) {
          iView.Message.error("抱歉您没有权限");
          router.push({ path: "error-404" });
        } else {
          _err(res);
        }
      })
      .catch(e => {
        console.log(e)
        console.log("3242423423aaaaaaaaa4");
        iView.Message.error(e.msg || "网络错误");
      });
  },
  defaultSuccess(res) {
    iView.Message.success(res.msg || "网络错误");
  },
  defaultFail(res) {
    iView.Message.error(res.msg || "网络错误");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
