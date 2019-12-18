import Vue from 'vue'
import VueRouter, { Route } from 'vue-router'
import StatisticsReport from "@/views/StatisticsReport.vue";
import MsgNotify from "@/views/MsgNotify.vue";
import  PersonProfile  from "@/components/PersonProfile.vue";
import  DormSetup  from "@/components/DormSetup.vue";
import PublishBoard from "@/components/PublishBoard.vue";
import IllegalRecord from "@/components/IllegalRecord.vue";
import WaterRateRecord from "@/components/WaterRateRecord.vue";
import GradeDaily from "@/components/GradeDaily.vue";

import store from '@/store'

Vue.use(VueRouter)


// {
//   path: '/',
//   name: 'home',
//   component: StatisticsReport,
//   meta: {
//     title: '首页 - 宿舍管理系统',   // 标题设置
//     path: '首页',
//     adapteHeight: 'abnorm' //表示main主体是否适配高度
//   }
// },

import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Page404 from '@/views/404.vue';
// import Management from '@/views/Management.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首页',   // 标题设置
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: '登录 - 宿舍管理系统',   // 标题设置
    }
  },
  {
    path: '/m',
    component: () => import('@/views/Management.vue'),
    children: [
      {
        path: '',
        redirect: 'statisticsreport'
      },{
        path: 'statisticsreport',
        name: 'statisticsreport',
        component: () => import('@/views/StatisticsReport.vue'),
        meta: {
          title: '统计报表 - 宿舍管理系统',   // 标题设置
          path: '统计报表',
          adapteHeight: 'abnorm', //表示main主体是否适配高度
          requiresAuth: true
        }
      },
      {
        path: 'msgnotify',
        name: 'msgnotify',
        component: () => import('@/views/MsgNotify.vue'),
        meta: {
          title: '消息通知 - 宿舍管理系统',   // 标题设置
          path: '消息通知',
          requiresAuth: true
        }
      },
      {
        path: 'illegalrecord',
        name: 'illegalrecord',
        component:  () => import('@/components/IllegalRecord.vue'),
        meta: {
          title: '违纪登记 - 宿舍管理系统',   // 标题设置
          path: '违纪登记',
          requiresAuth: true
        }
      },
      {
        path: 'profile',
        name: 'profile',
        component:  () => import('@/components/PersonProfile.vue'),
        meta: {
          title: '个人信息 - 宿舍管理系统',   // 标题设置
          path: '个人信息',
          requiresAuth: true
        }
      },
      {
        path: 'gradedaily',
        name: 'gradedaily',
        component: GradeDaily,
        meta: {
          title: '每日评分 - 宿舍管理系统',   // 标题设置
          path: '每日评分',
          requiresAuth: true
        }
      },
      {
        path: 'waterraterecord',
        name: 'waterraterecord',
        component: WaterRateRecord,
        meta: {
          title: '水费记录 - 宿舍管理系统',   // 标题设置
          path: '水费记录',
          requiresAuth: true
        }
      },
      {
        path: 'dormsetup',
        name: 'dormsetup',
        component: DormSetup,
        meta: {
          title: '公寓设置 - 宿舍管理系统',   // 标题设置
          path: '公寓设置',
          requiresAuth: true
        }
      },
      {
        path: 'publishboard',
        name: 'publishboard',
        component: PublishBoard,
        meta: {
          title: '公告板 - 宿舍管理系统',   // 标题设置
          path: '公告板',
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: Page404
  }
]
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
// ]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // // 导航守卫
  parsePathInfo(to);
  adapteMainHeight(to);
  // console.warn(to);
  // console.warn(from);
  if (to.meta.requiresAuth) {
    if(store.state.token == null ||  store.state.token == undefined || store.state.token.length == 0) {
      next({name: 'login', query: {redirect: to.fullPath} });
      return;
    }
  }
  next();
  
  // next();
})
//适配main高度
function adapteMainHeight(to: Route) { 
  let direct = to.meta.adapteHeight;
  direct = direct == null || direct == undefined ? 'norm': 'abnorm';
  store.commit('fireadaptHeight', direct);
}


//面包屑
function parsePathInfo(to: Route) {
  let data: Object[] = [];
  for (const routeInfo of to.matched) {
    
    if (routeInfo.name !== 'home') {
        data.push({'path': routeInfo.meta.path, 'to': routeInfo.path}); 
    }
    
  }
  store.commit('firePathInfo',  data.slice(1, data.length));
}


export default router
