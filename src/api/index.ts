import { AxiosResponse } from 'axios';
import { BannerResourceType } from '../utils/CONST';
import axios from './config';
import { BannerResType, SearchReqData, SongSheetRes } from './data';
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

