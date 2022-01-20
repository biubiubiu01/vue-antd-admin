import { getCache, setCache, removeCache } from '@/utils/session';
import { login, logout, getCodeTest } from '@/api/user';
import { resetRouter } from '@/router';

const state = {
  accountInfo: getCache('USERINFO') || '',
  token: getCache('TOKEN') || ''
};

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_USERINFO(state, userInfo) {
    state.accountInfo = userInfo;
  }
};

const actions = {
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo)
        .then(res => {
          const { data } = res;
          if (data) {
            commit('SET_TOKEN', data.token);
            setCache('TOKEN', data.token);
            commit('SET_USERINFO', data.userInfo);
            setCache('USERINFO', data.userInfo);
          }
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  codeTest({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      getCodeTest(userInfo)
        .then(res => {
          const { data } = res;
          if (data) {
            commit('SET_TOKEN', data.token);
            setCache('TOKEN', data.token);
          }
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout()
        .then(() => {
          commit('SET_TOKEN', '');
          commit('SET_USERINFO', '');
          commit('permission/RESET_ROUTE', [], { root: true });
          removeCache('TOKEN');
          removeCache('USERIFNO');
          resetRouter();
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  updateInfo({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      commit('SET_USERINFO', userInfo);
      setCache('USERINFO', userInfo);
      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
