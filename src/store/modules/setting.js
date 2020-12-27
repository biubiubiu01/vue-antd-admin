import { getCache, setCache } from '@/utils/session';
const state = {
  open: true,
  fixHeader: getCache('FIX_HEARDER') == null ? true : getCache('FIX_HEARDER'),
  tagShow: getCache('TAG_SHOW') == null ? true : getCache('TAG_SHOW'),
  settingVisible: false,
  layout: getCache('LAYOUT') || 'inline',
  theme: getCache('THEME') || 'blue'
};

const mutations = {
  TOGGLE_OPEN(state) {
    state.open = !state.open;
  },
  CHANGE_SETTING(state, { key, value, cache }) {
    // eslint-disable-next-line
    if (state.hasOwnProperty(key)) {
      state[key] = value;
      setCache(cache, value);
    }
  },
  CHANGE_VISIBLE(state, bool) {
    state.settingVisible = bool;
  }
};

const actions = {
  changeSetting({ commit }, setting) {
    commit('CHANGE_SETTING', setting);
  },
  changeVisible({ commit }, bool) {
    commit('CHANGE_VISIBLE', bool);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
