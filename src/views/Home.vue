<template>
  <el-row>
    <el-col :span="24">
      <el-row>

        <el-col>
        <el-menu  style="display: flex;" mode="horizontal" :router='true'>
          <span style="line-height: 60px;margin-left: 20%;font-size: larger;font-weight: bolder;">
            夯	&trade;
          </span>
        <div style="flex: 1"></div>
        <el-menu-item index="/m" style="margin-right: 20%">进入系统</el-menu-item>
      </el-menu>
      </el-col>
      </el-row>

      <el-row style="position: relative">

        <el-col :span="24" style="position: absolute">
          <div class="sky">
            <div class="clouds_one"></div>
            <div class="clouds_two"></div>
            <div class="clouds_three"></div>
          </div>
        </el-col>

        <el-col :span="22" style="position: absolute;left: 50%; top: 230px;transform: translate(-50%, -50%);">

          <el-carousel :interval="40000" type="card" height="380px" indicator-position='none' arrow='never'>
              <el-carousel-item>
                 <el-card style="height: 380px">
                  <div slot="header">
                      <span>宿舍公告</span>
                      <span style="float: right;line-height: 21px;font-size: x-small;color: #8d8d8d;">{{ pubDate }}</span>
                  </div>
                  <div>
                    <h2 style="display: flex;justify-content: center;"><span >新年快乐</span></h2>
                    <span>同学们，回家注意安全</span>
                  </div>
                </el-card>
              </el-carousel-item>
              <el-carousel-item>
                <el-card style="height: 380px" ref="viewCard">
                  <div slot="header">
                      <span>今日评分</span>
                      <el-button @click="handleViewAction" type="text" icon="el-icon-view" class="view-icon" style="margin-left: 40px" title="查看评分"></el-button>
                      <span style="float: right;line-height: 21px;font-size: x-small;color: #8d8d8d;">{{ pubDate }}</span>
                  </div>
                  <div>

                    <el-table
                      :data="tableData"
                      :height="tabHeight"
                      border
                      style="width: 100%">
                      <template v-for="i in 10">
                          <el-table-column
                            prop="date"
                            label="宿舍"
                            :width="tabWidth" :key="i">
                          </el-table-column>
                          <el-table-column
                            prop="name"
                            label="评分"
                            :width="tabWidth" :key="i">
                          </el-table-column>
                      </template>
                     

                    </el-table>

                  </div>
                </el-card>
              </el-carousel-item>
            </el-carousel>

         
        </el-col>
      </el-row>

      <el-row type="flex" justify="center" :style="getFootHeight">
        <el-col :span="10" style="text-align: center;font-size: larger;font-weight: bolder;"> 
          <span>&copy;夯文化&reg;</span>
          <el-divider>夯&trade;(HOT)-正流行、很热门、超人气</el-divider>
        </el-col>
      </el-row>

    </el-col>
    
  </el-row>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Watch} from 'vue-property-decorator';
import format from 'date-fns/format';
import { el } from 'date-fns/locale';

@Component
export default class Home extends Vue {
  private pubDate: string = format(new Date(), 'yyyy年MM月dd日');
  private isFullScreen:boolean = false;
  private tabHeight: number = 250;
  private tabWidth: number = 60;

  @Watch('isFullScreen') 
  public getTabH() {
    if(this.isFullScreen) {

      this.tabHeight = window.innerHeight - 78- 40 ;
      this.tabWidth = (window.innerWidth - 40) / 20;
    }else {
      this.tabHeight  = 250;
    }
  }

  
  public get getFootHeight() : string {
    let h = this.$store.state.windowInnerHeight - 61 - 75 - 30;
    if(h >= 500 ) {
         return 'margin-top: '+ h  + 'px';
    }
    return 'margin-top:500px';
  }
  


  private handleViewAction() {
    let ele = this.$refs.viewCard as Vue;
    
    let div =  ele.$vnode.elm as Element;
   
    if (this.isFullScreen) {
       document.exitFullscreen();
    }else {
        div.requestFullscreen();
    }
  }

  mounted() {
    document.onfullscreenchange = () => {
      this.isFullScreen = !this.isFullScreen;
    };
  }

   tableData = [{
          date: '720',
          name: '86',
        },{
          date: '720',
          name: '86',
        },{
          date: '720',
          name: '86',
        },{
          date: '720',
          name: '86',
        },{
          date: '720',
          name: '86',
        },{
          date: '720',
          name: '86',
        },{
          date: '720',
          name: '86',
        },{
          date: '720',
          name: '86',
        },{
          date: '720',
          name: '86',
        },{
          date: '720',
          name: '86',
        },{
          date: '720',
          name: '86',
        },{
          date: '720',
          name: '86',
        },{
          date: '720',
          name: '86',
        },{
          date: '720',
          name: '86',
        },{
          date: '720',
          name: '86',
        },{
          date: '720',
          name: '86',
        },{
          date: '720',
          name: '86',
        },{
          date: '720',
          name: '86',
        },
        ]
}
</script>

<style scoped>
.view-icon:hover {
  color: brown;
}

.sky {
  height: 480px;
  background: #007fd5;
  position: relative;
  overflow: hidden;
  -webkit-animation: sky_background 50s ease-out infinite;
  -moz-animation: sky_background 50s ease-out infinite;
  -o-animation: sky_background 50s ease-out infinite;
  animation: sky_background 50s ease-out infinite;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.sky .clouds_one {
  background: url("../assets/cloud_one.png");
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 300%;
  -webkit-animation: cloud_one 50s linear infinite;
  -moz-animation: cloud_one 50s linear infinite;
  -o-animation: cloud_one 50s linear infinite;
  animation: cloud_one 50s linear infinite;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.sky .clouds_two {
  background: url("../assets/cloud_two.png");
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 300%;
  -webkit-animation: cloud_two 75s linear infinite;
  -moz-animation: cloud_two 75s linear infinite;
  -o-animation: cloud_two 75s linear infinite;
  animation: cloud_two 75s linear infinite;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.sky .clouds_three {
  background: url("../assets/cloud_three.png");
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 300%;
  -webkit-animation: cloud_three 100s linear infinite;
  -moz-animation: cloud_three 100s linear infinite;
  -o-animation: cloud_three 100s linear infinite;
  animation: cloud_three 100s linear infinite;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

@-webkit-keyframes sky_background {
  0% {
	background: #007fd5;
	color: #007fd5
  }
  50% {
	background: #000;
	color: #a3d9ff
  }
  100% {
	background: #007fd5;
	color: #007fd5
  }
}
@-moz-keyframes sky_background {
  0% {
	background: #007fd5;
	color: #007fd5
  }
  50% {
	background: #000;
	color: #a3d9ff
  }
  100% {
	background: #007fd5;
	color: #007fd5
  }
}
@keyframes sky_background {
  0% {
	background: #007fd5;
	color: #007fd5
  }
  50% {
	background: #000;
	color: #a3d9ff
  }
  100% {
	background: #007fd5;
	color: #007fd5
  }
}

@-webkit-keyframes cloud_one {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}
@-moz-keyframes cloud_one {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}
@keyframes cloud_one {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}

@-webkit-keyframes cloud_two {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}
@-moz-keyframes cloud_two {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}
@keyframes cloud_two {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}

@-webkit-keyframes cloud_three {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}
@-moz-keyframes cloud_three {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}
@keyframes cloud_three {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}
</style>