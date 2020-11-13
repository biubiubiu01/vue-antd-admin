import request from '@/utils/request';

/**
 * @description  获取card echarts图
 * @param {string} type  类型
 * @param {currentKey}   销售或访问量等类型
 * @param {string} startTime 开始时间  可选
 * @param {string} endTime  结束时间  可选
 * @returns {Object}
 */

export function getLineChartData(data) {
  return request.post('/dashboard/lineChart', data);
}

/**
 * @description  获取card 排行榜
 * @param {string} type  类型
 * @param {currentKey}   销售或访问量等类型
 * @param {string} startTime 开始时间  可选
 * @param {string} endTime  结束时间  可选
 * @returns {Object}
 */

export function getRankShopData(data) {
  return request.post('/dashboard/rankData', data);
}

/**
 * @description  获取销售种类 饼图
 * @param {string} type  类型
 * @returns {Array}
 */

export function getPieTypeData(data) {
  return request.post('/dashboard/pieTypeData', data);
}

/**
 * @description  获取热门搜索   柱状图
 * @param {string} type  类型
 * @returns {Array}
 */

export function getHotSearchData(data) {
  return request.post('/dashboard/hotSearchData', data);
}

/**
 * @description  获取热门搜索   柱状图
 * @param {string} type  类型
 * @returns {Array}
 */

export function getMoreData(data) {
  return request.post('/dashboard/moreData', data);
}
