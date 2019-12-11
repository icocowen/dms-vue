<template>
      <el-row :gutter="20">
      <el-col :span="6">
          <AdaptHeightTree :height="getTreeHeight" :data='data' showCheckbox='true'/>
      </el-col>
      
      <el-col :span="18 ">
        <el-row :gutter="10">
          <!-- 工具条 -->
          <el-col :span="5"> 
              <el-input
              size="small"
              placeholder="搜索房间"
              prefix-icon="el-icon-search"
              v-model="input">
            </el-input>

          </el-col>
          <el-col :span="1">
            <el-button type="primary" icon="el-icon-search" size="small" circle></el-button>
          </el-col>

        
        </el-row>  
        <el-row style="margin-top: 10px; margin-bottom:10px">
          <!-- 表格 -->
          <el-col :span="24">
            <el-table
              :data="tableData"
              :height="getTableAdaptHeight"
              border
              size='small'
              style="width: 100%"
              v-loading="loading"
              element-loading-background="#dbdbdbcc"
              >
               <el-table-column
                type="selection"
                width="40"
                fixed = 'left'
                >
              </el-table-column>
              <el-table-column
                prop="roomName"
                label="宿舍名"
                
                sortable
                >
              </el-table-column>
                <el-table-column
                prop="floorAlias"
                label="评分"
               
                sortable
                >
              </el-table-column>
              <el-table-column
                prop="peopleNum"
                label="宿管"
                
                >
              </el-table-column>
            <el-table-column label="操作" fixed='right' width="130">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      @click="handleEdit(scope.$index, scope.row)" 
                      icon="el-icon-edit" circle title="评分"></el-button>
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)" 
                    type="warning" plain 
                      icon="el-icon-info" circle title="详细信息"></el-button>
                     <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)" 
                    type="info" plain 
                      icon="el-icon-date" circle title="以往记录"></el-button>
                  </template>
              </el-table-column>

            </el-table>
          </el-col>


        </el-row> 

        <el-row>
          <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[8, 16, 32]"
          :page-size="8"
          layout="total, sizes, prev, pager, next, jumper"
          :total="380">
        </el-pagination>  
        </el-row> 
      </el-col>
  </el-row>
</template>

<script lang="ts">

import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import AdaptHeightTree from './AdaptHeightTree.vue'

@Component({
    components: {
        AdaptHeightTree
    }
})
export default class GradeDaily extends Vue {

      private loading: boolean = false;

      currentPage4 = 4;

      private input ='';

      tableData:Object =  [{
        floorAlias: '第二层',
        roomName: '223',
        peopleNum: 4,
        roomLong: '帅的章'
      },
      {
        floorAlias: '第二层',
        roomName: '224',
        peopleNum: 4,
        roomLong: '张三'
      },
      {
        floorAlias: '第二层',
        roomName: '225',
        peopleNum: 4,
        roomLong: '李四'
      },
      {
        floorAlias: '第二层',
        roomName: '226',
        peopleNum: 4,
        roomLong: '王五'
      },
      {
        floorAlias: '第二层',
        roomName: '227',
        peopleNum: 4,
        roomLong: '苟三'
      },
      {
        floorAlias: '第二层',
        roomName: '228',
        peopleNum: 4,
        roomLong: '李青'
      }];

     data:Object[] = [{
          id: 1,
          label: '图书馆',
          children: [{
            id: 2,
            label: '第三层',
            children: [{
              id: 9,
              label: '301'
            }, {
              id: 10,
              label: '302'
            },{
              id: 9,
              label: '303'
            },{
              id: 9,
              label: '304'
            },{
              id: 9,
              label: '305'
            },{
              id: 9,
              label: '306'
            },{
              id: 9,
              label: '307'
            },{
              id: 9,
              label: '308'
            },{
              id: 9,
              label: '309'
            },{
              id: 9,
              label: '310'
            },{
              id: 9,
              label: '311'
            },{
              id: 9,
              label: '312'
            },{
              id: 9,
              label: '313'
            },{
              id: 9,
              label: '314'
            },{
              id: 9,
              label: '315'
            },{
              id: 9,
              label: '316'
            },{
              id: 9,
              label: '317'
            },{
              id: 9,
              label: '318'
            },{
              id: 9,
              label: '319'
            },{
              id: 9,
              label: '320'
            }]
          },{
            id: 3,
            label: '第四层',
            children: [{
              id: 11,
              label: '401'
            }, {
              id: 12,
              label: '402'
            }]
          },{
            id: 4,
            label: '第五层',
            children: [{
              id: 13,
              label: '501'
            }, {
              id: 14,
              label: '502'
            }]
          }]
        }];
    
    
    
    
    
    private  defaultProps:Object =  {
          children: 'children',
          label: 'label'
        }
    


 
//  public get getTreeAdaptHeight() : string {
//    return "height:"+(this.$store.state.windowInnerHeight - 60 - 80 - 51)+"px"; 
//  }

 public get getTreeHeight() : number {
   return this.$store.state.windowInnerHeight - 60 - 80 - 51; 
 }

  public get getTableAdaptHeight() : number {
   return this.$store.state.windowInnerHeight - 60 - 80 - 42 - 51 - 32 - 10; 
 }
 
  
   
}
</script>

<style scoped>
   /* 我电脑的分辨率情况下 */
   /* 需要做不同分辨率的适配 */
  


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
      width: 600px;
      /* height: 444px; */
    }
    
  



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
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>