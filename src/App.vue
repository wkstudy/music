<template>
  <router-view />
  <!-- 有播放器时防止把最下面的内容遮住 -->
  <div v-if="show" class="bottom-space"></div>
  <mini-play/>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import MiniPlay from './components/common/MiniPlay.vue';
import { useStore } from './store';
export default defineComponent({
  name: 'App',
  components: {
    MiniPlay,
  },
  setup() {
    const store = useStore();
    const show = computed(() => store.state.show);
    // 第一次打开应用默认不播放音乐
    onMounted(() => {
      store.commit('MutateDisplayStatus', { show: false });
      store.commit('MutatePause', { pause: true });
      store.commit('MutateSongList', { tracks: [] });
      store.commit('MutateCurrentPos', { curPos: 0 });
      store.dispatch('ActSongUrls', { id: '' });
    });

    return {
      show,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.bottom-space {
  height: 80px;
}
</style>
