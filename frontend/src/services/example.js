import request from 'utils/request';

export function query(param) {
  return request.get('/users', param);
}
