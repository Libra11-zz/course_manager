<template>
  <div class="box-card">
    <my-bread level1="课程统计"></my-bread>
    <div class="kechengtongji">课程统计</div>
    <div class="chart">
      <v-chart :options="polar" />
      <v-chart :options="pie" />
    </div>
  </div>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";
import "echarts/lib/component/polar";
export default {
  data() {
    return {
      course: [],
      yibaoming: [],
      kebaoming: []
    };
  },
  computed: {
    polar() {
      let _this = this;
      let polar = {
        title: {
          text: "选课统计"
        },
        tooltip: {},
        legend: {
          data: ["选课数"]
        },
        xAxis: {
          name: "课程名",
          data: _this.course
        },
        yAxis: {
          type: "value",
          name: "已选课人数"
        },
        color: ["#64CDF0", "#F5686F"],
        series: [
          {
            name: "选课数",
            type: "bar",
            data: _this.yibaoming
          }
        ]
      };
      return polar;
    },
    pie() {
      let _this = this;
      let pie = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          name: "占比",
          type: "value"
        },
        yAxis: {
          name: "课程",
          type: "category",
          data: _this.course
        },
        series: [
          {
            name: "可报名",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "insideRight"
            },
            data: _this.kebaoming
          },
          {
            name: "已报名",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "insideRight"
            },
            data: _this.yibaoming
          }
        ]
      };
      return pie;
    }
  },
  mounted() {
    this.getCoursesAndPeople();
  },
  methods: {
    getCoursesAndPeople() {
      const _this = this;
      this.$http
        .get("/users/courseandpeople")
        .then(res => {
          let data = res.data.data;
          for (let i = 0; i < data.length; i++) {
            const item = data[i];
            _this.course.push(item.name);
            _this.yibaoming.push(item.num - item.lnum);
            _this.kebaoming.push(item.num);
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
.chart {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
.kechengtongji {
  margin-top: 10px;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  padding: 30px 0;
  background-color: #fff;
}
</style>
