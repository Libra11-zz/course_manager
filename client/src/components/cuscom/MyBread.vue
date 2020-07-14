<template>
  <el-breadcrumb class="my-bread" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item>首页</el-breadcrumb-item>
    <el-breadcrumb-item>{{level1}}</el-breadcrumb-item>
    <el-breadcrumb-item v-if="level2">{{level2}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "my-bread",
  props: ["level1", "level2"]
};
</script>

<style scoped>
.my-bread {
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
}
</style>