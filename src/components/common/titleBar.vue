<template>
  <div class="title">
      <div
        v-for="(fItem , fIndex) in menuList"
        :key="fIndex"
        @click="navTo(fItem,fIndex)"
      >
        <div class="first-item" :class="oneIndex == fItem.path?'active':''" v-if="fItem.children">{{fItem.name}}</div>
      </div>
      <div class="user-name">{{userName}}</div>
      <div class="logout" @click="logout">退出登录</div>
  </div>
</template>

<script>
export default {
  name: 'siderBar',
  props:{
    menuList: {
      type: Array
    },
    oneIndex: {
      type: String
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    navTo(fItem,fIndex){
      this.$emit('changeItem' , fItem,fIndex)
    },
    logout(){
      this.$store.commit('setUserName' , '')
      this.$router.push({path:'login'})
    }
  },
  computed:{
    userName(){
      return this.$store.state.userName
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title {
  display: flex;
  justify-content: flex-start;
  background: gray;
  color: #fff;
  position: relative;
}
.title .first-item {
  padding: 20px;
}
.title .active{
  padding: 20px;
  background: #333434;
}
.title .user-name{
  position: absolute;
  right: 120px;
  top: 50%;
  transform: translate(0,-50%)
}
.title .logout{
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translate(0,-50%)
}
</style>
