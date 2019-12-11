<template>
    <el-drawer
        :visible.sync="drawer"
        size="26%"
        direction="rtl"
        :show-close="false"
        :wrapperClosable='true'
        :with-header='false'
    >
        <el-row>
            <el-col class="msg-tab" >
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="消息通知" name="first" >
                        
                        <el-collapse accordion :style="getAdaptHeight" >
                        <el-collapse-item v-for="d in data" :key="d.id">
                            <template slot="title">
                            <i :class="d.icon" style="margin-right: 20px; color:#e6a23c"></i>{{d.title}} 
                            </template>
                            <div>{{d.content}}</div>
                        </el-collapse-item>
                         <div style="width: 100%; display:flex; margin-top: 6px;">
                             <el-button size="mini" style="margin: 0 auto;">加载更多</el-button>
                         </div>

                        </el-collapse>
                    
                        
                    </el-tab-pane>
                    <el-tab-pane label="设置提醒" name="second">设置提醒</el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
    </el-drawer>

</template>

<script lang="ts">

import { Component,Vue } from 'vue-property-decorator';

@Component
export default class MsgTips extends Vue {
    
    public get getAdaptHeight() : string {
        let winHeight = this.$store.state.windowInnerHeight;
        return 'height:'+(winHeight - 80)+"px";
    }
    

    data = [{
        icon: 'el-icon-info',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },
    {
        icon: 'el-icon-info',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },
    {
        icon: 'el-icon-info',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },{
        icon: 'el-icon-info',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },
    {
        icon: 'el-icon-info',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },
    {
        icon: 'el-icon-info',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },{
        icon: 'el-icon-info',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },
    {
        icon: 'el-icon-info',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    }];


    tableData = [{
        icon: 'el-icon-warning',
        event: '进行每日登记'
    }]
    activeName = 'first';
    
    public get drawer() {
        return this.$store.state.openMsgTips;
    }

 
    
    public set drawer(v : Boolean) {
        this.$store.state.openMsgTips = v;
    }
    

    
}
</script>
<style >
    .msg-tab .el-tabs__header {
        margin-bottom: 0;
        padding: 0 20px;
    }
    .msg-tab .el-tabs__content {
        padding: 0 20px;
        overflow-y: auto;
    }
    .msg-tab {
        min-width: 300px;
    }
</style>
