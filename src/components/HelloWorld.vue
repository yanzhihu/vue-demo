<template>
  <div class="hello">
    <h1>试一下都调用组件三和四HelloWorld</h1>
    <!-- <add></add> -->
    <plus></plus>
    <plus></plus>
    <runoob></runoob>
    <router-view />
  </div>
</template>

<script>
import add from "@/components/add";
import plus from "@/components/plus";
export default {
  name: 'HelloWorld',
  components: {
    add,
    plus
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
.hello{
  text-align: center
}
</style>
