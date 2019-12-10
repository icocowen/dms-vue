<template>
    <header class="top-bar">
      <div class="left-area">
        <h1 style="float:left" :style="adaptLeftNav">
          <img style="float:left" src="../assets/dormlog.png" alt="dorm log"/>
          <span class="appName">{{appName}}</span>
        </h1>
        <el-button style="float:left; margin:10px; color:white" type="text" :icon="icon" circle @click="fireCollapse"></el-button>
      </div>
      
      <div class="nav">
        <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        :router='true'
         >
        <el-menu-item>
          <!-- <img src="../assets/full.png" alt="全屏" class="screenicon"> -->
          <img :src="screenIcon" :alt="screenTip"  :title="screenTip" class="screenicon" @click="fireScreenOpe">
        </el-menu-item>
        <el-menu-item >
          <i class="el-icon-bell" style="color:white" @click="fireShowMsgTips" title="消息"></i>
        </el-menu-item>
        <el-submenu index="3">

          <template slot="title">
             <el-avatar :size="28" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              <span class="alias" style="margin: 0 5px; color:white">张德帅</span>
          </template>
          <el-menu-item index="/profile">个人信息</el-menu-item>
          <el-menu-item>更改密码</el-menu-item>
          <el-menu-item>退出</el-menu-item>
                
                  


          
        </el-submenu>
        </el-menu>
      </div>
    </header>
</template>



<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'TopNav'
})
export default class TopNav extends Vue {
    private appName:String = '';
    private screenIcon:String = require('../assets/full.png');
    private screenTip:String = '全屏';
    private adaptLeftNav = {
      width: '64px'
    }
    private icon:String = 'el-icon-s-unfold';
    activeIndex:String =  '1'

    fireShowMsgTips() {
      this.$store.commit('fireMsgTips');
    }

    fireScreenOpe() {
      let element = document.documentElement;
      if(this.screenTip === '全屏') {
        this.screenIcon = require('../assets/exitfull.png');
        this.screenTip = '退出全屏';
        element.requestFullscreen();
      }else{
         this.screenIcon = require('../assets/full.png');
        this.screenTip = '全屏';
        document.exitFullscreen();
      }
    }

    fireCollapse() {
      if(this.icon === 'el-icon-s-unfold') {
        this.adaptLeftNav['width'] = '200px';
        this.appName = '宿舍管理系统';
        this.icon = 'el-icon-s-fold';
      }else{
        this.adaptLeftNav['width'] = '64px';
        this.appName = '';
        this.icon = 'el-icon-s-unfold';
      }
      this.$store.commit('fireCollapse');
    }
}


</script>

<style scoped>

  .appName {
    display: block;
    float:left;
    font-size: 0.6em;
    margin-top: 19px;
    font-weight: normal;
    color: #feffff;
  }
  .top-bar{
    display: flex;
    justify-content: space-between;
    background-color: rgb(84, 92, 100);
    height: 60px;
  }
  h1{
    margin-top: 0;
    margin-bottom: 0; 
    transition: width .3s;
  }
  .screenicon{
    width: 18px;
    height: 18px;
    margin: 0;
  }
  img{
    width: 28px;
    height: 28px;
    margin: 17px;
  }
</style>