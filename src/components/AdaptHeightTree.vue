<template>
        <div class="outer-box" :style="getTreeAdaptHeight" >
            <div class='mid-hidden-box' >
              <div class="scroll-box"  :style="getTreeAdaptHeight" >
                 <el-tree
                :data="data"
                node-key="id"
                ref="tree"
                highlight-current
                :props="defaultProps"
                :default-expanded-keys="[1]"
                :show-checkbox="showCheckbox"
                >
                </el-tree>
              </div>
            </div>
          </div>
</template>

<script lang='ts'>

import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class AdaptHeightTree extends Vue {
    @Prop()
    private height !: number;

    @Prop()
    private data!: Object;

    @Prop()
    private showCheckbox !: boolean;


    private get getTreeAdaptHeight() {
        return "height:"+this.height+"px";
    }
}

</script>

<style scoped>


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
</style>