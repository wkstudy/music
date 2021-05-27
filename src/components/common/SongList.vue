<template>
  <div class="list-header">
    <span class="iconfont icon-bofang"></span>
    <div class="list-header__num">
      <span>播放全部</span>
      <span>共{{count}}首</span>
    </div>
    <div v-if="!!collect">
      <span class="iconfont icon-jia"></span>
      <span>收藏({{numberChange(collect)}})</span> 
    </div>
  </div>
  <div>
    
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { numberChange } from '../../utils/utils';
import { Track } from '../../api/data'

export default defineComponent({
  props: {
    count: Number,
    collect: {
      type: Number,
      required: false,
    },
    tracks: {
      type:  Array as  PropType<Track[]>,
      required: true,
    }
  },
  setup(props) {
    const { count ,collect, tracks } = props;


    return {
      count,
      collect,
      numberChange,
      tracks
    }
  },
})
</script>
<style lang="less" scoped>
.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .list-header__num {
    flex: 1;
  }
}
</style>
