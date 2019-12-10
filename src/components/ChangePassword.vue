<template>
      <el-dialog
    title="我是子组件"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <span>我是子组件</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleClose">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class DialogMask extends Vue {
  @Prop() private dialogVisible!: boolean;
  private handleClose(done: any) {
    this.$emit('closeDialog', false);
  }
}
</script>