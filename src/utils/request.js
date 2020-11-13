import axios from 'axios';
import { message } from 'ant-design-vue';
import qs from 'qs';
import store from '@/store';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000 // 请求超时时间
});

//请求
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['X-Token'] = store.getters.token;
  }
  return config;
});

//响应
service.interceptors.response.use(response => {
  const data = response.data;
  if (data.code === 200) {
    return Promise.resolve(response);
  } else {
    let err = {};
    switch (data.code) {
      case 400:
        err.info = '请求无效';
        break;

      case 401:
        err.info = '由于长时间未操作，登录已超时，请重新登录';
        break;

      case 403:
        err.info = '拒绝访问';
        break;

      case 404:
        err.info = `请求地址出错`;
        break;

      case 405:
        err.info = `未授权`;
        break;

      case 408:
        err.info = '请求超时';
        break;

      case 500:
        err.info = '服务器内部错误';
        break;

      case 501:
        err.info = '服务未实现';
        break;

      case 502:
        err.info = '网关错误';
        break;

      case 503:
        err.info = '服务不可用';
        break;

      case 504:
        err.info = '网关超时';
        break;

      case 505:
        err.info = 'HTTP版本不受支持';
        break;

      default:
        err.info = '网络波动，请重试';
    }
    message.error(err.info + ' ' + response.data.message || '');
    return Promise.reject(response);
  }
});

let http = {};

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

http.get = function(url, params = null) {
  return new Promise((resolve, reject) => {
    service
      .get(url, { params })
      .then(res => {
        resolve(res.data);
      })
      .catch(e => {
        reject(e.data);
      });
  });
};

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

http.post = function(url, params) {
  return new Promise((resolve, reject) => {
    service
      .post(url, qs.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(e => {
        reject(e.data);
      });
  });
};

export default http;
