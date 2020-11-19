import request from '@/utils/request';

/**
 * @description 获取用户列表
 * @param {string}  role
 * @param {string}  username
 * @param {string}  startTime
 * @param {string}  endTime
 * @param {string}  page
 * @param {string}  size
 * @returns {Object} table
 */

export function getUserTable(data) {
  return request.post('/userManage/userTable', data);
}

/**
 * @description 删除当前列
 * @param {string}  id
 * @returns {}
 */

export function deleteTable(data) {
  return request.post('/userManage/deleteTable', data);
}
