<template>
  <el-header>
    <el-row>
      <el-col :span="5">
        <div class="grid-content left">
          <h3>选课后台管理系统</h3>
        </div>
      </el-col>
      <el-col :span="1" class="right" :offset="16">
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
            {{name}}
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
  data() {
    return {
      name: window.localStorage.getItem("name")
    };
  },
  methods: {
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
      // 清除 token
      localStorage.removeItem("token");
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
  background-color: #b3c0d1;
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
  text-align: left;
  margin-top: 20px;
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
