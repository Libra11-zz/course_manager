<template>
  <!-- <div class="index"> -->
  <el-container>
    <LeftMenu :isCollapse="isCollapse"></LeftMenu>
    <el-container class="container">
      <HeadNav @setIsCollapse="setIsCollapse"></HeadNav>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  <!-- </div> -->
</template>

<script>
import HeadNav from "./HeadNav";
import LeftMenu from "./LeftMenu";

export default {
  name: "index",
  components: {
    HeadNav,
    LeftMenu
  },
  data() {
    return {
      isCollapse: false
    };
  },
  beforeCreate() {
    // 获取 token
    const token = localStorage.getItem("token");
    // if token 有 -> 继续渲染组件
    if (!token) {
      this.$router.push({ name: "login" });
    }
  },
  methods: {
    setIsCollapse() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style scoped>
.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 15px;
}

.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.container {
  flex-direction: column;
}

/* aside */
</style>
