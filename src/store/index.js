import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: "test",
    players: [{ name: "Jade", points: 0 }, { name: "Richard", points: 0 }],
  },
  getters: {
    test(state) {
      return state.test;
    },
    players(state) {
      return state.players;
    }
  },
  mutations: {
    addPlayer(state, player) {
      state.players.push(player);
    },
    removePlayer(state, selectedPlayers) {
      state.players = state.players.filter(player => !selectedPlayers.includes(player));

    }
  },
  actions: {
    addSinglePlayer({ commit }, player) {
      commit('addPlayer', player);
    },
    removePlayer({ commit }, selectedPlayers) {
      commit('removePlayer', selectedPlayers);
    }
  },
  modules: {},
});
