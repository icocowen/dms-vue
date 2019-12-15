<template>
<div id="leftNav">
    <el-menu default-active="1-4-1" 
    class="el-menu-vertical-demo" 
    :collapse="collapseState"
    active-text-color="#387ba2"
    :router='true'
    :unique-opened='true'
    >
    <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span slot="title">主控面板</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/">统计报表</el-menu-item>
        </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="/gradedaily">
        <i class="el-icon-s-claim"></i>
        <span slot="title">每日评分</span>
    </el-menu-item>
    <el-submenu index="3" >
         <template slot="title">
          <i class="el-icon-money"></i>
          <span slot="title">管理费用</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/waterraterecord">水费记录</el-menu-item>
        </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">其他功能</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/publishboard">公示板</el-menu-item>
          <el-menu-item index="/illegalrecord">违纪登记</el-menu-item>
        </el-menu-item-group>
    </el-submenu>


     <el-menu-item index="/dormsetup">
        <i class="el-icon-s-tools"></i>
        <span slot="title">公寓设置</span>
    </el-menu-item>
    </el-menu>
</div>
</template>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LeftNav extends Vue {

 
   
    
    public get collapseState() {
        return this.$store.state.isCollapse;
    }
   
      
  
  
    
}


</script>
