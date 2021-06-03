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
  <song-list v-if="detail.playlist" :collect="detail.playlist.subscribedCount" :tracks="detail.playlist.tracks" @play="handlePlay"></song-list>
</template>
<script lang="ts">
import { defineComponent, reactive, watch, toRefs, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import SongSheetHeader from '@/components/songsheet/SongSheetHeader.vue'
import SongList from '@/components/common/SongList.vue';
import NavBar from '@/components/common/NavBar.vue';
import { playlistDetail } from '../api';
import { useStore } from '../store'
import { SongSheetDetail } from '../api/data';

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
    const store = useStore();
    const { query } = route;
    const info = reactive({
      detail: {} as SongSheetDetail, // 歌单详情
    });

    const updateData = () => {
      if (query && query.id) {
        playlistDetail({id: +query.id})
          .then(res => {
            info.detail = res;
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

    const handlePlay = (id: Event) => {
      const tracks = (info.detail as SongSheetDetail).playlist.tracks;
      store.commit('MutateDisplayStatus', {show: true})
      store.commit('MutatePause', {pause: false})
      store.commit('MutateSongList', {tracks})
      store.commit('MutateCurrentPos', {curPos: tracks.findIndex(item => item.id === id as unknown as number)})
      store.dispatch('ActSongUrls', {id: tracks.map(item => item.id).join(',')})
    }
    return {
      ...toRefs(info),
      handlePlay
    }
  },
})
</script>
<style scoped>

</style>