<template>
  <div class="hello">
    <h2>子组件与子组件通信index</h2>
    <childOne @changeTwo="changeTwo"></childOne>
    <childTwo :msg="msg"></childTwo>
    <runoob></runoob>
  </div>
</template>

<script>
import childOne from "@/components/example1";
import childTwo from "@/components/example2";
export default {
  name: 'HelloWorld',
  components:{
    childOne,
    childTwo
  },
  data () {
    return {
      msg: ''
    }
  },
  methods:{
    changeTwo(val){
      this.msg = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
