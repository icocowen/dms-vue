<template>
    <header class="top-bar">
      <div class="left-area">
        <h1 style="float:left" :style="adaptLeftNav">
          <img style="float:left" src="../assets/dormlog.png" alt="dorm log"/>
          <span class="appName">{{appName}}</span>
        </h1>
        <el-button style="float:left; margin:10px; color:white" type="text" :icon="icon" circle @click="fireCollapse"></el-button>
      </div>
      
      <div class="nav">
        <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        :router='true'
         >
        <el-menu-item>
          <!-- <img src="../assets/full.png" alt="全屏" class="screenicon"> -->
         
            <img :src="screenIcon" :alt="screenTip"  :title="screenTip" class="screenicon" @click="fireScreenOpe">
         
        </el-menu-item>
        <el-menu-item >
           <el-badge is-dot class="tips-red-ptr">
              <i class="el-icon-bell" style="color:white" @click="fireShowMsgTips" title="消息"></i>
           </el-badge>
        </el-menu-item>
        <el-submenu index="3">

          <template slot="title">
             <el-avatar :size="28" :src="user.avatar"></el-avatar>
              <span class="alias" style="margin: 0 5px; color:white"> {{user.name}} </span>
          </template>
          <el-menu-item index="profile">个人信息</el-menu-item>
          <el-menu-item @click="showPasswordDialog" >更改密码</el-menu-item>
          <el-menu-item @click="handleLogout">退出</el-menu-item>
                
                  


          
        </el-submenu>
        </el-menu>
      </div>
    </header>
</template>



<script lang="ts">
import { Component, Prop, Vue ,Watch} from 'vue-property-decorator';

@Component({
  name: 'TopNav'
})
export default class TopNav extends Vue {

   

    user : any = {};

    created() {
      this.getBriefUserInfo(false,this.setBriefVal) ;
     
    }


    setBriefVal(response:any){
      this.$set(this.user, "avatar", response.data.avatar);
      this.$set(this.user, "name", response.data.name);
      // console.warn(response);
    }


   @Watch('$store.state.uploadAvatarEvent')
   private updateAvatar() {
      this.getBriefUserInfo(false,this.setBriefVal) ;
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
  
    private appName:String = '';
    private screenIcon:String = require('../assets/full.png');
    private screenTip:String = '全屏';
    private adaptLeftNav = {
      width: '64px'
    }
    private icon:String = 'el-icon-s-unfold';
    activeIndex:String =  '1';


    private showPasswordDialog() {
      this.$store.commit('firePasswordDialog');
    }


    private handleLogout() {

      this.$confirm('是否退出登录?', '退出提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          
          this.logout();
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
          this.$router.replace({
            path: '/'
          });
        })
    }


    logout() {
      this.$store.commit('fireRemoveToken');
      this.axios.get('/logout');
    }



    fireShowMsgTips() {
      this.$store.commit('fireMsgTips');
    }

    fireScreenOpe() {
      let element = document.documentElement;
      if(this.screenTip === '全屏') {
        this.screenIcon = require('../assets/exitfull.png');
        this.screenTip = '退出全屏';
        element.requestFullscreen();
      }else{
         this.screenIcon = require('../assets/full.png');
        this.screenTip = '全屏';
        document.exitFullscreen();
      }
    }

    fireCollapse() {
      if(this.icon === 'el-icon-s-unfold') {
        this.adaptLeftNav['width'] = '200px';
        this.appName = '宿舍管理系统';
        this.icon = 'el-icon-s-fold';
      }else{
        this.adaptLeftNav['width'] = '64px';
        this.appName = '';
        this.icon = 'el-icon-s-unfold';
      }
      this.$store.commit('fireCollapse');
    }
}


</script>

<style scoped>

  .appName {
    display: block;
    float:left;
    font-size: 0.6em;
    margin-top: 19px;
    font-weight: normal;
    color: #feffff;
  }
  .top-bar{
    display: flex;
    justify-content: space-between;
    background-color: rgb(84, 92, 100);
    height: 60px;
  }
  h1{
    margin-top: 0;
    margin-bottom: 0; 
    transition: width .3s;
  }
  .screenicon{
    width: 18px;
    height: 18px;
    margin: 0;
  }
  img{
    width: 28px;
    height: 28px;
    margin: 17px;
  }
 
</style>