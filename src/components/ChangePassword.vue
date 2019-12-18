<template>
      <el-dialog
    title="修改密码"
    :visible.sync="showDialog"
    width="30%"
    @close="handleClose"
    >

    <el-form ref="form" :model="form" label-width="80px" size="mini" :rules="rules">
      <el-form-item label="旧密码"  prop="pwd">
        <el-input v-model="form.pwd" type="password"></el-input>
      </el-form-item>
      <el-form-item label="新密码"  prop="newPwd">
        <el-input v-model="form.newPwd" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码"  prop="confirm">
        <el-input v-model="form.confirm" type="password"></el-input>
      </el-form-item>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="showDialog = false" size="small">取 消</el-button>
      <el-button type="primary" size="small" @click="submitForm('form')">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script lang='ts'>

import Vue from 'vue';

import { Component, Prop, Watch } from 'vue-property-decorator';
@Component
export default class DialogMask extends Vue {

  @Prop()
  private visiable !: boolean;

  rules = {
      pwd: { required: true, message: '请输入旧密码', trigger: 'blur' },
      newPwd: [
      { required: true, message: '请输入新密码', trigger: 'blur' }
      ,{ min: 6, validator: this.confireNewPwd, trigger: 'blur' }],
      confirm: { required: true, validator: this.confirePwd , trigger: 'blur' }
  }

  private confireNewPwd(rule:any, value:any, callback:any) {
   
      if (!value) {
						callback(new Error('请输入新密码'));
        } else if(value.length < 6) {
          callback(new Error('密码最少为6位'));
        }else if(value === this.form.pwd) {
          callback(new Error('新密码不能与旧密码相同'));
        }else {
          callback();
        }
  }

    private confirePwd(rule:any, value:any, callback:any) {
       if (!value) {
						callback(new Error('请输入确认密码'));
        } else if (value !== this.form.newPwd) {
          callback(new Error('确认密码与新密码不相同'));
        } else {
          callback();
        }
    }

    private handleClose() {
      let el = this.$refs.form as any;
      el.resetFields();
    }
  

    private submitForm(form:any) {
    // let to = this.$route.query.redirect;
    
    // if (to != null && to != undefined) {
    //   this.$router.replace({path: to.toString()});
    // }
      let el = this.$refs.form as any;
      el.validate((vaild : boolean) => {
        if(vaild) {
            // this.loginSys(this.form);
            if (this.form.newPwd === this.form.confirm) {
              this.updatePwd({oldPwd: this.form.pwd, nPwd: this.form.confirm});
            // }else{
            //   this.$message({
            //     message: "新密码与确认密码不相同",
            //     type: 'error'
            //   });
            }
        }
      })
   }


   updatePwd(date: {oldPwd : string, nPwd:string}) {
     this.axios.put('/user', date).then((response) => {
        this.$message({
                message: '修改成功，请重新登录',
                type: 'success'
              });
        this.$router.replace({path: '/login'});
        this.$store.commit("fireRemoveToken");
     }).catch((error)=>{
          this.$message({
                message: error.response.data,
                type: 'error'
              });
     });
   }



  private showDialog = false;

 @Watch('visiable')
 public getShowDialog() : void {
   this.showDialog = true;
  
   
 }
  
  private form = {
    pwd: '',
    newPwd: '',
    confirm: ''
  }

 
  
 

}
</script>