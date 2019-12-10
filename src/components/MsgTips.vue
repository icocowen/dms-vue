<template>
    <el-drawer
        :visible.sync="drawer"
        direction="rtl"
        :show-close="false"
        :wrapperClosable='true'
    >
    <span>我来啦!</span>
    </el-drawer>
</template>

<script lang="ts">

import { Component,Vue } from 'vue-property-decorator';

@Component
export default class MsgTips extends Vue {
    
    public get drawer() {
        return this.$store.state.openMsgTips;
    }

 
    
    public set drawer(v : Boolean) {
        this.$store.state.openMsgTips = v;
    }
    

    
}
</script>
