<template>
<div class="list">
  <div class="list__header">
    <span class="iconfont icon-bofang"></span>
    <div class="list__header__num">
      <span>播放全部</span>
      <span>(共{{tracks.length}}首)</span>
    </div>
    <div v-if="!!collect" class="list__header__collect">
      <span class="iconfont icon-jia"></span>
      <span>收藏({{numberChange(collect)}})</span> 
    </div>
  </div>
  <div class="list__cnt">
    <div v-for="(track, index) in tracks" :key="track.id" class="tracks" @click="handleClick(track.id)">
      <div class="tracks__pos">{{index + 1}}</div>
      <div class="tracks__cnt">
        <div class="tracks__cnt__name ellipsis">{{track.name}}</div>
        <div class="tracks__cnt__info ellipsis">{{songAuthor(track.ar)}} - {{track.al.name}}</div>
      </div>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue'
import { numberChange, songAuthor } from '../../utils/utils';
import { Track } from '../../api/data'

export default defineComponent({
  props: {
    collect: {
      type: Number,
      required: false,
    },
    tracks: {
      type:  Array as  PropType<Track[]>,
      required: true,
    },
  },
  emits: {
    play: (payload: number) => {
      return !isNaN(payload)
    }
  },
  setup(props, { emit }) {
    const { collect, tracks } = toRefs(props);

    const handleClick = (id: number) => {
      emit('play', id);
    }

    return {
      collect,
      numberChange,
      tracks,
      songAuthor,
      handleClick
    }
  },
})
</script>
<style lang="less" scoped>
.list {
  border-radius: 10px;
  opacity: 0.98;
  background: rgb(255, 255, 255);

  .list__header {
    padding: 10px 0px;
    margin-left: 10px;
    position: relative;
    border-bottom: 1px solid rgb(228, 228, 228);

    display: flex;
    justify-content: space-between;
    align-items: center;

    .iconfont {
      font-size: 24px;
      margin-left: 10px;
    }
    .list__header__num {
      flex: 1;
      font-size: 16px;
      
        &>span:last-child {
          font-size: 12px;
          color: rgb(187, 168, 168);
        }
    }

    .list__header__collect {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 130px;
      background: rgb(212, 68, 57);
      color: rgb(241, 241, 241);
      border-radius: 3px;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
  .list__cnt {
    border-radius: 10px;
    opacity: 0.98;
    background: rgb(255, 255, 255);
  
    .tracks {
      display: flex;
      justify-content: center;
      align-content: center;
      height: 60px;
  
      .tracks__pos {
        font-size: 16px;
        flex-basis: 60px;
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
      }
      .tracks__cnt {
        flex: 1 1 0%;
        padding: 6px 0px;
        border-bottom: 1px solid rgb(228, 228, 228);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
  
        .tracks__cnt__name {
          font-size: 16px;
          color: rgb(46, 48, 48);
        }
  
        .tracks__cnt__info {
          font-size: 12px;
          color: rgb(187, 168, 168);
          
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap
        }
      }
    }
  }
}
</style>
