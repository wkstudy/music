<template>
<div class="mini-play" v-show="show">
  <div class="cnt">
    <div class="cnt__icon">
      <img :class="[pause ? 'cnt__icon--pause' : '']" :src="songList[curPos] && songList[curPos].al.picUrl || ''" :alt="songList[curPos] && songList[curPos].name || ''">
    </div>
    <div class="cnt__main">
      <div class="cnt__main__name ellipsis">{{songList[curPos] && songList[curPos].name}}</div>
      <div class="cnt__main__author ellipsis">{{songAuthor(songList[curPos] && songList[curPos].ar || [])}}</div>
    </div>
    <div class="cnt__play">
      <van-circle
        size="32"
        v-model:current-rate="currentRate"
        layer-color="rgba(212, 68, 57, 0.5)"
        color="#D44439"
        :rate="songList[curPos] && songList[curPos].dt / 1000"
        :speed="speed"
      >
      <span @click="handlePlay" v-if="pause" class="iconfont icon-bofang1"></span>
      <span @click="handlePlay" v-else class="iconfont icon-zanting"></span>
      </van-circle>
    </div>
    <div class="cnt__list">
      <span class="iconfont icon-yinleliebiao"></span>
    </div>
  </div>
  <audio autoplay :src="`https://music.163.com/song/media/outer/url?id=${songList[curPos] && songList[curPos].id}.mp3`" controls ref="audio" @play="playMusic" @pause="pauseMusic">
    您的浏览器不支持 audio 标签。
  </audio>
</div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { useStore } from '../../store'
import { songAuthor } from '../../utils/utils';
//  TODO 播放按钮的进度还不对，无法停止， speed设置为0， 能停下来吗？
export default defineComponent({
  setup() {
    const store = useStore();
    const currentRate = ref(0);
    const audio = ref(null);
    const pause = computed(() => store.state.pause);
    const show = computed(() => store.state.show);
    const curPos = computed(() => store.state.curPos);
    const songUrls = computed(() => store.state.songUrls);
    const songList = computed(() => store.state.songList);
    //  songList.value[curPos.value].dt / 1000 （1000是把毫秒变成秒） / 100（因为进度条最大是100）
    const speed = computed(() => pause.value ?  0 : songList.value[curPos.value as number].dt / 1000 / 100); // speed为0时播放按钮不动

    const playMusic = () => {
      (audio.value as unknown as HTMLAudioElement).play();
    }
    const pauseMusic = () => {
      (audio.value as unknown as HTMLAudioElement).pause()
    }

    watch(curPos, () => {
      // 歌曲切换后，初始进度为0
      currentRate.value = 0;
    })

    watch(pause,(val) => {
      if(!val) {
        playMusic()
      } else {
        pauseMusic()
      }
    })

    const handlePlay = () => {
      store.commit('MutatePause', {pause: !pause.value})
    }
    return {
      show,
      curPos,
      songUrls,
      songList,
      pause,
      audio,
      songAuthor,
      currentRate,
      handlePlay,
      speed,
      pauseMusic,
      playMusic
    }
  },
})
</script>
<style lang="less" scoped>
.mini-play {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: white;

  .cnt {
    display: flex;
    height: 60px;
    justify-content: space-between;
    align-items: center;

    .cnt__icon {
      width: 40px;
      height: 40px;
      padding: 0px 10px 0px 20px;

      img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        animation: circle 20s infinite;
      }

      .cnt__icon--pause {
        animation-play-state: paused;
      }
    }

    .cnt__main {
      flex: 1;
      max-width: 203px;

      .cnt__main__name {
        margin-bottom: 2px;
        font-size: 14px;
        color: rgb(46, 48, 48);
      }

      .cnt__main__author {
        font-size: 12px;
        color: rgb(187, 168, 168);
      }
    }

    .cnt__play {
      padding: 0px 10px;
      .iconfont {
        font-size: 16px;
        position: absolute;
        top: 50%;
        left: 50%;
        color: rgb(212, 68, 57);
        transform: translate(-50%, -50%)
      }
    }

    .cnt__list {
      padding: 0px 10px;
      .iconfont {
        font-size: 30px;
        color: rgb(212, 68, 57);
      }
    }
  }

  audio {
    position: absolute;
    left: -10000;
  }
}

@keyframes circle {
  0% {
    transform:rotate(0deg);
  }

  100% {
    transform:rotate(360deg);
  }
}
</style>