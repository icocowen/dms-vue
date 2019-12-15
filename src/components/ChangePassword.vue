<template>
      <el-dialog
    title="修改密码"
    :visible.sync="showDialog"
    width="30%"
    >

    <el-form :model="form" label-width="80px" size="mini">
      <el-form-item label="旧密码" required>
        <el-input v-model="form.pwd"></el-input>
      </el-form-item>
      <el-form-item label="新密码" required>
        <el-input v-model="form.newPwd"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" required>
        <el-input v-model="form.confirm"></el-input>
      </el-form-item>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="showDialog = false" size="small">取 消</el-button>
      <el-button type="primary" size="small">确 定</el-button>
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