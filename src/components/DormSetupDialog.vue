<template>
    <el-dialog :title="title" 
    :visible.sync="showDialog"
    :close-on-click-modal="false"
    width="30%"
    >
    <el-form :model="dormInfo">
        <el-form-item label="选择楼层" label-width="80">
            <el-cascader :options="options" clearable></el-cascader>
        </el-form-item>
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
export default class DormSetupDialog extends Vue {
    
    @Prop()
    private title!:String;
    @Prop()
    private dialogVisible!:boolean;
    @Prop()
    private dialogNotVisible!:boolean;
    
    @Watch('dialogNotVisible')
    public getHiddenDialog() : void {
        this.showDialog = false;
    }

    private showDialog = false;

     @Watch('dialogVisible')
    public getShowDialog() : void {
        this.showDialog = true;
    }

    @Emit('confirmActive')
    public confirmActive() {
    }

     options = [{
          value: 'libery',
          label: '图书馆',
          children: [{
            value: '3f',
            label: '第三层',
          },
          {
            value: '4f',
            label: '第四层',
          },
          {
            value: '5f',
            label: '第五层',
          }]
          }
          ];




  
    

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

<style scoped>

</style>