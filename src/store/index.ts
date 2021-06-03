import { createStore, createLogger, Store, useStore as baseUseStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import { InjectionKey } from 'vue'
import { Datum, Track } from '../api/data';
import { getSongUrls } from '../api/index';

// 为 store state 声明类型
export interface State {
  show: boolean, // 是否展示
  pause: boolean, // 是否暂停
  curPos: number | undefined, // 当前播放的歌曲在列表中的下标
  songUrls: Datum[], // 歌曲资源地址
  songList: Track[], // 播放列表
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()


export const store = createStore<State>({
  state: {
    show: false, 
    pause: true,
    curPos: 0,
    songUrls: [], 
    songList: [], 
  },
  plugins: [createLogger(), createPersistedState()],
  mutations: {
    MutateDisplayStatus (state, { show }) {
      state.show = show
    },
    
    MutateCurrentPos (state, { curPos}) {
      state.curPos = curPos
    },
    
    MutatePause(state, { pause }) {
      state.pause = pause;
    },

    MutateSongList (state, { tracks }) {
      state.songList.length = 0
      state.songList.push(...tracks)
    },

    MutateSongUrls (state, { songUrls}) {
      state.songUrls.length = 0
      state.songUrls.push(...songUrls)
    }
  },
  actions: {
    ActSongUrls(store, {id}) {
      getSongUrls({id}).then(res=> {
        store.commit('MutateSongUrls', {songUrls:res.data});
      }) 
    }
  }
})

export function useStore () {
  return baseUseStore(key)
}