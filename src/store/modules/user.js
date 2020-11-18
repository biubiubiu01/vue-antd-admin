import { getCache, setCache, removeCache } from '@/utils/session';
import { login, logout, getCodeTest, getInfo } from '@/api/user';
import { resetRouter } from '@/router';

const state = {
  accountInfo: null,
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
          removeCache('TOKEN');
          resetRouter();
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo({ token: state.token })
        .then(res => {
          const { data } = res;
          if (data) {
            commit('SET_USERINFO', data);
          }
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  updateInfo({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      commit('SET_USERINFO', userInfo);
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
