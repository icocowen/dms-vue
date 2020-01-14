<template>
  <el-dialog :title="title" 
    :visible.sync="showDialog"
    width="38%"
    top="3vh"
    :close-on-click-modal="false"
    >
    <el-dialog
      width="30%"
      title="输入舍员信息"
      :visible.sync="innerVisible"
      append-to-body>
      <el-form size="mini" :model="roomer" label-width="80px">
        <el-form-item label="学号">
            <el-input v-model="roomer.stuId" style="width:200px;"></el-input>
        </el-form-item>
        <el-form-item label="床号">
             <el-autocomplete
              popper-class="my-autocomplete"
              v-model="state"
              :fetch-suggestions="querySearch"
              placeholder="请输入内容"
              @select="handleSelect">
              <i
                class="el-icon-edit el-input__icon"
                slot="suffix"
                @click="handleIconClick">
              </i>
             
            </el-autocomplete>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showDialog = false">取 消</el-button>
        <el-button type="primary" @click="confirmActive()">确 定</el-button>
       </div>
    </el-dialog>

    <el-form :model="dormInfo" size="mini" label-position="right" label-width="80px">
       <el-form-item label="位置">
            <el-tag     effect="plain">第三层</el-tag>
        </el-form-item>
         <el-form-item label="宿舍">
            <el-tag     effect="plain">304</el-tag>
        </el-form-item>
         <el-form-item label="床位数">
            <el-tag     effect="plain">4</el-tag>
        </el-form-item>
        <el-form-item label="舍长">
           <el-autocomplete
            popper-class="show-roomer-info"
            v-model="dormInfo.name"
            :fetch-suggestions="querySearch"
            placeholder="姓名/学号/电话"
            :trigger-on-focus="false"
            >
             <template slot-scope="{ item }">
                <div class="name">{{ item.date }} ({{item.pn}})</div>
                <span class="stuid">学号: {{ item.address }}</span>
              </template>
            </el-autocomplete>
        </el-form-item>
             <el-table
                :data="tableData"
                style="width: 100%; margin-left:20px;"
                :default-sort = "{prop: 'date', order: 'descending'}"
                max-height="220"
                >
                <el-table-column
                prop="date"
                label="姓名"
               
                width="90">
                </el-table-column>
                <el-table-column
                prop="name"
                label="床号"
               
                width="50">
                </el-table-column>
                <el-table-column
                prop="address"
                label="学号"
                width="140">
                </el-table-column>
                 <el-table-column
                prop="pn"
                label="电话"
               
                width="140">
                </el-table-column>
                <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
                  <el-button type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
             <div style="margin-top: 20px">
              <el-button size="mini" type="text" style="float: right"  @click="innerVisible = true" >添加宿舍成员</el-button>
            </div>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="showDialog = false">取 消</el-button>
        <el-button type="primary" @click="confirmActive()">确 定</el-button>
    </div>
    </el-dialog>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Prop, Component ,Watch, Emit} from 'vue-property-decorator';

@Component
export default class EditRoomInfo extends Vue {
    
    @Prop()
    private title!:String;
    @Prop()
    private editRoomDialogVisible!:boolean;
    @Prop()
    private editRoomDialogNotVisible!:boolean;
    
    @Watch('dialogNotVisible')
    public getHiddenDialog() : void {
        this.showDialog = false;
    }

    private showDialog = false;

    @Watch('editRoomDialogVisible')
    public getShowDialog() : void {
        this.showDialog = true;
    } 

    private innerVisible: boolean = false;

     querySearch(queryString:any, cb:Function) {
        var results = this.tableData.filter((d:any) => {
            if(d.date.indexOf(queryString) != -1 || d.address.indexOf(queryString) != -1 || d.pn.indexOf(queryString) != -1) return d;
        }).map((d:any) => {
          d.value = d.date + ' ('+ d.address +')'; //张健文 (学号)
          return d;
        });
        cb(results);
      }

    roomer:Object = {
      stuId: ''
    }
    

    tableData:Object[] = [{
          date: '上官健文',
          name: '4',
          address: '17231503152',
          pn:'15119306876'
        }, {
          date: '构思',
          name: '4',
          address: '17231503153',
          pn:'1558165507'
        }, {
          date: '炫舞',
          name: '4',
          address: '17231503154',
          pn:'4396'
        }, {
          date: '李渡',
          name: '4',
          address: '17231503155',
          pn:'998'
        }]

    private dormInfo = {
         name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
    };
}

</script>

<style>
    .show-roomer-info li {
        line-height: normal !important; 
        padding: 7px !important;
    }

    .show-roomer-info li .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .show-roomer-info li .stuid {
      font-size: 12px;
      color: #b4b4b4;
    }

    .show-roomer-info li .highlighted .stuid {
      color: #ddd;
    }
  

</style>