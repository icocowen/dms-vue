<template>
  <div id="app">
    <!-- <router-view/> -->
    
    <el-container>
      <el-header style="padding:0"><TopNav/></el-header>
      <el-container>
        <el-aside width="auto"><LeftNav/></el-aside>
        <el-main style="background-color:#d9d9d9" ref="card">
         

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
          <!-- <ChangePassword :dialogVisible='true'/> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TopNav from './components/TopNav.vue';
import LeftNav from './components/LeftNav.vue';
import  MsgTips  from "./components/MsgTips.vue";
import  PathShow  from "./components/PathShow.vue";
// import ChangePassword from "@/components/ChangePassword.vue";
import { Component, Watch } from 'vue-property-decorator';


@Component({
  components: {
    TopNav,
    LeftNav,
    MsgTips,
    PathShow,
    // ChangePassword
  }
})
export default class App extends Vue {

  

  
  public get pathInfo() : Object[] {
    return this.$store.state.pathInfo;
  }

  public get adaptHeight(): Object {
    return this.$store.state.adaptHeight;
  }


  mounted() {
     const that = this;
     this.debounce(() => {
       that.$store.commit('fireWindowInnerHeight');
     },200);
  }

  // 可以提取为工具类
  debounce(callback:Function, time: number) {
      let resizeTimer:any = null;
     window.onresize= () => {
       if(resizeTimer) clearTimeout(resizeTimer);  
        resizeTimer = setTimeout(function(){
            callback();
        },time);  
     }
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
  .position{
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
  }

  html,body,#app,.el-container{
        /*设置内部填充为0，几个布局元素之间没有间距*/
        padding: 0px;
         /*外部间距也是如此设置*/
        margin: 0px;
        /*统一设置高度为100%*/
        height: 100%;
        background: none;
        
  }

  body {
    overflow: hidden;
  }
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



</style>