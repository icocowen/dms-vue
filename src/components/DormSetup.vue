<template>
  <el-row :gutter="20">
      <el-col :span="6">
          <!-- <div class="outer-box" :style="getTreeAdaptHeight" >
            <div class='mid-hidden-box' >
              <div class="scroll-box"  :style="getTreeAdaptHeight" >
                 <el-tree
                :data="data"
                node-key="id"
                ref="tree"
                highlight-current
                :props="defaultProps"
                :default-expanded-keys="[1]"
                >
                </el-tree>
              </div>
            </div>
          </div> -->

          <AdaptHeightTree :height="getTreeHeight" :data='data'/>
          <DormSetupDialog 
          :title="title" 
          :dialogVisible='dialogVisible' 
          @confirmActive="confirmActive()"
          :dialogNotVisible='dialogNotVisible'
          />
         
         
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

          <el-col :span="1">
            <el-button type="primary" icon="el-icon-plus" size="small" circle @click="showDialog()"></el-button>
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
                prop="floorAlias"
                label="位置"
                width="180"
                sortable
                >
              </el-table-column>
              <el-table-column
                prop="roomName"
                label="宿舍名"
                width="180"
                sortable
                >
              </el-table-column>
              <el-table-column
                prop="peopleNum"
                label="人数"
                width="180"
                sortable
                >
              </el-table-column>

              <el-table-column
                prop="roomLong"
                label="宿舍长"
                >
              </el-table-column>

            <el-table-column label="操作" fixed='right' width='150'>
                  <template>
                    <el-button
                      size="mini"
                     >编辑</el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      >删除</el-button>
                  </template>
              </el-table-column>

            </el-table>
            
          </el-col>


        </el-row> 

        <el-row>
          <el-pagination
   
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
import Vue from 'vue'
import { Prop, Component } from 'vue-property-decorator';
import AdaptHeightTree from './AdaptHeightTree.vue'
import DormSetupDialog from './DormSetupDialog.vue'

@Component({
  components: {
    AdaptHeightTree,
    DormSetupDialog
  }
})
export default class DormSetUp extends Vue {

      dialogVisible:any = 1;
      title: String = "操作提示";
      private loading: boolean = false;
      dialogNotVisible:any = 2;

      currentPage4 = 4;

      private input ='';

      showDialog() {
        this.title = '增加房间';
        this.dialogVisible = -this.dialogVisible;
      }

      hiddenDIalog(){
        this.dialogNotVisible = -this.dialogNotVisible;
      }

      confirmActive() {
        this.$confirm('房间设置是否使用默认设置？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.hiddenDIalog();
        }).catch(() => {

        });
      }

    
    

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