import axios from 'axios';

const instance = axios.create({
  baseURL: '/',
  timeout: 10000,
  'X-Requested-With': 'XMLHttpRequest',
});

instance.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  },
);

export default {
  get(url, param) {
    return new Promise((resolve, reject) => {
      instance({
        method: 'get',
        url,
        params: param,
      }).then(res => {
        resolve(res);
      });
    });
  },
  post(url, param) {
    return new Promise((resolve, reject) => {
      instance({
        method: 'post',
        url,
        data: param,
      }).then(res => {
        resolve(res);
      });
    });
  },
};
