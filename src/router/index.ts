import Vue from 'vue'
import VueRouter, { Route } from 'vue-router'
import StatisticsReport from "@/views/StatisticsReport.vue";
import MsgNotify from "@/views/MsgNotify.vue";
import  PersonProfile  from "@/components/PersonProfile.vue";
import  DormSetup  from "@/components/DormSetup.vue";
import ChangePassword from "@/components/ChangePassword.vue";
import PublishBoard from "@/components/PublishBoard.vue";
import IllegalRecord from "@/components/IllegalRecord.vue";
import WaterRateRecord from "@/components/WaterRateRecord.vue";
import GradeDaily from "@/components/GradeDaily.vue";

import store from '@/store'

Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    name: 'home',
    component: StatisticsReport,
    meta: {
      title: '首页 - 宿舍管理系统',   // 标题设置
      path: '首页',
      adapteHeight: 'abnorm' //表示main主体是否适配高度
    }
  },
  {
    path: '/msgnotify',
    name: 'msgnotify',
    component: MsgNotify,
    meta: {
      title: '消息通知 - 宿舍管理系统',   // 标题设置
      path: '消息通知'
    }
  },
  {
    path: '/illegalrecord',
    name: 'illegalrecord',
    component: IllegalRecord,
    meta: {
      title: '违纪登记 - 宿舍管理系统',   // 标题设置
      path: '违纪登记'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: PersonProfile,
    meta: {
      title: '个人信息 - 宿舍管理系统',   // 标题设置
      path: '个人信息'
    }
  },
  {
    path: '/gradedaily',
    name: 'gradedaily',
    component: GradeDaily,
    meta: {
      title: '每日评分 - 宿舍管理系统',   // 标题设置
      path: '每日评分'
    }
  },
  {
    path: '/waterraterecord',
    name: 'waterraterecord',
    component: WaterRateRecord,
    meta: {
      title: '水费记录 - 宿舍管理系统',   // 标题设置
      path: '水费记录'
    }
  },
  {
    path: '/dormsetup',
    name: 'dormsetup',
    component: DormSetup,
    meta: {
      title: '公寓设置 - 宿舍管理系统',   // 标题设置
      path: '公寓设置'
    }
  },
  {
    path: '/publishboard',
    name: 'publishboard',
    component: PublishBoard,
    meta: {
      title: '公告板 - 宿舍管理系统',   // 标题设置
      path: '公告板'
    }
  },
  {
    path: '/ss',
    name: 'ss',
    component: ChangePassword,
    meta: {
      title: 'ss - 宿舍管理系统',   // 标题设置
      path: 'ss'
    }
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
  // 导航守卫
  parsePathInfo(to);
  adapteMainHeight(to);
  next();
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
  store.commit('firePathInfo',  data);
}


export default router
