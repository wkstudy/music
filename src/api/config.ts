import axios from "axios";
import { Toast } from 'vant';

// axios.defaults.baseURL = 'https://netease-cloud-music-api-three-sage.vercel.app';
axios.defaults.baseURL = import.meta.env.MODE === 'development' ? '/api': 'https://netease-cloud-music-api-three-sage.vercel.app';
axios.defaults.timeout = 6000;
axios.defaults.withCredentials = true;
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  const { status, data} = response;
  if (status >= 200 && status < 300 || status === 304) {
    return data;
  }
  Toast(data)
  return Promise.reject(data);
}, function (error) {
  // 对响应错误做点什么
  Toast(error)
  return Promise.reject(error);
});

export default axios