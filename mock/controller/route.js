import { asyncRoutes } from '@/router';
import { filterAsyncRoute } from '@/store/modules/permission';
/**  路由
 *  @param {string}  role
 *  @returns {Array}
 */
export function getRoleRoute(role) {
  return new Promise((resolve, reject) => {
    let accessedRoutes = [];
    if (role == 'admin') {
      accessedRoutes = asyncRoutes;
    } else if (role == 'text' || role == 'editor') {
      accessedRoutes = filterAsyncRoute(asyncRoutes, role);
    } else {
      accessedRoutes = [];
    }
    resolve({
      data: accessedRoutes,
      code: 200,
      message: '路由获取成功!'
    });
  });
}
