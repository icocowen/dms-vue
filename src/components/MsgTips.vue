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
                     <el-tab-pane label="提醒列表" name="second">

                        <el-collapse accordion :style="getAdaptHeight" >
                        <el-collapse-item v-for="d in dataList" :key="d.id">
                            <template slot="title">
                            <i :class="d.icon" style="margin-right: 20px; color:#409eff"></i>{{d.title}} 
                            </template>
                            <div>{{d.content}}</div>
                        </el-collapse-item>
                         <div style="width: 100%; display:flex; margin-top: 6px;">
                             <el-button size="mini" style="margin: 0 auto;">加载更多</el-button>
                         </div>

                        </el-collapse>


                     </el-tab-pane>
                    <el-tab-pane label="设置提醒" name="third">

<el-form ref="form" :model="form" label-width="40px"  size="mini" style="margin-top: 20px">

  <el-form-item label="主题" >
    <el-input v-model="form.title" size="mini"></el-input>
  </el-form-item>
  <el-form-item label="时间">
    <el-col :span="10">
      <el-time-picker size="mini" placeholder="选择时间" v-model="form.date" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="重复">
     <el-radio-group v-model="form.repet"  size="mini" @change="radioChangeEvent">
      <el-radio-button label="每天"></el-radio-button>
      <el-radio-button label="周一至周五"></el-radio-button>
      <el-radio-button label="周六日"></el-radio-button>
      <el-radio-button label="自定义" ></el-radio-button>
    </el-radio-group>
    <transition name="fade"> 
        <el-checkbox-group v-if="diy" v-model="checkboxGroup4" size="mini" style="margin-top: 10px">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
    </transition>
     
  </el-form-item>
  <el-form-item label="备注">
    <el-input type="textarea" v-model="form.remark"
        rows="3"
        show-word-limit
        resize='none'
        maxlength="25"
    ></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary"  size="mini">立即创建</el-button>
    <el-button size="mini">取消</el-button>
  </el-form-item>
</el-form>

                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
    </el-drawer>

</template>

<script lang="ts">

import { Component,Vue } from 'vue-property-decorator';

@Component
export default class MsgTips extends Vue {
    private diy : boolean = false;

    radioChangeEvent(val:string) {
        if(val === '自定义') {
            this.diy = true;
        }else {
            this.diy = false;
        }
    }
    
    public get getAdaptHeight() : string {
        let winHeight = this.$store.state.windowInnerHeight;
        return 'height:'+(winHeight - 80)+"px";
    }

     checkboxGroup4 = [];
     cities = ['周一', '周二', '周三', '周四','周五','周六','周日'];
    
    form = {
         date: '',
         title: '',
         repeat: '',
         remark:''
        };

    dataList = [{
        icon: 'el-icon-message-solid',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },
    {
        icon: 'el-icon-message-solid',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },
    {
        icon: 'el-icon-message-solid',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },{
        icon: 'el-icon-message-solid',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },
    {
        icon: 'el-icon-message-solid',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },
    {
        icon: 'el-icon-message-solid',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },{
        icon: 'el-icon-message-solid',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    },
    {
        icon: 'el-icon-message-solid',
        title: '一致性 Consistency',
        content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
    }];

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
