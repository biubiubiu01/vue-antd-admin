import request from '@/utils/request';

/**
 * @description 用户登录
 * @param {string}  username
 * @param {string}  password
 * @returns {string} token
 */

export function login(data) {
  return request.post('/user/login', data);
}

/**
 * @description 用户退出登录
 * @returns {string}
 */

export function logout(data) {
  return request.post('/user/logout', data);
}

/**
 * @description 获取验证码
 * @returns {number} code
 */
export function getPhoneCode(data) {
  return request.post('/user/code', data);
}

/**
 * @description 验证验证码
 * @param {string}  phone  手机号
 * @param {string}  code   验证码
 * @returns {string}
 */
export function getCodeTest(data) {
  return request.post('/user/testCode', data);
}
