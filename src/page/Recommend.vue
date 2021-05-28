<template>
  <main>
    <div class="banner">
      <div class="banner__bg"></div>
      <div class="banner__main">
        <van-swipe :autoplay="3000" height="160" lazy-render>
          <van-swipe-item v-for="image in bannerList" :key="image">
            <img :src="image.pic" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <!-- 推荐歌单 -->
    <div class="recommend">
      <h3>推荐歌单</h3>
      <van-grid :border="false" column-num="3">
        <van-grid-item v-for="item in songList" :key="item">
          <div class="recommend__item" @click="pageToSongSheet(item.id)">
            <div class="recommend__item__main">
              <img :src="item.picUrl" :alt="item.name">
              <div class="recommend__item__detail">
                <span class="iconfont icon-erji"></span>
                {{numberChange(item.playCount)}}</div>
            </div>
            <div class="recommend__item__desc" v-html="item.name"></div>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { BannerItem, SongSheetItem } from '../api/data';
import { banner, recommendSongList } from '../api/index';
import { BannerResourceType } from '../utils/CONST';
import { numberChange } from '../utils/utils';

export default defineComponent({
  setup() {
    const bannerList: BannerItem[] = reactive([]); // banner数组
    const songList: SongSheetItem[] = reactive([]); // 歌单
    const router = useRouter();
    const route = useRoute();

    banner({type: BannerResourceType.ANDROID}).then(res => {
      bannerList.length = 0; // 清空数组小妙招
      bannerList.push(...res.banners);
    })

    recommendSongList().then(res => {
      songList.length = 0;
      songList.push(...res.result);
    })

    const pageToSongSheet = (id: number) => {
      router.push(`/songsheet?id=${id}`)
    }
    return {
      bannerList,
      songList,
      pageToSongSheet,
      numberChange
    }
  },
})
</script>
<style lang="less" scoped>
.banner {
  position: relative;
  height: 160px;

  .banner__bg {
    background-color: rgb(212, 68, 57);
    height: 100px;
  }
  .banner__main {
    position: absolute;
    top: 0;
    z-index: 1;
    left: 1%;
    right: 1%;
    height: 160px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
.recommend {

  h3 {
    margin: 0;
    font-weight: 700;
    padding-left: 6px;
    font-size: 14px;
    line-height: 60px;
  }

  .recommend__item {
    .recommend__item__main {
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }

      .recommend__item__detail {
        position: absolute;
        top: 2px;
        right: 2px;
        margin: 0px;
        font-size: 12px!important;
        color: rgb(241, 241, 241);

        .iconfont {
          font-size: 12px;
        }
      }
    }
    .recommend__item__desc {
      margin-top: 2px;
      padding: 0px 2px;
      box-sizing: border-box;
      height: 50px;
      word-break:break-all;
      text-align: left;
      font-size: 12px;
      line-height: 1.4;
      color: rgb(46, 48, 48);
    }
  }
}
:deep(.van-swipe) {
  border-radius: 5px;
}
:deep(.van-swipe__indicator--active) {
  background: rgb(212, 68, 57);
}
:deep(.van-grid-item__content) {
  padding: 2px 4px;
}
</style>