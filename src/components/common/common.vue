<template>
  <div class="common-page">
   <titleBar :menuList="menuList" :oneIndex="oneIndex" @changeItem="navTo"></titleBar>
    <div class="content">
      <siderBar :siderBar="siderBar" :twoIndex="twoIndex" @changeItem="goTo"></siderBar>
      <div class="right">
        <!-- <add></add> -->
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import myRoute from "@/router/routers";
import siderBar from "./siderBar";
import titleBar from "./titleBar";
import add from "@/components/add";
export default {
  name: "commonPage",
  components: {
    siderBar,
    titleBar,
    add
  },
  data() {
    return {
      menuList: myRoute,
    };
  },
  computed: {
    oneIndex() {
      let name = "";
      this.menuList.forEach(element => {
        if (element.children) {
          element.children.forEach(item => {
            if (item.path == this.$route.path) {
              name = element.path;
            }
          });
        }
      });
      return name;
    },
    twoIndex() {
      let name = "";
      this.menuList.forEach(element => {
        if (element.children) {
          element.children.forEach(item => {
            if (item.path == this.$route.path) {
              name = item.path;
            }
          });
        }
      });
      return name;
    },
    siderBar(){
      let bar = []
      this.menuList.forEach(element => {
        if (element.children) {
          element.children.forEach(item => {
            if (item.path == this.$route.path) {
              bar = element.children
            }
          });
        }
      });
      return bar
    }
  },
  methods: {
    navTo(item, index) {
      let path = "";
      let bar = this.menuList[index].children || [];
      if (bar.length == 0) {
        path = item.path;
      } else {
        path = bar[0].path;
      }
      path = path.replace("/", "");
      this.$router.push({ path: path });
    },
    goTo(path){
      path = path.replace("/", "");
      this.$router.push({ path: path });
    }
  },
  mounted() {
  }
};
</script>
<style>
body {
  margin: 0 !important;
}
.common-page .content {
  min-height: 100%;
  display: flex;
  justify-content: space-between;
}
.common-page .content .right {
  width: 100%;
}
</style>