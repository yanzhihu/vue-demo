<template>
  <div class="hello">
    <h3>我是组件一</h3>
    <h5>
      我要改变组件二的值</h5>
    <div>
      <Input v-model="msg" placeholder="请输入值" style="width:30%" />
    </div>
    <div style="margin:30px 0">
      <!-- <Button type="info" @click="changeVue">vue</Button> -->
      <Button type="success" @click="changeBus">bus</Button>
      <Button type="warning" @click="changeState">state</Button>
      <Button type="error" @click="changeStorage">storage</Button>
    </div>
  </div>
</template>

<script>
import bus from '@/libs/bus';
export default {
  name: "child-one",

  watch: {
    msg(newVal) {
      console.log(newVal);
      this.$emit("changeTwo", this.msg);
    }
  },
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    // changeVue(){
    //   bus.$emit('changeVue' , this.msg)
    // },
    changeBus(){
      console.log(this.msg)
      bus.$emit('changeBus' , this.msg)
    },
    changeState(){
      this.$store.commit('setMsg' , this.msg)
      this.$emit("changeTwo", this.msg);
    },
    changeStorage(){
      localStorage.setItem('msg' , this.msg)
      this.$emit("changeTwo", this.msg);
      
    }
    // changMsg(){
    //   console.log(this.msg)
    //   this.$emit('changeTwo', this.msg )
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
