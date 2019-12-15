<template>

    <el-form ref="form" :model="form" label-width="40px"  size="mini" style="margin-top: 20px; padding: 0 20px;">

    <el-form-item label="主题" >
        <el-input v-model="form.title" size="mini"></el-input>
    </el-form-item>
    <el-form-item label="时间">
        <el-col :span="10">
        <el-time-picker size="mini" placeholder="选择时间" v-model="form.date" style="width: 100%;"></el-time-picker>
        </el-col>
    </el-form-item>
    <el-form-item label="重复">
        <el-radio-group v-model="form.repet"  size="mini" @change="radioChangeEvent">
        <el-radio-button label="每天"></el-radio-button>
        <el-radio-button label="周一至周五"></el-radio-button>
        <el-radio-button label="周六日"></el-radio-button>
        <el-radio-button label="自定义" ></el-radio-button>
        </el-radio-group>
        <transition name="fade"> 
            <el-checkbox-group v-if="diy" v-model="checkboxGroup4" size="mini" style="margin-top: 10px">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </transition>
        
    </el-form-item>
    <el-form-item label="备注">
        <el-input type="textarea" v-model="form.remark"
            rows="3"
            show-word-limit
            resize='none'
            maxlength="25"
        ></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary"  size="mini">{{ functionName }}</el-button>
        <el-button size="mini">取消</el-button>
    </el-form-item>
    </el-form>

                   
</template>

<script lang="ts">

import Vue from 'vue';
import {Component,Prop } from 'vue-property-decorator';

//需要传入主题，时间，重复，备注
//直接传出一个对象
@Component
export default class TipsSetup extends Vue {
    form = {
            date: '',
            title: '',
            repeat: '',
            remark:''
            };
    checkboxGroup4 = [];
     cities = ['周一', '周二', '周三', '周四','周五','周六','周日'];
     private diy : boolean = false;

     @Prop()
     private functionName !: string;

     radioChangeEvent(val:string) {
        if(val === '自定义') {
            this.diy = true;
        }else {
            this.diy = false;
        }
    }
}

</script>

<style scoped>

</style>