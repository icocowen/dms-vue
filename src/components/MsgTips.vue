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

                        <transition-group name="remove" mode="in-out">
                            <el-collapse-item v-for="d in data" :key="d.id">
                                <template slot="title">
                                <i :class="d.icon" style="margin-right: 20px; color:#e6a23c"></i>{{d.title}} 
                                <el-button type="text" @click.stop="handleRemoveTipsEvent(d.id)" icon="el-icon-delete" style="margin-left: 10px;color:#f56c6c;"></el-button>

                                </template>
                                
                                    <div>{{d.content}}</div>
                            
                            </el-collapse-item>
                         </transition-group>
                        
                         <div style="width: 100%; display:flex; margin: 6px 0;">
                             <el-button title="加载更多" size="mini" @click="getMoreAlert"  type="text" style="margin: 0 auto;" icon="el-icon-more"></el-button>
                         </div>

                        </el-collapse>
                    
                        
                    </el-tab-pane>
                     <el-tab-pane label="提醒列表" name="second" >

                        <el-collapse accordion :style="getAdaptHeight" >
                        <el-collapse-item v-for="d in dataList" :key="d.id">
                            <template slot="title">
                            <i :class="d.icon" style="margin-right: 20px; color:#409eff"></i>{{d.title}} 
                            <el-button type="text" @click="handleEditTipsEvent" icon="el-icon-edit" style="margin-left: 10px;color:#e6a23c;"></el-button>
                            </template>
                            <!-- <div>{{d.content}}</div> -->
                            <div class="alert-item">
                             
                                <span><strong>时间: </strong>8:00</span>
                                <el-divider></el-divider>
                                <span><strong>重复: </strong>
                                    <el-tag type="success" size="mini" class="tag-margin">周一</el-tag>
                                    <el-tag type="success" size="mini" class="tag-margin">周二</el-tag>
                                    <el-tag type="success" size="mini" class="tag-margin">周三</el-tag>
                                    <el-tag type="success" size="mini" class="tag-margin">周四</el-tag>
                                    <el-tag type="success" size="mini" class="tag-margin">周五</el-tag>
                                    <el-tag type="success" size="mini" class="tag-margin">周六</el-tag>
                                    <el-tag type="success" size="mini" class="tag-margin">周日</el-tag>
                               
                                </span>
                                <el-divider></el-divider>
                                <span><strong>备注: </strong>今天检查三四楼</span>
                                
                            </div>
                        </el-collapse-item>
                         <div style="width: 100%; display:flex; margin: 6px 0;">
                             <el-button @click="getMoreTips" title="加载更多" size="mini"  type="text" style="margin: 0 auto;" icon="el-icon-more"></el-button>
                         </div>

                        
                        </el-collapse>

                        
                     </el-tab-pane>
                   
                </el-tabs>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24" style="display: flex; justify-content: center; margin-top: 6px" v-if='isTipsList'>
                <el-button size="mini" type="danger" @click="addTips" ><i class="el-icon-edit"></i> 增加提醒</el-button>
            </el-col>
        </el-row>
        
        <el-drawer
            :title="innerDrawerTitle"
            :append-to-body="true"
            size='26%'
            :visible.sync="innerDrawer" class="setup-tips">
            <TipsSetup :functionName="functionName" />
        </el-drawer>
    </el-drawer>

</template>

<script lang="ts">

import { Component,Vue } from 'vue-property-decorator';
import TipsSetup from './TipsSetup.vue';

@Component({
    components: {
        TipsSetup
    }
})
export default class MsgTips extends Vue {
    private innerDrawerTitle: string = '设置提醒';
    private innerDrawer:boolean =  false;
    private isTipsList: boolean = false;
    private functionName:string = '立即创建';

    public handleRemoveTipsEvent(id : number) {
        this.data = this.data.filter(d => {
            if(d.id != id){
                return d;
            }
        })
    }
    
    public getMoreTips() {
        /**添加更多提醒信息 */
    }


     public getMoreAlert() {
         /**
          * 查看 更多alert信息
          */
        // this.data = this.data.concat(this.data.slice(0, 5));
        // console.warn(this.dataList.length);

    }


    public handleEditTipsEvent(e: Event) {
        e.stopPropagation();
        this.innerDrawerTitle = '修改提醒';
        this.functionName = '确认修改';
        this.innerDrawer = true;

        // this.innerDrawerTitle = '设置提醒';
    }

    public addTips() {
        this.innerDrawerTitle = '设置提醒';
         this.functionName = '立即创建';
        this.innerDrawer = true;
    }

    public handleClick(tab: any) {
        if(tab.label === '提醒列表') this.isTipsList = true;
        else this.isTipsList = false;
    }
    

    

    
    
    public get getAdaptHeight() : string {
        let winHeight = this.$store.state.windowInnerHeight;
        return 'height:'+(winHeight - 84)+"px";
    }

   
   
    dataList = [
     {
         id: 1,
        icon: 'el-icon-message-solid',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },
     {
          id: 2,
        icon: 'el-icon-message-solid',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },
     {
          id: 3,
        icon: 'el-icon-message-solid',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },
     {
          id: 4,
        icon: 'el-icon-message-solid',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },
     {
          id: 5,
        icon: 'el-icon-message-solid',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },
     {
          id: 6,
        icon: 'el-icon-message-solid',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },
     {
          id: 7,
        icon: 'el-icon-message-solid',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    }];

    data = [{
        id: 112,
        icon: 'el-icon-info',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },
    {   
        id: 114,
        icon: 'el-icon-info',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },
    {
        id: 115,
        icon: 'el-icon-info',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },{
        id: 116,
        icon: 'el-icon-info',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },
    {
        id: 117,
        icon: 'el-icon-info',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },
    {
        id: 118,
        icon: 'el-icon-info',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },{
        id: 119,
        icon: 'el-icon-info',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },
    {
        id: 120,
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

    .alert-item .el-divider--horizontal {
        margin: 3px 0;
    }

    .tag-margin {
        margin-right: 2px;
    }
   
   
    

 


    .remove-enter-active, .remove-leave-active {
         transition: all 0.8s;
    }
    .remove-enter, .remove-leave-to
    /* .list-leave-active for below version 2.1.8 */ {
        opacity: 0;
        transform: translateX(60px);
    }
   



</style>
