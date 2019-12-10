<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item  :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item  v-for="info in pathInfo" :key="info.path" :to="{ path: info.to }">{{info.path}}</el-breadcrumb-item>
    </el-breadcrumb>    
</template>


<script lang="ts">
    import Vue from 'vue'
    import { Component, Prop, Watch } from 'vue-property-decorator';

    @Component
    export default class PathShow extends Vue {
        // 传进来一个对象数组，{path, to} pathinfo: 中文位置，to为路由路径
        // 然后用for循环输出即可

      @Prop()
      private pathInfo !: Object[];

    }
</script>

<style>

</style>