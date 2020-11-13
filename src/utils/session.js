/**
 * 设置sessionStorage
 * @param {string} key
 * @param {any} value
 */
export function setCache(key, value) {
  if (value == undefined || value == null) {
    window.sessionStorage.setItem(key, value);
  } else {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }
}

/**
 * 获取sessionStorage
 * @param {string} key
 * @returns {any}
 */
export function getCache(key) {
  if (window.sessionStorage.getItem(key) == 'undefined' || window.sessionStorage.getItem(key) == null) {
    return undefined;
  }
  return JSON.parse(window.sessionStorage.getItem(key));
}

/**
 * 清除指定sessionStorage
 * @param {string} key
 */
export function removeCache(key) {
  return window.sessionStorage.removeItem(key);
}

/**
 * 清除所有sessionStorage
 */
export function removeAll(key) {
  return window.sessionStorage.clear();
}
