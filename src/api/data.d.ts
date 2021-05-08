import { SearchType } from '@utils/CONST';
export interface SearchReqData {
  keywords: string;
  limit?: number; // 默认30， 用于分页
  type?: SearchType; // 类型
}