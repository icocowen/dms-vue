import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import './assets/element-theme/index.css';
import VueWechatTitle from 'vue-wechat-title';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Echarts from 'echarts';



Vue.prototype.$echarts = Echarts;

/* 创建axios实例 */
const service = axios.create({
  baseURL: "/api", //** 基础地址 要请求的url前缀  
  timeout: 5000 // 请求超时时间
});

service.interceptors.request.use( config => {
  
  // console.warn(config);
  // if (config.method === 'put') {
  //    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
  // }
  if(config.url !== '/code/img' && config.url !== '/login') {
    if (store.state.token) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // console.warn(store.state.token);
      config.headers.authorization = store.state.token;
    }
  }
  return config;
},
err => {
  return Promise.reject(err);
});


service.interceptors.response.use(
  response => {
      return response;
  },
  error => {
      if (error.response) {
          switch (error.response.status) {
              case 401:
                  // 这里写清除token的代码
                  router.replace({
                      path: '/login'
                  })
          }
      }
      return Promise.reject(error);
  });



Vue.use(VueAxios, service)

Vue.use(VueWechatTitle)

Vue.use(ElementUI);

Vue.config.productionTip = false




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
