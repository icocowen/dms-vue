<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover">
        <el-row >
          <el-col :span="24" class="prop-center">
            <el-upload
              :limit="1"
              accept=".png,.jpg"
              >
                <el-avatar class="upload-shadow" :size="100" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"> </el-avatar>
              </el-upload>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" class="prop-center">
            <span>张德帅</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" class="prop-center">
            <span style="font-size: .8em; color: gray;">超级管理员</span>
          </el-col>
        </el-row>
        <el-row class="info">
          <el-col :span="24"> 
            <el-row :gutter="10">
              <el-col :span="2"><i class="el-icon-s-custom"></i></el-col>
              <el-col :span="22">17231503152</el-col>
            </el-row>

          <el-row :gutter="10">
              <el-col :span="2"><i class="el-icon-phone"></i></el-col>
              <el-col :span="22">15619332885</el-col>
            </el-row>

            <el-row :gutter="10" >
              <el-col :span="2"><i class="el-icon-user-solid"></i></el-col>
              <el-col :span="22" style="color:#409eff "><i class="el-icon-male"></i></el-col>
            </el-row>
            <el-divider></el-divider>
            <el-row>
              <el-col :span='2'>
                <i class="el-icon-coordinate"></i>
              </el-col>
              <el-col :span='22'>
                402房
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
         
    </el-col>
    
    <el-col :span="16">
         <el-tabs value ="first">
            <el-tab-pane label="基本信息" name="first">
    
    <el-col :span="20">
        <el-form ref="form" :model="form" label-width="80px" size="small">
          <el-form-item label="姓名">
            <el-input v-model="form.name" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="form.gender">
                <el-radio label="male">男</el-radio>
                <el-radio label="female">女</el-radio>
              </el-radio-group>
          </el-form-item>
          <el-form-item label="工号">
            <el-input v-model="form.workId" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="电话">
              <el-input v-model="form.phoneNum"></el-input>
          </el-form-item>
          <el-form-item label="房间">
            <el-input v-model="form.roomNum">
              <template slot="append">房</template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="small">更新基本信息</el-button>
          </el-form-item>
        </el-form>
    </el-col>




            </el-tab-pane>
        </el-tabs>
    </el-col>
</el-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator';

@Component
export default class PersonProfile extends Vue {
   private form:{} =  {
          name: '张德帅',
          gender: 'male',
          workId: '17231503152',
          phoneNum: '15619332885',
          roomNum: '402'
        };
     onSubmit() {
        console.log('submit!');
    }
}
</script>

<style scoped>
  .info {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    color: #555555;
  }
  .prop-center {
      display:flex; 
      justify-content: center;
  }

  .upload-shadow{
    position: relative;
  }
  .upload-shadow:hover::after {
    content: '上传头像';
    width: 100px;
    height: 100px;
    background-color:#5b5959c7;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>