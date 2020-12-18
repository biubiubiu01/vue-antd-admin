import request from '@/utils/request';

/**
 * @description  获取table表数据
 * @param {string} name
 * @param {string} status
 * @param {string} page
 * @param {string} size
 * @returns {Object}
 */

export function getTableData(data) {
  return request.post('/table/tableList', data);
}

/**
 * @description  删除
 * @param {string} id
 */

export function deleteTable(data) {
  return request.post('/table/deleteTable', data);
}

/**
 * @description  批量删除
 * @param {string} batchId
 */

export function batchDeleteTable(data) {
  return request.post('/table/batchDeleteTable', data);
}

/**
 * @description  修改
 * @param {string} text
 * @param {string} id
 */

export function editTable(data) {
  return request.post('/table/editTable', data);
}
