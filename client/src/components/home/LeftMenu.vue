<template>
  <el-aside class="left-menu">
    <div class="header">
      <el-avatar
        :size="60"
        src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
        class="avatar"
      ></el-avatar>
      <div class="right">
        <div class="name">{{name}}</div>
        <div class="zhiye">{{identity}}</div>
      </div>
    </div>
    <el-menu
      :unique-opened="true"
      default-active="allcourse"
      active-text-color="#ff9900"
      :router="true"
      class="el-menu-vertical-demo"
    >
      <el-menu-item index="courseStatistics">
        <i class="el-icon-data-analysis"></i>
        <span slot="title">课程统计</span>
      </el-menu-item>
      <el-submenu index="1" v-if="identity==='admin'">
        <template slot="title">
          <i class="el-icon-s-data"></i>
          <span>课程管理</span>
        </template>
        <el-menu-item index="allcourse">课程列表</el-menu-item>
      </el-submenu>
      <el-submenu index="2" v-if="identity==='admin'">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item index="students">学生列表</el-menu-item>
        <el-menu-item index="teachers">教师列表</el-menu-item>
      </el-submenu>
      <el-menu-item index="courselist" v-if="identity==='student' || identity==='teacher'">
        <i class="el-icon-s-grid"></i>
        <span slot="title">所有课程</span>
      </el-menu-item>
      <el-menu-item index="mycourse" v-if="identity==='student'">
        <i class="el-icon-edit"></i>
        <span slot="title">我的课程</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "LeftMenu",
  props: ["isCollapse"],
  data() {
    return {
      name: window.localStorage.getItem("name"),
      identity: window.localStorage.getItem("identity")
    };
  }
};
</script>

<style scoped>
.left-menu {
  min-height: 100vh;
  width: 200px !important;
  border-right: 1px solid #ddd;
}
.el-menu {
  border: none;
}
.my-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
}
.header {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header .right {
  margin-left: 20px;
}
.header .right .name {
  font-weight: bold;
  font-size: 18px;
  margin: 10px 0;
}
</style>
