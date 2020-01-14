<template>
  <div id="app">
    <transition name="index-anima" mode="out-in">
      <router-view v-wechat-title='$route.meta.title' />
    </transition>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator';


@Component({})
export default class App extends Vue {


    mounted() {
     const that = this;

      let resizeTimer:any = null;
     window.onresize= () => {
       if(resizeTimer) clearTimeout(resizeTimer);  
        resizeTimer = setTimeout(function(){
            that.$store.commit('fireWindowInnerHeight');
             that.$store.commit('fireWindowInnerWidth');
        },200);  
     }
  }
}
</script>
<style>

  .index-anima-enter-active {
     -webkit-animation-name: lightSpeedIn;
    animation-name: lightSpeedIn;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .index-anima-leave-active {
     -webkit-animation-name: lightSpeedOut;
  animation-name: lightSpeedOut;
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
    -webkit-animation-duration: .2s;
    animation-duration: .2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }


  
@keyframes lightSpeedIn {
  from {
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}







  @keyframes lightSpeedOut {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}

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
</style>