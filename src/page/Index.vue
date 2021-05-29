<template>
  <main>
    <div class="nav">
      <div><span class="iconfont icon-liebiao"></span></div>
      <div class="title">网易云音乐</div>
      <div><span class="iconfont icon-sousuo"></span></div>
    </div>
    <van-tabs v-model:active="active" background="rgb(212, 68, 57)" title-inactive-color="rgb(228, 228, 228)" title-active-color="rgb(241, 241, 241)" @click="handleClick">
      <van-tab title="推荐"></van-tab>
      <van-tab title="歌手"></van-tab>
      <van-tab title="排行榜"></van-tab>
    </van-tabs>
    <router-view/>
  </main>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const active = ref(0);
    const router = useRouter();

    const handleClick = (name: number) => {
      switch(name) {
        case 0:
          router.push('/index/recommend');
          break;
        case 1:
          router.push('/index/singer');
          break;
        case 2:
          router.push('/index/rank');
          break;
      }
    }
    return { 
      active,
      handleClick,
    };
  },
})
</script>
<style lang="less" scoped>
main {
  .nav {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 5px 10px;
    background: rgb(212, 68, 57);

    .iconfont,
    .title {
      font-size: 20px;
      line-height: 40px;
      color: rgb(241, 241, 241);;
    }
  }
}
:deep(.van-tab--active) {
  font-weight: 700;
}
:deep(.van-tabs__line) {
  background-color: rgb(241, 241, 241);
  height: 2px;
  top: calc(50% + 2px);
}
</style>