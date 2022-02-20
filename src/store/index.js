import { createStore } from 'vuex';

export default createStore({
  state: {
    message: '笑你',
    count: 87,
  },
  getters: {
    title(state) {
      return `${state.message}${state.count}`;
    },
    fullTitle(state, getters) {
      return `${getters.title}${state.count}`;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
