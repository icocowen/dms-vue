<template>
  <el-row>

        <el-col :span="24">
        <el-row :gutter="10">
          <!-- 工具条 -->
          <el-col :span="5"> 
              <el-input
              size="small"
              placeholder="搜索学生"
              prefix-icon="el-icon-search"
              v-model="input">
            </el-input>

          </el-col>
          <el-col :span="1">
            <el-button type="primary" icon="el-icon-search" size="small" circle></el-button>
          </el-col>

          <el-col :span="1">
            <el-button type="primary" icon="el-icon-plus" size="small" circle></el-button>
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
                prop="stuName"
                label="学生"
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
                prop="admin"
                label="宿管"
                width="180"
                
                >
              </el-table-column>

              <el-table-column
                prop="remark"
                label="备注"
                >
              </el-table-column>

            <el-table-column label="操作" fixed='right'>
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
export default class IllegalRecord extends Vue {
     public get getTableAdaptHeight() : number {
        return this.$store.state.windowInnerHeight - 60 - 80 - 42 - 51 - 32 - 10; 
    }

    tableData = [
        {
            stuName : '张德帅',
            date: '2019/12/11 20:46',
            admin: '龙哥',
            remark: '出去吃宵夜，晚归，出去吃宵夜，晚归，'
        },
        {
            stuName : '张德帅',
            date: '2019/12/11 20:46',
            admin: '龙哥',
            remark: '出去吃宵夜，晚归'
        },
        {
            stuName : '张德帅',
            date: '2019/12/11 20:46',
            admin: '龙哥',
            remark: '出去吃宵夜，晚归'
        },
        {
            stuName : '张德帅',
            date: '2019/12/11 20:46',
            admin: '龙哥',
            remark: '出去吃宵夜，晚归'
        },
        {
            stuName : '张德帅',
            date: '2019/12/11 20:46',
            admin: '龙哥',
            remark: '出去吃宵夜，晚归'
        },
        {
            stuName : '张德帅',
            date: '2019/12/11 20:46',
            admin: '龙哥',
            remark: '出去吃宵夜，晚归'
        }
    ]

    
}
</script>

<style scoped>

</style>