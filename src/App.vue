<template>
  <router-view/>
  <mini-play></mini-play>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import MiniPlay from './components/common/MiniPlay.vue'
import { useStore } from './store'
export default defineComponent({
  name: 'App',
  components: {
    MiniPlay
  },
  setup() {
    const store = useStore();
    // 第一次打开应用默认不播放音乐
    onMounted(() =>{
      store.commit('MutateDisplayStatus', {show: false})
      store.commit('MutatePause', {pause: true})
      store.commit('MutateSongList', {tracks: []})
      store.commit('MutateCurrentPos', {curPos: 0})
      store.dispatch('ActSongUrls', {id: ''})
    })
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>