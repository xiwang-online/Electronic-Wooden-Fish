import { createApp } from 'vue'
import router from './router'       //引入路由
import store from './store'         //引入vuex
import axios from 'axios'          //引入axios
import VueAxios from 'vue-axios'    //引入vue-axios
import ECharts from 'vue-echarts'    //引入echarts
import "echarts";                   //全局引入echarts，为了减少打包体积，可以按模块引入：https://github.com/ecomfe/vue-echarts/blob/main/README.zh-Hans.md
import App from './App.vue'
import './index.css'

import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';



createApp(App).use(router).use(store).use(VueAxios,axios).use(ElementPlus)
.component('ECharts',ECharts)
.mount('#app')

axios.defaults.baseURL = 'http://localhost:3000';  //设置默认路由前缀
//axios.defaults.baseURL = 'https://www.xiwang.online';  //部署
