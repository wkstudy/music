import { Ar } from "../api/data"

/**
 * 把 10000 转化为1万
 * @param val number 数字
 * @returns 
 */
export const numberChange= (val: number): number | string => {
  return val > 9999 ? `${Math.floor(val / 10000)}万` : val
}


/**
 * 
 * @param ar  歌曲相关数据
 * @returns  作者信息
 */
export const songAuthor = (ar: Ar[]): string => {
  return ar.map(item => item.name).join('/')
}