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
            <el-button type="primary" icon="el-icon-search" size="small" @click="handleSearch" circle></el-button>
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
                prop="inDate"
                label="日期"
                width="180"
                sortable
                >
                <template slot-scope="scope">
                     <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.inDate }}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="adminName"
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
                      @click="handleDelete(scope.row.id)">删除</el-button>
                  </template>
              </el-table-column>
                
            </el-table>
          </el-col>


        </el-row> 

        <el-row>
          <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="7"
          layout="total, prev, pager, next,jumper"
          :total="ItemTotal">
        </el-pagination>  
        </el-row>

       
          


          
      </el-col>
  </el-row>

</template>
<script lang="ts">
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator';
import { da } from 'date-fns/locale';

@Component
export default class IllegalRecord extends Vue {
     public get getTableAdaptHeight() : number {
        return this.$store.state.windowInnerHeight - 60 - 80 - 42 - 51 - 32 - 10; 
    }

    private input = '';
    private currentPage : number = 1;

    @Watch('input')
    private restoreAllItem() {
      if (this.input.length == 0) {
         this.pullOnePageItem(1, this.setTabData );
         this.pullTotal();
      }
    }

    handleDelete(id : number) {
      this.deleteItemWithId(id);
    }

    private deleteItemWithId(id: number) {
        this.axios.delete('/illegalrecode?itemId='+id)
        .then((response) => {
          this.updateItemRecoed()
        })
        
    }


    updateItemRecoed() {
        if (this.input.length == 0 ) {
          this.pullOnePageItem(this.currentPage, this.setTabData );
          this.pullTotal();
        }else{
          this.pullSearchItem(this.input, this.currentPage, this.setSearchData);
        }
          
    }



    handleSearch() {
      this.pullSearchItem(this.input, 1, this.setSearchData);
      this.updateSearchItem(this.input);
    }

    updateSearchItem(name: string) {
      this.pullUpdateSearchItem(name);
    }

    private pullUpdateSearchItem(stuName: string) {
        this.axios.get('/illegalrecode', {params: {
          fn: 'searchTotal',
          stuName: stuName
        }})
        .then((response) => {
           this.ItemTotal = response.data;
        })
        
    }

    setSearchData(data : any) {
      this.tableData = data;
    }

     //axios 获取 item
    private pullSearchItem(stuName: string, pgIdx: number, calbak: Function) {
        this.axios.get('/illegalrecode', {params: {
          fn: 'search',
          pgIdx: pgIdx,
          stuName: stuName
        }})
        .then((response) => {
            calbak(response.data);
        })
        
    }


    private ItemTotal : number = 0;

    tableData = [
        // {
        //     stuName : '张德帅',
        //     inDate: '2019/12/11',
        //     adminName: '龙哥',
        //     remark: '出去吃宵夜，晚归，出去吃宵夜，晚归，'
        // }
    ]


    created() {
        this.pullOnePageItem(1, this.setTabData );
        this.pullTotal();
    }

    handleCurrentChange(idx: number) {
      if (this.input == '') {
        this.pullOnePageItem(idx, this.setTabData );
        
      }else {
         this.pullSearchItem(this.input, idx, this.setSearchData);
      }
    }

    //设置数据
    private setTabData(data : any) {
      if (this.currentPage > 1  ) {
          if(data.length == 0){
            this.handleCurrentChange(this.currentPage - 1);
            return;
          }
      }

      this.tableData = data;
          
      // console.warn(data);
    }

    //axios 获取 item
    private pullOnePageItem(pgIdx: number, calbak: Function) {
        this.axios.get('/illegalrecode', {params: {
          pgIdx: pgIdx
        }})
        .then((response) => {
            calbak(response.data);
        })
        
    }




    //获取total
    private pullTotal() {
        this.axios.get('/illegalrecode', {params: {
          fn: 'total'
        }})
        .then((response) => {
           this.ItemTotal = response.data;
        })
        
    }


    
}
</script>

<style scoped>

</style>