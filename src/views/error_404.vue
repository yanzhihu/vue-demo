<template>
  <div class="error-page">
    <div class="content-con">
      <img :src="src" :alt="'404'" />
      <div class="text-con">
        <h4>404</h4>
        <h5>Oh~~您的页面好像飞走了~</h5>
      </div>
      <div class="back-btn-group">
        <Button size="large" type="text" @click="backHome">返回首页</Button>
        <Button size="large" type="text" @click="backPrev">返回上一页({{ second }}s)</Button>
      </div>
    </div>
  </div>
</template>

<script>
import error404 from "@/assets/error-404.svg";
export default {
  name: "error_404",
  components: {
  },
  data() {
    return {
      src: error404,
      second: 5,
      timer: null
    };
  },

  methods: {
    backHome() {
      this.$router.replace({
        path: 'homePage'
      });
    },
    backPrev() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.second === 0) this.backPrev();
      else this.second--;
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>
<style lang="less">
.error-page {
  width: 100%;
  height: 100%;
  position: relative;
  background: #f8f8f9;
  .content-con {
    width: 700px;
    height: 600px;
    position: absolute;
    margin-left: -350px;
    left: 50%;
    // top: 50%;
    margin-top: 100px;
    // transform: translate(-50%, -60%);
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .text-con {
      position: absolute;
      left: 0px;
      top: 0px;
      h4 {
        position: absolute;
        left: 0px;
        top: 0px;
        font-size: 80px;
        font-weight: 700;
        color: #348eed;
      }
      h5 {
        position: absolute;
        width: 700px;
        left: 0px;
        top: 100px;
        font-size: 20px;
        font-weight: 700;
        color: #67647d;
      }
    }
    .back-btn-group {
      position: absolute;
      right: 0px;
      bottom: 20px;
    }
  }
}
</style>
