import Vue from 'vue';

const state = {
  data: [],
  loading: false,
  error: null
};

const mutations = {
  // eslint-disable-next-line no-shadow
  SET_OFFICES(state, data) {
    // eslint-disable-next-line no-param-reassign
    state.data = data;
  },
  // eslint-disable-next-line no-shadow
  SET_ERROR(state, error) {
    // eslint-disable-next-line no-param-reassign
    state.error = error;
    // eslint-disable-next-line no-console
    console.error(error);
  },
  // eslint-disable-next-line no-shadow
  SET_LOADING(state, loading) {
    // eslint-disable-next-line no-param-reassign
    state.loading = loading;
  }
};

const actions = {
  load({ commit }) {
    commit('SET_LOADING', true);
    Vue.http.get('offices')
      .then(({ data }) => {
        if (data) {
          commit('SET_OFFICES', data);
          commit('SET_LOADING', false);
        }
      })
      .catch((error) => {
        commit('SET_ERROR', error);
        commit('SET_LOADING', false);
      });
  }
};

const getters = {
  // eslint-disable-next-line no-shadow
  data(state) {
    return state.data;
  },
  // eslint-disable-next-line no-shadow
  error(state) {
    return state.error;
  },
  // eslint-disable-next-line no-shadow
  loading(state) {
    return state.loading;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
