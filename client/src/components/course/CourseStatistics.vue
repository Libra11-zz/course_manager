<template>
  <div class="box-card">
    <my-bread level1="课程管理" level2="课程统计"></my-bread>
    <div class="chart">
      <v-chart :options="polar" />
    </div>
  </div>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/polar";
export default {
  data() {
    return {
      course: [],
      yibaoming: [],
    };
  },
  computed: {
    polar() {
      let _this = this;
      let polar = {
        title: {
          text: "选课统计",
        },
        tooltip: {},
        legend: {
          data: ["选课数"],
        },
        xAxis: {
          name: "课程名",
          data: _this.course,
        },
        yAxis: {
          type: "value",
          name: "已选课人数",
        },
        color: ["#64CDF0", "#F5686F"],
        series: [
          {
            name: "选课数",
            type: "bar",
            data: _this.yibaoming,
          },
        ],
      };
      return polar;
    },
  },
  mounted() {
    this.getCoursesAndPeople();
  },
  methods: {
    getCoursesAndPeople() {
      const _this = this;
      this.$http
        .get("/users/courseandpeople")
        .then((res) => {
          let data = res.data.data;
          for (let i = 0; i < data.length; i++) {
            const item = data[i];
            _this.course.push(item.name);
            _this.yibaoming.push(item.num - item.lnum);
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.chart {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
</style>
