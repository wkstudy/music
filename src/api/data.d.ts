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

// -------------------
// 获取歌单详情
export interface SongSheetDetail {
  code: number;
  relatedVideos?: any;
  playlist: Playlist;
  urls?: any;
  privileges: Privilege[];
}

interface Privilege {
  id: number;
  fee: number;
  payed: number;
  realPayed: number;
  st: number;
  pl: number;
  dl: number;
  sp: number;
  cp: number;
  subp: number;
  cs: boolean;
  maxbr: number;
  fl: number;
  pc?: any;
  toast: boolean;
  flag: number;
  paidBigBang: boolean;
  preSell: boolean;
  playMaxbr: number;
  downloadMaxbr: number;
  freeTrialPrivilege: FreeTrialPrivilege;
  chargeInfoList: ChargeInfoList[];
}

interface ChargeInfoList {
  rate: number;
  chargeUrl?: any;
  chargeMessage?: any;
  chargeType: number;
}

interface FreeTrialPrivilege {
  resConsumable: boolean;
  userConsumable: boolean;
}

interface Playlist {
  id: number;
  name: string;
  coverImgId: number;
  coverImgUrl: string;
  coverImgId_str: string;
  adType: number;
  userId: number;
  createTime: number;
  status: number;
  opRecommend: boolean;
  highQuality: boolean;
  newImported: boolean;
  updateTime: number;
  trackCount: number;
  specialType: number;
  privacy: number;
  trackUpdateTime: number;
  commentThreadId: string;
  playCount: number;
  trackNumberUpdateTime: number;
  subscribedCount: number;
  cloudTrackCount: number;
  ordered: boolean;
  description: string;
  tags: string[];
  updateFrequency?: any;
  backgroundCoverId: number;
  backgroundCoverUrl?: any;
  titleImage: number;
  titleImageUrl?: any;
  englishTitle?: any;
  subscribers: Subscriber[];
  subscribed?: any;
  creator: Creator;
  tracks: Track[];
  videoIds?: any;
  videos?: any;
  trackIds: TrackId[];
  shareCount: number;
  commentCount: number;
  remixVideo?: any;
}

interface TrackId {
  id: number;
  v: number;
  t: number;
  at: number;
  alg?: any;
  rcmdReason: string;
}

interface Track {
  name: string;
  id: number;
  pst: number;
  t: number;
  ar: Ar[];
  alia: string[];
  pop: number;
  st: number;
  rt?: string;
  fee: number;
  v: number;
  crbt?: any;
  cf: string;
  al: Al;
  dt: number;
  h: H;
  m: H;
  l: H;
  a?: any;
  cd: string;
  no: number;
  rtUrl?: any;
  ftype: number;
  rtUrls: any[];
  djId: number;
  copyright: number;
  s_id: number;
  mark: number;
  originCoverType: number;
  originSongSimpleData?: any;
  single: number;
  noCopyrightRcmd?: any;
  rtype: number;
  rurl?: any;
  mst: number;
  cp: number;
  mv: number;
  publishTime: number;
}

interface H {
  br: number;
  fid: number;
  size: number;
  vd: number;
}

interface Al {
  id: number;
  name: string;
  picUrl: string;
  tns: any[];
  pic_str: string;
  pic: number;
}

interface Ar {
  id: number;
  name: string;
  tns: any[];
  alias: any[];
}

export class  Creator {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags: string[];
  experts: Experts;
  djStatus: number;
  vipType: number;
  remarkName?: any;
  authenticationTypes: number;
  avatarDetail: AvatarDetail;
  backgroundImgIdStr: string;
  avatarImgIdStr: string;
  anchor: boolean;
  avatarImgId_str: string;
}

interface AvatarDetail {
  userType: number;
  identityLevel: number;
  identityIconUrl: string;
}

interface Experts {
  '2': string;
}

interface Subscriber {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags?: any;
  experts?: any;
  djStatus: number;
  vipType: number;
  remarkName?: any;
  authenticationTypes: number;
  avatarDetail?: any;
  backgroundImgIdStr: string;
  avatarImgIdStr: string;
  anchor: boolean;
  avatarImgId_str: string;
}


type keys = "a" | "b"
type aa = keyof keys;