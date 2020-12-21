import request from '@/utils/request';

/**
 * @description  获取转盘是否中奖，中奖信息
 * @returns {Object}
 */

export function getCircular(data) {
  return request.post('/lottery/circular', data);
}

/**
 * @description  获取九宫格是否中奖，中奖信息
 * @returns {Object}
 */

export function getNineLucky(data) {
  return request.post('/lottery/nineLucky', data);
}




