<template>
  <el-row>

        <el-col :span="24">
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
         <el-col :span="2" style="float: right">
            <el-button type="danger" plain round size="small">超支宿舍</el-button>
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
                prop="roomNum"
                label="房号"
                width="180"
                sortable
                >
              </el-table-column>
              <el-table-column
                prop="date"
                label="日期"
                width="180"
                sortable
                >
                <template slot-scope="scope">
                     <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="currentWaterRate"
                label="当月水费 /立方"
                 width="180"
                 sortable
                >
              </el-table-column>


              <el-table-column
                prop="admin"
                label="宿管"
               
                
                >
              </el-table-column>

           

            <el-table-column label="操作" fixed='right' width="180">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      @click="handleEdit(scope.$index, scope.row)">记录</el-button>
                    <el-button
                      size="mini"
                      type="warning"
                      @click="handleDelete(scope.$index, scope.row)">历史</el-button>
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
import Vue from 'vue'
import { Component } from 'vue-property-decorator';

@Component
export default class WaterRateRecord extends Vue {
     public get getTableAdaptHeight() : number {
        return this.$store.state.windowInnerHeight - 60 - 80 - 42 - 51 - 32 - 10; 
    }

    private input:string = '';

    tableData = [
        {
            roomNum : '302',
            date: '2019/12/11 20:46',
            admin: '龙哥',
            currentWaterRate: '15'
        },
        {
            roomNum : '303',
            date: '2019/12/11 20:46',
            admin: '龙哥',
            currentWaterRate: '15'
        },
        {
            roomNum : '304',
            date: '2019/12/11 20:46',
            admin: '龙哥',
            currentWaterRate: '15'
        },
        {
            roomNum : '305',
            date: '2019/12/11 20:46',
            admin: '龙哥',
            currentWaterRate: '15'
        },
        {
            roomNum : '306',
            date: '2019/12/11 20:46',
            admin: '龙哥',
            currentWaterRate: '15'
        },
        {
            roomNum : '307',
            date: '2019/12/11 20:46',
            admin: '龙哥',
            currentWaterRate: '15'
        }
        
        
    ]

    
}
</script>

<style scoped>

</style>