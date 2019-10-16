<template>
  <div class="sider">
      <div
          class="item"
          v-for="(item,sIndex) in siderBar"
          :key="sIndex"
          :class="twoIndex==item.path?'active':''"
          @click="goTo(item.path)"
        >
          <div>{{item.name}}</div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'siderBar',
  props:{
    siderBar: {
      type: Array
    },
    twoIndex: {
      type: String
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    goTo(path){
      this.$emit('changeItem' , path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sider {
  width: 257px;
  min-height: 100%;
  background: #001529;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.sider .item {
  width: 100%;
  padding: 20px 0;
}
.sider .active {
  background: #000c17;
  color: #1d90fd;
}
</style>
