<template>
  <div class="login">
    <div class="login-con">
      <div class="login-logo">
        <!-- <img src="../../assets/images/logo.png"> -->
        <br />
        <!-- <b style="color: white;">商城后台管理系统</b> -->
      </div>
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
            <FormItem prop="userName">
              <Input v-model="form.userName" placeholder="请输入用户名" />
              <span slot="prepend">
                <Icon :size="16" type="ios-person"></Icon>
              </span>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="form.password" placeholder="请输入密码" />
              <span slot="prepend">
                <Icon :size="14" type="md-lock"></Icon>
              </span>
            </FormItem>
            <FormItem>
              <Button :loading="loginLoading" @click="handleSubmit" type="primary" long>登录</Button>
            </FormItem>
          </Form>

          <!-- <p  @click="register"  style="cursor: pointer;text-align:center;">注册</p> -->
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/data";
export default {
  name: "LoginForm",
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "账号不能为空", trigger: "blur" }];
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "密码不能为空", trigger: "blur" }];
      }
    }
  },
  data() {
    return {
      loginLoading: false,
      form: {
        userName: "",
        password: ""
      }
    };
  },
  computed: {
    rules() {
      return {
        userName: this.userNameRules,
        password: this.passwordRules
      };
    }
  },
  methods: {
    handleSubmit() {
      this.loginLoading = true;
      setTimeout(() => {
        this.loginLoading = false;
      }, 2000);
      let that = this;
      // that.$store.dispatch('storeLogin', { userAccount: this.form.userName, userPassword: this.form.password }).then(()=>{
      //   that.$Message.success("登录成功");
      //   that.$router.push({ path: "homePage" });
      // })

      that.globalApp.request(
        that.$store.getters.apiUrl.login,
        { userAccount: this.form.userName, userPassword: this.form.password },
        res => {
          console.log(res);
          that.$store.commit('setUserName', this.form.userName)
          that.$Message.success("登录成功");
          that.$router.push({ path: "homePage" });
        }
      );

      // that.globalApp.request(that.$store.getters.apiUrl.login,{ userAccount: this.form.userName,userPassword: this.form.password})
      // login({ userAccount: this.form.userName, userPassword: this.form.password }).then(res => {
      //     console.log(res)
      //     if (res.ret === 0) {
      //       this.$Message.success("登录成功");
      //       //超级管理员
      //     } else {
      //       this.$Message.error(res.msg);
      //     }
      // });
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  height: 100%;
  width: 100%;
  position: relative;
  .login-con {
    width: 50%;
    height: 500px;
    position: absolute;
    // top: 50%;
    // left: 50%;
    transform: translate(50%, 50%);
  }
}
</style>
