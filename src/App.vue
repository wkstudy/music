<template>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { search } from './api/index';
export default defineComponent({
  name: 'App',
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