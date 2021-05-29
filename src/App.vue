<template>
  <router-view/>
  <mini-play></mini-play>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import MiniPlay from './components/common/MiniPlay.vue'
import { search } from './api/index';
export default defineComponent({
  name: 'App',
  components: {
    MiniPlay
  },
  setup() {
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