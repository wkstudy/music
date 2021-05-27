/**
 * 把 10000 转化为1万
 * @param val number 数字
 * @returns 
 */
export const numberChange= (val: number): number | string => {
  return val > 9999 ? `${Math.floor(val / 10000)}万` : val
}