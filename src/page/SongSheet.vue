<template>
  <section>
    <song-sheet-header
      v-if="detail.playlist"
      :bgImg="detail.playlist.backgroundCoverUrl"
      :playCount="detail.playlist.playCount"
      :iconImg="detail.playlist.coverImgUrl"
      :title="detail.playlist.name"
      :creator="detail.playlist.creator"
    />
    <list-header :count="10" :collect="20"></list-header>
  </section>
</template>
<script lang="ts">
import { defineComponent, reactive, watch, toRefs, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import SongSheetHeader from '@/components/songsheet/SongSheetHeader.vue'
import ListHeader from '@/components/common/ListHeader.vue';
import { playlistDetail } from '../api';

export default defineComponent({
  name: 'SongSheet',
  components: {
    SongSheetHeader,
    ListHeader
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