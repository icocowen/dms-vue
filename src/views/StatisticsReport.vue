<template>
             <!-- <div id="myEcharts" style="height:360px"></div> -->
 <el-row>
   <el-col :span="24">
    <el-row  style="margin-bottom: 20px;" type="flex" justify="space-around">
       <el-col :sm="12" :xs="24">
      
        <el-card class="box-card" shadow="hover">
          <div >
            <div id="myEchartsc" style="height:320px"></div>
          </div>
        </el-card>


      </el-col>
      
      <el-col :sm="10" :xs="24">
        <el-row>
          <el-col :span="24">
            <el-card shadow="hover">
              <div style="display: flex; justify-content: flex-end;  font-weight: bold;">
               <span style="display: inline-block; font-size: x-large;" >
                  {{ sysTime }}
               </span>

              </div>
            </el-card>
            
            </el-col>
        </el-row> 
        <el-row style="margin-top: 10px;"> 
          <el-card shadow="hover">
              <el-row :gutter="10" v-for="(val, i) in dormInfo" :key="i" style="margin-top: 10px; margin-bottom: 10px">
                <template v-if="i % 2== 0">
                  <el-col :span="5" style="text-align: right; font-weight: bold;">{{dormInfo[i].title}}: </el-col>
                  <el-col :span="7">{{dormInfo[i].val}}</el-col>
                  <el-col :span="5" style="text-align: right; font-weight: bold;">{{dormInfo[i + 1].title}}: </el-col>
                  <el-col :span="7">{{dormInfo[i + 1].val}}</el-col>
                </template>
              </el-row>
          </el-card>
        </el-row>

      </el-col>
    </el-row>


    <el-row :gutter="10" justify="center">
      <el-col :sm="8" :xs="12">

          <el-card class="box-card" shadow="hover">
          <div >
            <div id="myEcharts" style="height:320px"></div>
          </div>
        </el-card>


      </el-col>
      <el-col :sm="8" :xs="12">
      
        <el-card class="box-card" shadow="hover">
          <div >
            <div id="myEchartsa" style="height:320px"></div>
          </div>
        </el-card>


      </el-col>

        <el-col :sm="8" :xs="12">

          <el-card class="box-card" shadow="hover">
          <div >
            <div id="myEchartsb" style="height:320px"></div>
          </div>
        </el-card>


      </el-col>
     
      
    </el-row>


    <!-- <el-row :gutter="40" justify="center">
      <el-col :sm="12" :xs="24">

          <el-card class="box-card" shadow="never">
          <div >
            <div id="myEchartsb" style="height:320px"></div>
          </div>
        </el-card>


      </el-col>
      <el-col :sm="12" :xs="24">
      
        <el-card class="box-card" shadow="never">
          <div >
            <div id="myEchartsc" style="height:320px"></div>
          </div>
        </el-card>


      </el-col>
      
    </el-row> -->

    
     
  
   </el-col>
 </el-row>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import format from 'date-fns/format';



@Component({})
export default class StatisticsReport extends Vue {
  public $echarts: any;
  private sysTime: String = format(new Date(), 'yyyy年MM月dd日 HH:mm:ss');

  
  
  

  private options: object = {
    //里面写要显示的echarts图标
    color: ['#3398DB'],
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisLabel: {
          rotate: 60
        }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    yAxis: {
      type: "value"
    },
     title: {
        left: 'left',
        text: '宿舍及格率',
     },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line"
      }
    ]
  };

  private doption = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
          rotate: 60
        }
    
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    yAxis: {
        type: 'value'
    },
     title: {
        left: 'left',
        text: '不及格宿舍',
     },
     color: ['#3398DB'],
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        barWidth : 10
    }]
};


private optionc:object =  {
    title: {
        text: '最近一个月内的扣分情况',
        padding: [
            0,  // 上
            0, // 右
            50,  // 下
            0, // 左
        ]
    },
     tooltip : {
       
    },
   
     color: ['#3398DB'],
    radar: {
        // shape: 'circle',
         center: ['50%', "50%"],
        name: {
            textStyle: {
                color: '#000',
                borderRadius: 3
           }
        },
        indicator: [
           { name: '卫生', max: 31},
           { name: '床铺', max: 31},
           { name: '厕所', max: 31},
           { name: '桌面', max: 31}
        ],
        areaStyle: {type: 'default'}
    },
    series: [{
        name: '扣分情况',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [10, 12, 4, 20],
                areaStyle: {
                        normal: {
                            opacity: 0.6
                        }
                    }
            }
        ]
    }]
};

  private optionb: object = {
    //里面写要显示的echarts图标
    color: ['#3398DB'],
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisLabel: {
          rotate: 60
        }
    },
     tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    yAxis: {
      type: "value"
    },
     title: {
        left: 'left',
        text: '分数分布',
     },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        areaStyle: {}
      }
    ]
  };
 
  private dormInfo: Object[] = [
        { title: '学生', val : '420 位'},
        {title: '宿管',  val :'4 位'},
        {title: '层数', val : '7 层'},
        {title:'房间', val : '60 间'},
        { title:'评分次数', val : '200 次'},
        { title: '床位', val : '420 张'}
    ];


   private lastVal : Number = window.innerWidth;
   private echar:any;
   @Watch('$store.state.windowInnerWidth')
   public d(val:Number) {
      if(val != this.lastVal) {
        this.echar.resize();
        this.lastVal = val;
      }
   }
  
   

  private mounted() {
    const ele = document.getElementById("myEcharts");
    const chart: any = this.$echarts.init(ele);

    //调接口获取数据
    chart.setOption(this.options);

  

    const elea = document.getElementById("myEchartsa");
    const charta: any = this.$echarts.init(elea);
              
    //调接口获取数据
    charta.setOption(this.doption);


     const eleb = document.getElementById("myEchartsb");
    const chartb: any = this.$echarts.init(eleb);
              
    //调接口获取数据
    chartb.setOption(this.optionb);

     const elec = document.getElementById("myEchartsc");
    const chartc: any = this.$echarts.init(elec);
              
    //调接口获取数据
    chartc.setOption(this.optionc);

    this.echar = chart;
    let that = this;

    setInterval(()=>{
      that.sysTime = format(new Date(), 'yyyy年MM月dd日 HH:mm:ss');
    }, 500);

  
  }
}
</script>

<style scoped>
 .el-col {
    border-radius: 4px;
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



  .list-enter-active, .list-leave-active {
    transition: all .3s;
  }
  .list-enter
  /* .list-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(40px);
  }

  .list-leave-to{
    opacity: 0;
    transform: translateY(-50px);
  }
</style>