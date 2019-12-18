<template>
    <el-row :style="getAdaptHeight" type="flex" align="middle" class="bg-class">
      <el-col :span="24">

        <el-card shadow='hover'  class="demo-ruleForm">

             <div slot="header" class="clearfix">
                <span>登录宿舍管理系统</span>
              </div>

            <el-form  ref="form" :model="Form" :rules="rules" status-icon  label-width="80px">
            <el-form-item label="账号" prop="username">
              <el-input placeholder="账号" type="text" v-model="Form.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input placeholder='密码' type="password" v-model="Form.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="imageCode" >
              <el-col :span="12">
                    <el-input placeholder="验证码" type="text" v-model.number="Form.imageCode" ></el-input>
              </el-col>
              <el-col :span="10" style="margin-left: 10px;">
                    <img :src="codeImg" alt="验证码" @click="handleChangeCodeImg">
              </el-col>
              
            </el-form-item>
            <el-form-item class="cancel-button-left">
              <el-button type="primary" @click="submitForm('Form')" plain style="width: 100%; ">登录</el-button>
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

  private codeImg:string = '';
  private codeImgheader:string = 'data:image/png;base64,';

   created() {
    this.getImgCode();
  }

  handleChangeCodeImg() {
    this.getImgCode();
  }




  rules = {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, message: '密码最少为6位', trigger: 'blur' }
          ],
          imageCode: [
            { required: true, message: '请输入验证码', trigger: 'blur' }
          ]
        };

  private loginSys(data: Object) {
     this.axios.post('/login', data)
          .then((response) => {
              this.$store.commit('fireSaveToken', response.headers.authorization);
             this.$message({
                message: '登录成功',
                type: 'success'
              });
              this.$router.replace({path: '/m', params: { username: this.Form.username }});
          }).catch((error) =>{
            switch (error.response.status) {
              case 401:
                this.$message.error('账号或密码错误');
                break;
              case 417:
                  this.$message.error(error.response.data);
                break;
            
              default:
                 this.$message.error('发生未知的错误');
                break;
            }
            
          })
  }



  private getImgCode() {
     this.axios.get('/code/img')
          .then((response) => {
              this.codeImg = this.codeImgheader + response.data;
          })
         
  }
  
  private adaptHeight : Number = window.innerHeight;
  private bg:any = {
    "height": this.adaptHeight+'px'
  };
 
  public get getAdaptHeight():String {
    this.bg['height'] = this.$store.state.windowInnerHeight + 'px';
    return this.bg;
  }


   private Form = {
          username: '',
          password: '',
          imageCode: ''
        };
  
  private submitForm(form:any) {
    // let to = this.$route.query.redirect;
    
    // if (to != null && to != undefined) {
    //   this.$router.replace({path: to.toString()});
    // }
    let el = this.$refs.form as any;
    el.validate((vaild : boolean) => {
      if(vaild) {
          this.loginSys(this.Form);
      }
    })
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