import axios from './config';
import { SearchReqData } from './data';
// 查询
export const search =(params: SearchReqData) => {
  return axios.get('/search', {
    params,
  })
}

