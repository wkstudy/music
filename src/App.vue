<template>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { search } from './api/index';
export default defineComponent({
  name: 'App',
  setup() {
    onMounted(async () => {
      const res = await search({
        keywords: '海阔天空'
      })
      console.log(res)
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