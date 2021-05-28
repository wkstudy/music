<template>
  <nav-bar title="歌单"></nav-bar>
  <song-sheet-header
    v-if="detail.playlist"
    :bgImg="detail.playlist.backgroundCoverUrl"
    :playCount="detail.playlist.playCount"
    :iconImg="detail.playlist.coverImgUrl"
    :title="detail.playlist.name"
    :creator="detail.playlist.creator"
  />
  <song-list v-if="detail.playlist" :collect="detail.playlist.subscribedCount" :tracks="detail.playlist.tracks"></song-list>
</template>
<script lang="ts">
import { defineComponent, reactive, watch, toRefs, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import SongSheetHeader from '@/components/songsheet/SongSheetHeader.vue'
import SongList from '@/components/common/SongList.vue';
import NavBar from '@/components/common/NavBar.vue';
import { playlistDetail } from '../api';

export default defineComponent({
  name: 'SongSheet',
  components: {
    SongSheetHeader,
    SongList,
    NavBar
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const { query } = route;
    const info = reactive({
      detail: {}, // 歌单详情
    });

    const updateData = () => {
      if (query && query.id) {
        playlistDetail({id: +query.id})
          .then(res => {
            info.detail = res;
            console.log(info.detail)
          })
      } else {
        router.push('/index')
      }
    }

    onMounted(() => {
      updateData();
    })

    watch(query, () => {
      updateData();
    })

    return {
      ...toRefs(info),
    }
  },
})
</script>
<style scoped>

</style>