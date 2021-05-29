<template>
<div class="mini-play">
  <audio :src="music" controls="controls">
    您的浏览器不支持 audio 标签。
  </audio>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    // 音频
    music: String
  },
  setup(props) {
    const { music } = props;
    return {
      music
    }
  },
})
</script>
<style lang="less" scoped>
.mini-play {
  position: fixed;
  bottom: 0;
}
</style>