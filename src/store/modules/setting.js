const state = {
  open: true,
  fixHeader: true,
  tagShow: true,
  settingShow: false
};

const mutations = {
  TOGGLE_OPEN(state) {
    state.open = !state.open;
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
