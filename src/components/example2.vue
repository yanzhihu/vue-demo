<template>
  <div class="hello">
    <h3>我是组件二</h3>
    <div class="content">
      <div class="item">
        <h4>这个是从 父组件传过来的，props接收的：</h4><h5> {{msg}}</h5>
      </div>
      <div class="item">
        <h4>这个是用 将实例化vue封装成bus，接收指令改变的：</h4><h5> {{busMsg}}</h5>
      </div>
      <div class="item" v-if="show">
        <h4>这个是用 vueX全局变量，初始化取值改变的：</h4><h5>{{stateMsg}}</h5>
      </div>
      <div class="item" v-if="show">
        <h4>这个是用 vueX全局变量，计算属性取值改变的：</h4><h5>{{comState}}</h5>
      </div>
      <div class="item" v-show="show">
        <h4>这个是用 缓存，取值改变的：</h4><h5>{{storageMsg}}</h5>
      </div>
      <div class="item" v-if="show">
        <h4>这个是用 缓存，计算属性取值改变的：</h4><h5>{{comStorage}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '@/libs/bus';
export default {
  name: "child-two",
  props: {
    msg: {
      type: String
    }
  },
  data() {
    return {
      show: true,
      busMsg: "",
      stateMsg: this.$store.state.msg,
      vueMsg: "",
      storageMsg: localStorage.getItem('msg') || ''
    };
  },
  computed:{
    comState(){
      return this.$store.state.msg
    },
    comStorage(){
      console.log('haschangeStorage')
      return localStorage.getItem('msg') || ''
    }
  },
  methods:{
  },
  mounted(){
    bus.$on('changeBus', (val) => { 
        this.busMsg= val; // 接收
        console.log(val)
        console.log(this.stateMsg)
        console.log(this.storageMsg)
    });
    // this.$nextTick(()=>{
    //   this.storageMsg = localStorage.getItem('msg') || ''
    // })
    // console.log(this.$store.state.msg)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  display: flex;
  flex-direction: column;
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
