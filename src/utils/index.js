import remoteLoad from './remoteLoad';
const { AMapCDN, AMapUiCDN } = require('@/plugins/cdn');

/**
 * 用于将地址后面的参数转换成对象返回
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}'
  );
}

/**
 * 函数防抖
 * @param {Function} func
 * @param {number} delay
 * @param {boolean} immediate
 * @return {*}
 */

export function debounce(func, delay, immediate = false) {
  let timer,
    context = this;
  return (...args) => {
    if (immediate) {
      func.apply(context, args);
      immediate = false;
      return;
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

/**
 * 获取geoJson数据  通过高德获取    递归获取区县geoJson
 * @param  {string} adcode  行政区code
 * @param  {string} childAdcode 区县级行政区code
 * @return {Array}
 */
export function getGeoJson(adcode, childAdcode = '') {
  return new Promise((resolve, reject) => {
    initAMap().then(status => {
      if (status) {
        insideFun(adcode, childAdcode);
      } else {
        reject('高德api获取失败');
      }
    });
    function insideFun(adcode, childAdcode) {
      // eslint-disable-next-line
      AMapUI.loadUI(['geo/DistrictExplorer'], DistrictExplorer => {
        var districtExplorer = new DistrictExplorer();
        districtExplorer.loadAreaNode(adcode, function(error, areaNode) {
          if (error) {
            console.error(error);
            reject(error);
            return;
          }
          let Json = areaNode.getSubFeatures();
          if (Json.length === 0) {
            let parent = areaNode._data.geoData.parent.properties.acroutes;
            insideFun(parent[parent.length - 1], adcode);
            return;
          }

          if (childAdcode) {
            Json = Json.filter(item => {
              return item.properties.adcode == childAdcode;
            });
          }
          let mapJson = {
            features: Json
          };
          resolve(mapJson);
        });
      });
    }
  });
}

/**
 * 初始化AMap 和AMapUI 异步加载
 */
async function initAMap() {
  if (window.AMap && window.AMapUI) {
    return true;
  } else {
    try {
      await remoteLoad(AMapCDN);
      await remoteLoad(AMapUiCDN);
      if (window.AMap && window.AMapUI) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }
}

/**
 * 转换JSON  导出
 * @param  {Array}
 * @return {Array}
 */

export function formatJson(arr, filterVal) {
  return arr.map(v => filterVal.map(j => v[j].toString()));
}
