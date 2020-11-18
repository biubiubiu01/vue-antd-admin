import { baseRoute, asyncRoutes } from '@/router';

const state = {
  routes: []
};

const mutations = {
  SET_ROUTE(state, route) {
    state.routes = baseRoute.concat(route);
  }
};

const actions = {
  getRoute({ commit }, role) {
    return new Promise((resolve, reject) => {
      let accessedRoutes = [];
      if (role == 'admin') {
        accessedRoutes = asyncRoutes;
      } else {
        accessedRoutes = filterAsyncRoute(asyncRoutes, role);
      }
      commit('SET_ROUTE', accessedRoutes);
      resolve(accessedRoutes);
    });
  }
};

function filterAsyncRoute(routes, role) {
  let arr = [];
  routes.forEach(item => {
    const temp = { ...item };
    if (hasChildren(temp, role)) {
      if (temp.children) {
        temp.children = filterAsyncRoute(temp.children, role);
      }
      arr.push(temp);
    }
  });
  return arr;
}

function hasChildren(route, role) {
  if (route.meta && route.meta.role) {
    return route.meta.role.some(item => item == role);
  } else {
    return true;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
