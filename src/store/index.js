import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: "test",
    players: [{ name: "Jade", points: 0 }, { name: "Richard", points: 0 }],
    diceGroups: []
  },
  getters: {
    test(state) {
      return state.test;
    },
    players(state) {
      return state.players;
    },
    diceGroups(state) {
      return state.diceGroups;
    }
  },
  mutations: {
    addPlayerMutation
      (state, player) {
      state.players.push(player);
    },
    removePlayerMutation(state, selectedPlayers) {
      state.players = state.players.filter(player => !selectedPlayers.includes(player));
    },
    addPointToPlayerMutation(state, obj) {
      // Extract parameter object.
      let name = obj.playerName;
      let point = obj.points;

      // Loop through array of players and add points.
      state.players.forEach(player => {
        if (player.name === name) {
          player.points += point;
        }
      });
    },

    // Dice Group Mutations
    addDiceGroupMutation(state) {
      state.diceGroups.push({numSides: 6, numDice: 1});
    },
    removeDiceGroupMutation(state, i) {
      if (i > -1 && i < state.diceGroups.length) {
        state.diceGroups.splice(i, 1);
      }
    },
    incrementSidesDiceGroupMutation(state, i) {
      if (i > -1 && i < state.diceGroups.length) {
        state.diceGroups[i].numSides++;
      }
    },
    decrementSidesDiceGroupMutation(state, i) {
      if (i > -1 && i < state.diceGroups.length) {
        // prevent less than 2 sides
        state.diceGroups[i].numSides = Math.max(2, state.diceGroups[i].numSides - 1);
      }
    },
    incrementNumDiceGroupMutation(state, i) {
      if (i > -1 && i < state.diceGroups.length) {
        state.diceGroups[i].numDice++;
      }
    },
    decrementNumDiceGroupMutation(state, i) {
      if (i > -1 && i < state.diceGroups.length) {
        // prevent less than 1 dice
        state.diceGroups[i].numDice = Math.max(1, state.diceGroups[i].numDice - 1);
      }
    }
  },
  actions: {
    addPlayerAction({ commit }, player) {
      commit('addPlayerMutation', player);
    },
    removePlayerAction({ commit }, selectedPlayers) {
      commit('removePlayerMutation', selectedPlayers);
    },
    addPointToPlayerAction({ commit }, obj) {
      commit('addPointToPlayerMutation', obj);
    },
    addDiceGroup({ commit }) {
      commit('addDiceGroupMutation');
    },
    removeDiceGroup({ commit }, i) {
      commit('removeDiceGroupMutation', i);
    },
    incrementSidesDiceGroup({ commit }, i) {
      commit('incrementSidesDiceGroupMutation', i);
    },
    decrementSidesDiceGroup({ commit }, i) {
      commit('decrementSidesDiceGroupMutation', i);
    },
    incrementNumDiceGroup({ commit }, i) {
      commit('incrementNumDiceGroupMutation', i);
    },
    decrementNumDiceGroup({ commit }, i) {
      commit('decrementNumDiceGroupMutation', i);
    }
  },
  modules: {},
});
