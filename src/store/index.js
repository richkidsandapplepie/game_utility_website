import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: "test",
    players: []
  },
  getters: {
    test(state) {
      return state.test;
    },
    players(state) {
      return state.players;
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
