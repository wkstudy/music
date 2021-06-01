<template>
<!-- 歌单 -->
<section class="container">
  <img :src="bgImg || iconImg" class="bg">
  <div class="header">
    <div class="header__flag">
      <img :src="iconImg">
      <div class="header__flag__desc">
        <span class="iconfont icon-erji"></span>
        {{numberChange(playCount)}}</div>
    </div>
    <div class="header__title">
      <div class="header__title__info">{{title}}</div>
      <div class="header__title__creator">
        <img :src="creator.avatarUrl" alt="" class="avatar">
        <div class="name">{{creator.nickname}}</div>
      </div>
    </div>
  </div>
  <div>
    <van-grid>
      <van-grid-item class="fn__list">
        <span class="iconfont icon-pinglun"></span>
        <div>评论</div>
      </van-grid-item>
      <van-grid-item class="fn__list">
        <span class="iconfont icon-pinglun"></span>
        <div>点赞</div>
      </van-grid-item>
      <van-grid-item class="fn__list">
        <span class="iconfont icon-jia"></span>
        <div>收藏</div>
      </van-grid-item>
      <van-grid-item class="fn__list">
        <span class="iconfont icon-gengduo"></span>
        <div>更多</div>
      </van-grid-item>
    </van-grid>
  </div>
</section>
</template>
<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue'
import { numberChange } from '../../utils/utils';
// import { Creator } from '../../api/data';
export default defineComponent({
  props: {
    bgImg: String,
    playCount: Number,
    iconImg: String,
    title: {
      type: String as PropType<string>,
    },
    creator: Object,

  },
  setup(props) {
    const { bgImg, iconImg, playCount, title, creator} = toRefs(props);
    return {
      bgImg,
      iconImg,
      playCount,
      title,
      creator,
      numberChange
    }
  },
})
</script>
<style lang="less" scoped>
.container {
  position: relative;

  .bg {
    filter: blur(20px);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 20px 10px 20px;

    .header__flag {
      position: relative;
      width: 120px;
      height: 120px;

      img {
        width: 120px;
        height: 120px;
      }

      .header__flag__desc {
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

    .header__title {
      height: 120px;
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .header__title__info {
        color: rgb(241, 241, 241);
        font-weight: 700;
        line-height: 1.5;
        font-size: 16px;
      }
      .header__title__creator {
        display: flex;
        justify-content: flex-start;
        align-content: center;

        .avatar {
          width: 20px;
          height: 20px;
          margin-right: 5px;
          border-radius: 50%;
        }

        .name {
          line-height: 20px;
          font-size: 14px;
          color: rgb(187, 168, 168);
        }
      }
    }
  }

  .fn__list {
    display: flex;
    flex-direction: column;
    line-height: 20px;
    text-align: center;
    font-size: 12px;
    color: rgb(241, 241, 241);
    z-index: 1000;
    font-weight: 500;
  }
}
:deep(.van-grid-item__content) {
  background-color: transparent;
}
:deep(.van-hairline--top::after) {
  border-top-width: 0;
}
</style>