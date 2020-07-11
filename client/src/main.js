import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import myServerHttp from "@/plugins/http.js";
import MyBread from "@/components/cuscom/MyBread.vue";
import ECharts from "vue-echarts"; // refers to components/ECharts.vue in webpack

// import ECharts modules manually to reduce bundle size
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Moment from "moment";
Vue.filter("comverTime", function(data, format) {
  return Moment(data).format(format);
});
// 使用 vue 插件
Vue.use(ElementUI);
// 使用 axios
Vue.use(myServerHttp);
Vue.component("v-chart", ECharts);
Vue.config.productionTip = false;

// 全局定义面包屑组件
Vue.component(MyBread.name, MyBread);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
