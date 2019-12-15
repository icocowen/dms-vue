<template>
 
    <!-- <router-view/> -->
    
    <el-container>
      <el-header style="padding:0"><TopNav/></el-header>
      <el-container>
        <el-aside width="auto"><LeftNav/></el-aside>
        <el-main style="background-color:#d9d9d9;" :style="hiddenScroll" ref="card">
         

        <!-- margin-bottom: 60px; -->

        <el-card class="box-card" :style="adaptHeight" >
          <div slot="header" class="clearfix">
            <PathShow :pathInfo="pathInfo"/>
          </div>
          <div>
              <transition name="fade" mode="out-in"> 
                <router-view v-wechat-title='$route.meta.title' class="position"/>
              </transition>
          </div>
        </el-card>

          <MsgTips/>
          <ChangePassword :visiable='launchShowVisiable'/>
        </el-main>
      </el-container>
    </el-container>
  
</template>

<script lang="ts">
import Vue from 'vue'
import TopNav from '@/components/TopNav.vue';
import LeftNav from '@/components/LeftNav.vue';
import  MsgTips  from "@/components/MsgTips.vue";
import  PathShow  from "@/components/PathShow.vue";
import ChangePassword from "@/components/ChangePassword.vue";
import { Component, Watch } from 'vue-property-decorator';


@Component({
  components: {
    TopNav,
    LeftNav,
    MsgTips,
    PathShow,
    ChangePassword
  }
})
export default class Management extends Vue {

  
    get launchShowVisiable(): boolean {
      return this.$store.state.passwordDialog;
    }

  

  
  public get hiddenScroll() : string {
    let hidtip = this.$store.state.adaptHeight;
    console.warn(hidtip);
    if (hidtip['overflow-y'] === 'hidden') {
      return 'overflow-y:hidden';
    }
     return 'overflow-y: auto';
  }
  

  
  public get pathInfo() : Object[] {
    return this.$store.state.pathInfo;
  }

  public get adaptHeight(): Object {
    let originStyle = this.$store.state.adaptHeight;
    return {'margin-bottom':originStyle['margin-bottom'], 'height': originStyle['height']};
  }









  
  
  // [
  //                     {
  //                     path:'首页',
  //                     to:'/'
  //                     },
  //                     {
  //                     path:'统计报表',
  //                     to:'/msgnotify'
  //                     }
  //                     ];  pathInfo
}
</script>

<style>

 
  a {
    text-decoration: none;
  }
  a:active {
    color: black;
  }
  a:visited {
    color: #655c57;
  }


  
  .fade-enter-active {
    -webkit-animation-name: slideInRight;
    animation-name: slideInRight;
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .fade-leave-active {
    -webkit-animation-name: slideOutLeft;
    animation-name: slideOutLeft;
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

@keyframes slideOutLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}


 

@keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}


.tips-red-ptr .el-badge__content.is-fixed {
   top: 22px ;
   right: 16px !important;
 }


</style>

