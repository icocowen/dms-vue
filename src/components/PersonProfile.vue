<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover">
        <el-row >
          <el-col :span="24" class="prop-center">
            <el-upload
              :limit="1"
              accept=".png,.jpg"
              action="/api/user/avatar"
              name="avatar"
              :headers="headers"
              :on-success="uploadsuc"
              :on-error="handleError"
              :show-file-list='false'
              >
                <el-avatar class="upload-shadow" :size="100" :src="form.avatar"> </el-avatar>
              </el-upload>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" class="prop-center">
            <span>{{info.name}}</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" class="prop-center">
            <span style="font-size: .8em; color: gray;">管理员</span>
          </el-col>
        </el-row>
        <el-row class="info">
          <el-col :span="24"> 
            <el-row :gutter="10">
              <el-col :span="2"><i class="el-icon-s-custom"></i></el-col>
              <el-col :span="22">{{info.jobNum}}</el-col>
            </el-row>

          <el-row :gutter="10">
              <el-col :span="2"><i class="el-icon-phone"></i></el-col>
              <el-col :span="22">{{info.phoneNum}}</el-col>
            </el-row>

            <el-row :gutter="10" >
              <el-col :span="2"><i class="el-icon-user-solid"></i></el-col>
              <el-col :span="22" >
                <i v-if="info.gender == 'male'" style="color:#409eff " class="el-icon-male"></i>
                <i v-if="info.gender == 'female'" style="color:#f33d91 " class="el-icon-female"></i>
              </el-col>
            </el-row>
            <el-divider></el-divider>
            <el-row>
              <el-col :span='2'>
                <i class="el-icon-coordinate"></i>
              </el-col>
              <el-col :span='22'>
                {{info.roomNo}} 房
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
            <el-input v-model="form.jobNum" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="电话">
              <el-input v-model="form.phoneNum"></el-input>
          </el-form-item>
          <el-form-item label="房间">
            <el-input v-model="form.roomNo">
              <template slot="append">房</template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="small" @click="onSubmit">更新基本信息</el-button>
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
import { Component, Watch } from 'vue-property-decorator';

@Component
export default class PersonProfile extends Vue {
   private form:any =  {
          name: '',
          gender: '',
          jobNum: '',
          phoneNum: '',
          roomNo: ''
        };
   private info : any = {
          name: '',
          gender: '',
          jobNum: '',
          phoneNum: '',
          roomNo: ''
   };

     onSubmit() {
        let data = this.form;
        data.fn = 'all';
        this.updateUserInfo(data);
    }

    private headers = {"authorization":this.$store.state.token};

    uploadsuc(response:any, file:any, fileList:any) {
      
      this.$set(this.form,'avatar', response);
      this.$store.commit('fireUploadAvatarEvent', null);
      this.$notify({
              title: '更新操作',
              message: '更新头像成功',
              type: 'success',
              duration: 3000
            });
    }

    handleError(err:any, file:any, fileList:any) {
      if(err.status === '401') {
         this.$message({
            type: 'warning',
            message: '身份的过期，请重新登录!'
          });
        this.$router.replace({
          path:'/m'
        });
      }
    }


     updateUserInfo(data: any) {
        this.axios.put('/user', data).then((response) => {
            this.getBriefUserInfo(true, this.setUserInfo);
            this.$notify({
              title: '更新操作',
              message: '更新个人信息成功',
              type: 'success',
              duration: 3000
            });
        }).catch((error)=>{
            this.$notify({
              title: '更新操作',
              message: '更新个人信息失败',
              type: 'warning',
              duration: 3000
            });
        });
   }

    created() {
      this.getBriefUserInfo(true, this.setUserInfo);
      
    }

    setUserInfo(response:any) {
      this.form = response.data;

      this.$set(this.info, 'name', this.form.name);
      this.$set(this.info, 'jobNum', this.form.jobNum);
      this.$set(this.info, 'phoneNum', this.form.phoneNum);
      this.$set(this.info, 'gender', this.form.gender);
      this.$set(this.info, 'roomNo', this.form.roomNo);
    }

    
    getBriefUserInfo(detail: boolean, callbak: Function):any {
      let date = null;
      this.axios.get('/user', {params: {
        detail: detail
      }})
      .then((response) => {
          
            
              callbak(response);
            
        
      });

      
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