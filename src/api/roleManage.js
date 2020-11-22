import request from '@/utils/request';

/**
 * @description 角色table表获取
 * @returns {Array}
 */

export function getRoleTable(data) {
  return request.post('/roleManage/roleTableData', data);
}

/**
 * @description 删除当前角色
 * @param {string}  id
 * @returns {}
 */

export function deleteRoleTable(data) {
  return request.post('/roleManage/deleteRole', data);
}

/**
 * @description 修改角色
 * @param {string}  id
 * @param {string}  role
 * @param {string}  text
 * @returns {}
 */

export function editRole(data) {
  return request.post('/roleManage/editRole', data);
}

/**
 * @description 新增
 * @param {string}  role
 * @param {string}  text
 * @returns {}
 */

export function addRole(data) {
  return request.post('/roleManage/addRole', data);
}
