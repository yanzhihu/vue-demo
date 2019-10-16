<template>
  <div class="hello">
    <h3>我是common引用的组件</h3>
    <div class="add-input">
      <Input v-model="msg" placeholder="请输入值" style="width:30%" />
    </div>
  </div>
</template>

<script>
export default {
  name: "addCom",
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
.content .item{
  display: flex;
  justify-content: flex-start;
}
.content .item h4{
  width: 50%;
  text-align: end;
}.content .item h5{
  width: 50%;
  text-align: start;
}
</style>
