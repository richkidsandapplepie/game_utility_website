<template>
  <div class="main">
    <div class="card">
      <div>
        <v-btn class="btn" @click="goBack">
          <v-icon>
            mdi-arrow-left
          </v-icon>
        </v-btn>
      </div>
      <v-text-field class="text-field" v-model="player" label="Name" solo color="white"></v-text-field>
      <div class="btn-group">
        <v-btn class="btn" @click="onClickAddPlayer">Add</v-btn>
        <v-btn class="remove-btn" @click="onClickRemovePlayer">Remove</v-btn>
      </div>
      <v-data-table class=" table elevation-5" v-model="selectedPlayers" show-select :headers="headers" :items="players"
        max-width="500" disable-pagination hide-default-footer hide-default-header item-key="name"
        mobile-breakpoint="0">
      </v-data-table>
    </div>
    <AddPlayerForm v-model="showAddPlayerForm" />

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AddPlayerForm from './AddPlayerForm.vue'
export default {
  name: 'Players',

  components: {
    AddPlayerForm,
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'players'
      // ...
    ])
  },
  data: () => ({
    showAddPlayerForm: false,
    headers: [{ text: 'name', value: 'name' }],
    selectedPlayers: [],
    player: '',
  }),
  methods: {
    ...mapActions([
      'removePlayerAction',
      'addPlayerAction'
      // ...
    ]),
    goBack() {
      this.$router.push('/');
    },
    onClickAddPlayerForm() {
    },
    onClickRemovePlayer() {
      // call store action to remove player/s
      this.removePlayerAction(this.selectedPlayers);
      // Reset checkboxes.
      this.selectedPlayers = [];
    },
    onClickAddPlayer() {
      if (this.player) {
        this.addPlayerAction({ name: this.player, points: 0 });
      }

      // Clear text field.
      this.player = '';

    }
  }
};
</script>

<style scoped>
.card {
  width: 500px;
  margin: auto;
  padding-top: 20px;
}

.table {
  margin-top: 30px;
}

.btn {
  margin-right: 10px;
  background-color: white;
}

.text-field {
  margin-top: 20px;
}

.btn-group {
  display: flex;
  justify-content: space-between; 
}
</style>