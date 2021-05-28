<template>
  <div class="navbar">
    <span class="iconfont icon-fanhui" @click="back"></span>
    <span class="title">{{title}}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  props: {
    title: String,
  },
  setup(props) {
    const { title } = props;
    const router = useRouter();

    const back = () => {
      router.back()
    }

    return {
      title,
      back
    }
  },
})
</script>
<style lang="less" scoped>
.navbar {
  position: fixed;
  padding: 0px 10px 5px;
  height: 40px;
  z-index: 100;
  display: flex;
  line-height: 40px;
  color: rgb(241, 241, 241);

  .iconfont {
    font-size: 20px;
    margin-right: 5px;
  }

  .title {
    font-size: 16px;
  }
}
</style>