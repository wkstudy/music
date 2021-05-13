import { SearchType } from '../utils/CONST';
export interface SearchReqData {
  keywords: string;
  limit?: number; // 默认30， 用于分页
  type?: SearchType; // 类型
}


// banner

export interface BannerItem {
  pic: string;
  url: string;
  [key: string]: any;
}

export interface BannerResType {
  code: number;
  banners: BannerItem[];
}


// 
export interface SongSheetItem {
  alg: string;
  canDislike: boolean;
  copywriter: string;
  highQuality: boolean;
  id: number;
  name: string;
  picUrl: string;
  playCount: number;
  trackCount: number;
  trackNumberUpdateTime: number;
  type: number;
}
export interface SongSheetRes {
  category: number;
  code: number;
  hasTaste: boolean;
  result: SongSheetItem[]
}
