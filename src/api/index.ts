import { AxiosResponse } from 'axios';
import { BannerResourceType } from '../utils/CONST';
import axios from './config';
import { BannerResType, SearchReqData, SongSheetDetail, SongSheetRes } from './data';
// 查询
export const search =(params: SearchReqData) => {
  return axios.get('/search', {
    params,
  })
}

// banner
export const banner = (params?: { type: BannerResourceType }) => {
  return axios.get('/banner', {
    params,
  }) as Promise<BannerResType>
}

// 推荐歌单
export const recommendSongList = (params?: { limit: number }) => {
  return axios.get('/personalized', {
    params,
  }) as Promise<SongSheetRes>
}

// 获取歌单详情
/**
 * 
 * @param params id: 歌单id
 * @param params s: 歌单最近的 s 个收藏者,默认为8
 * @returns 
 */
export const playlistDetail = (params: { id: number, s?: number }) => {
  return axios.get('/playlist/detail', {
    params,
  }) as Promise<SongSheetDetail>
}
