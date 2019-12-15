<template>
    <el-row :style="getAdaptHeight" type="flex" align="middle" class="bg-class">
      <el-col :span="24">

        <el-card shadow='hover'  class="demo-ruleForm">

             <div slot="header" class="clearfix">
                <span>登录宿舍管理系统</span>
              </div>

            <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="60px">
            <el-form-item label="账号" prop="username">
              <el-input placeholder="账号" type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input placeholder='密码' type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="verifyCode" >
              <el-input placeholder="验证码" v-model.number="ruleForm.age" style="width: 100px"></el-input>
              <span style="margin-left: 20px">验证码</span>
            </el-form-item>
            <el-form-item class="cancel-button-left">
              <el-button type="primary" @click="submitForm('ruleForm')" plain style="width: 100%; ">登录</el-button>
            </el-form-item>
          </el-form>

        </el-card>
         


      </el-col>
    </el-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  
  private adaptHeight : Number = window.innerHeight;
  private bg:any = {
    "height": this.adaptHeight+'px'
  };
 
  public get getAdaptHeight():String {
    this.bg['height'] = this.$store.state.windowInnerHeight + 'px';
    return this.bg;
  }


   private ruleForm = {
          username: '',
          password: '',
          verifyCode: ''
        };
  
  private submitForm(a: any) {
    let to = this.$route.query.redirect as string;
    console.warn(to);
    if (to != null && to != undefined) {
      this.$router.replace({path: to});
    }
  }

}
</script>
<style >
.cancel-button-left .el-form-item__content {
  margin-left: 2px !important;
  
}
.demo-ruleForm {
  width: 360px;
  margin: 0 auto;
}
.bg-class {
   
  background-image: url('../assets/2018071719247.jpg');
   background-repeat: no-repeat;
    background-position: 50% 50%; 
}
</style>