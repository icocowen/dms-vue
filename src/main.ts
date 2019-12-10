import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import './assets/element-theme/index.css';
import VueWechatTitle from 'vue-wechat-title';
import axios from 'axios'
import VueAxios from 'vue-axios'



 
Vue.use(VueAxios, axios)

Vue.use(VueWechatTitle)

Vue.use(ElementUI);

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
