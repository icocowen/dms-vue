<template>
    <el-row :gutter="40">
        <el-col :span="12">
          <div class="outer-box" :style="getTimeLineAdaptHeight" >
            <div class='mid-hidden-box' >
              <div class="scroll-box"  :style="getTimeLineAdaptHeight" >
                
                <el-timeline>
                <el-timeline-item timestamp="2018/4/12" placement="top">
               

                <el-card class="publish-item ">
                  <div slot="header" class="clearfix">
                    <span>王小虎 提交于 {{targetDate}}</span>
                    <!-- 能够删除未发布的公告  发布时间 大于当前时间则出现删除按钮 -->
                    <el-button v-if="new Date().getTime() < new Date(targetDate).getTime()" style="float: right;" type="danger" icon="el-icon-delete" size="mini" circle></el-button>
                  </div>
                  <h4>更新 Github 模板</h4>
                </el-card>


                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/3" placement="top">
                  <el-card class="publish-item ">
                    <div slot="header" class="clearfix">
                      <span>王小虎 提交于 {{targetDate}}</span>
                      <!-- 能够删除未发布的公告  发布时间 大于当前时间则出现删除按钮 -->
                      <el-button v-if="new Date().getTime() < new Date(targetDate).getTime()" style="float: right;" type="danger" icon="el-icon-delete" size="mini" circle></el-button>
                    </div>
                    <h4>更新 Github 模板</h4>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/2" placement="top">
                <el-card class="publish-item " style="background-color: #faecd8">
                  <div slot="header" class="clearfix">
                    <span>王小虎 提交于 {{targetDate}}</span>
                    <!-- 能够删除未发布的公告  发布时间 大于当前时间则出现删除按钮 -->
                    <el-button v-if="new Date().getTime() < new Date(targetDate).getTime()" style="float: right;" type="danger" icon="el-icon-delete" size="mini" circle></el-button>
                  </div>
                  <h4>更新 Github 模板</h4>
                </el-card>
                </el-timeline-item>
            </el-timeline>

              </div></div></div>
             
        </el-col>
        <el-col :span="10">
            <el-row>
                <el-row>
                    
               <el-form label-position="right" label-width="108px" :rules="rules">
                <el-form-item label="选择发布日期"  prop="date">
                  <el-date-picker
                    v-model="value1"
                    type="date"
                    
                    placeholder="发布日期">
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="公告内容" prop="desc">
                  <el-input type="textarea" v-model="desc"
                   maxlength="300"
                    show-word-limit
                    rows="15"
                    resize='none'
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" >创建公告</el-button>
                  <el-button>取消</el-button>
                </el-form-item>
              </el-form>
                                    
                        
                    
                </el-row>
            </el-row>
          
        </el-col>
    </el-row>
</template>


<script lang="ts">

import Vue from 'vue'
import { Component } from 'vue-property-decorator';

@Component
export default class PublishBoard extends Vue{
    private value1 = '';
    private desc = '';
    targetDate = '2019/12/11 20:46';

    rules = { 
      date: [
            { type: 'date', required: true, message: '请选择发布日期', trigger: 'change' }
          ],
      desc: [
          { required: true, message: '请填写发布内容', trigger: 'blur' }
      ]
      };

    public get getTimeLineAdaptHeight() : string {
         return "height:"+(this.$store.state.windowInnerHeight - 60 - 80 - 51)+"px"; 
    }
}

</script>

<style scoped>

.publish-item {
   width: 400px;
}

.bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  } 



    .outer-box {
      /* height: 444px; */
      width: 100%;
      position: relative;
      overflow: hidden;
    }
    .mid-hidden-box {
      overflow: hidden scroll;
      position: absolute;
    }

    .scroll-box{
      width: 1000px;
      /* height: 444px; */
    }
</style>