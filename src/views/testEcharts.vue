<template>
  <div class="hello">
    <h2>echarts折线图</h2>
    <echarts ></echarts>
  </div>
</template>

<script>
import echarts from "@/components/echarts";
export default {
  name: 'HelloWorld',
  components:{
    echarts
  },
  data () {
    return {
    }
  },
  methods:{
  }
}
</script>

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
