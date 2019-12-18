<template>
    <el-row :gutter="40">
        <el-col :span="12">
          <div class="outer-box" :style="getTimeLineAdaptHeight" >
            <div class='mid-hidden-box' >
              <div class="scroll-box"  :style="getTimeLineAdaptHeight" >
                
                <el-timeline>
                
                <transition-group name="remove" mode="in-out"> 
                <el-timeline-item 
                v-for="(item ) in boards.data"
                :key="item.id"
                :timestamp="item.inDate" placement="top">
               

                <el-card class="publish-item ">
                  <div slot="header" class="clearfix">
                    <span>{{boards.name}} 公告于 {{item.showDate}}</span>
                    <!-- 能够删除未发布的公告  发布时间 大于当前时间则出现删除按钮 -->
                    <el-button @click="handleRemoveBoard(item.id)" v-if="new Date().getTime() < new Date(item.showDate).getTime()" style="float: right;" type="danger" icon="el-icon-delete" size="mini" circle></el-button>
                  </div>
                  <h4 style="margin: 5px 0">{{JSON.parse(item.content).title}}</h4>
                  <span>{{JSON.parse(item.content).content}}</span>
                </el-card>


                </el-timeline-item>

                </transition-group>
                
              
                </el-timeline>
              </div></div></div>
             
        </el-col>
        <el-col :span="10">
            <el-row>
                <el-row>
                    
               <el-form ref="form" label-position="right" label-width="108px" :model="callBoard" :rules="rules">
                <el-form-item label="选择发布日期"  prop="date">
                  <el-date-picker
                    v-model="callBoard.date"
                    type="date"
                    placeholder="发布日期">
                  </el-date-picker>
                </el-form-item>

                <el-form-item label="标题"  prop="title">
                  <el-input v-model="callBoard.title" type="text"></el-input>
                </el-form-item>
                
                <el-form-item label="公告内容" prop="desc">
                  <el-input type="textarea" v-model="callBoard.desc"
                   maxlength="300"
                    show-word-limit
                    rows="10"
                    resize='none'
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="handleCreateBoard">创建公告</el-button>
                  <el-button @click="handleCancelBoard">取消</el-button>
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
import format from 'date-fns/format';

@Component
export default class PublishBoard extends Vue{

    callBoard:any = {
      date: new Date(),
      title: '',
      desc: ''
    };

    rules = {
       date: { required: true, message: '选择发布时间', trigger: 'blur' },
       title: { required: true, message: '请输入标题', trigger: 'blur' },
       desc: { required: true, message: '请输入描述信息', trigger: 'blur' }
    };
    private boards : any = {};

    created() {
      this.getCallBoard(this.updateCallBoard);
    }

    handleCancelBoard() {
      this.clearStatus();
    }

    updateCallBoard(data: any) {
      // console.warn(data);
      this.boards = data;
      this.clearStatus();
    }

    beforeDestroy() {
       this.clearStatus();
    }

    

    clearStatus() {
      let el = this.$refs.form as any;
       el.resetFields();
    }

    handleCreateBoard() {
      
       let el = this.$refs.form as any;
        el.validate((vaild:boolean) => {
             if(vaild) {
                this.createNewBoard(this.callBoard);
             }
        });
    }

    handleRemoveBoard(id: any) {
        this.deleteCallBoardItem(id);
    }

    deleteCallBoardItem(id : number) {
      this.axios.delete('/callboard?id=' + id)
                .then((response) => {
                  this.getCallBoard(this.updateCallBoard);
                    this.$notify({
                        title: '删除操作',
                        message: '删除公告信息成功',
                        type: 'warning',
                        duration: 3000
                      });
                })
                .catch((error) => {
                     this.$notify({
                        title: '删除操作',
                        message: '删除公告信息失败',
                        type: 'error',
                        duration: 3000
                      });
                })
    }


    createNewBoard(data:any) {
      let d = JSON.parse(JSON.stringify(data));
      d.date = format(data.date, 'yyyy-MM-dd');
      this.axios.post('/callboard', d)
                .then((response) => {
                  this.getCallBoard(this.updateCallBoard);
                  this.$notify({
                        title: '创建操作',
                        message: '新建公告信息成功',
                        type: 'success',
                        duration: 3000
                      });
                })
                .catch((error) => {
                   this.$notify({
                        title: '创建操作',
                        message: '新建公告信息失败',
                        type: 'warning',
                        duration: 3000
                      });
                });
    }


    


    getCallBoard(cal:Function) {
      this.axios.get('/callboard')
                .then((response) => {
                    cal(response.data);
                })
                .catch((error) => {
                     this.$message({
                      type: 'error',
                      message: '更新失败！'
                    });
                })
    }


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