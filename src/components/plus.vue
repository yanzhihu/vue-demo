<template>
  <div class="hello">
    <h3>我是组件四</h3>
    <div  class="add-input">
      <Input v-model="msg" placeholder="请输入值" style="width:30%" />
    </div>
  </div>
</template>

<script>
export default {
  name: "plusCom",
  props: {
  },
  data(){
    return {
      msg: ''
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-input{
  display: flex;
  justify-content: center;
}
</style>
