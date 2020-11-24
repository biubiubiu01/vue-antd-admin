const state = {
  tagList: []
};

const mutations = {
  ADD_TAGS(state, route) {
    const index = state.tagList.findIndex(item => item.path == route.path);
    if (index == -1) {
      state.tagList.push({
        ...route
      });
    }
  },
  REMOVE_TAGS(state, path) {
    const index = state.tagList.findIndex(item => item.path == path);
    state.tagList.splice(index, 1);
  },
  CLEAR_TAGS(state) {
    state.tagList = [];
  }
};

const actions = {
  addTag({ commit }, route) {
    commit('ADD_TAGS', route);
  },
  removeTag({ state, commit }, path) {
    return new Promise((resolve, reject) => {
      commit('REMOVE_TAGS', path);
      resolve(state.tagList);
    });
  },
  clearTag({ commit }) {
    commit('CLEAR_TAGS');
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
