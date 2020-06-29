<template>
  <el-header>
    <el-row>
      <el-col :span="21">
        <div class="grid-content left">
          <div class="title">
            <i class="el-icon-date"></i> 选课后台管理系统
          </div>
        </div>
      </el-col>
      <el-col :span="1" class="right">
        <div class="circle">
          <div class="block">
            <el-avatar
              :size="40"
              src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
              class="avatar"
            ></el-avatar>
          </div>
        </div>
      </el-col>
      <el-col :span="2">
        <el-dropdown trigger="click" @command="setUserInfo">
          <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="info">用户信息</el-dropdown-item>
            <el-dropdown-item command="logout">注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  name: "head-nav",
  props: ["isCollapse"],
  methods: {
    setIsCollapse() {
      this.$emit("setIsCollapse");
    },
    setUserInfo(item) {
      switch (item) {
        case "info":
          this.showInfoList();
          break;
        case "logout":
          this.$message.success("注销成功");
          this.logout();
          break;
      }
    },
    showInfoList() {
      this.$router.push("/infoshow");
    },
    logout() {
      // 清除 localStorage
      localStorage.clear();
      // 设置 vuex store
      // this.$store.dispatch("clearCurrentState");
      // 跳转
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.el-header {
  color: #333;
  height: 60px;
  text-align: center;
  width: 100%;
}
.middle {
  /* line-height: 40px;  */
  height: 40px;
  /* background-color: #fff; */
}

.right {
  text-align: center;
}

.left {
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
}

.left .title {
  font-size: 24px;
  display: inline-block;
  background: linear-gradient(to right, #409eff, #ff9900);
  -webkit-background-clip: text;
  color: transparent;
}

.avatar {
  margin: 10px 0 5px 30px;
  background-color: aqua;
}
.el-dropdown-link {
  display: block;
  margin-top: 22px;
  cursor: pointer;
  /* webkit-user-select: none; */
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.block {
  line-height: 0;
}
</style>
