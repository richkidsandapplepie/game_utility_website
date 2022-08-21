<template>
  <div>
    <v-toolbar flat>
      <v-btn class="mx-2" icon elevation="5" @click="goBack">
        <v-icon>
          mdi-arrow-left
        </v-icon>
      </v-btn>
      <v-btn class="mx-2" icon elevation="5" @click="onClickAddPlayerForm" @click.stop="showAddPlayerForm = true">
        <v-icon>
          mdi-plus
        </v-icon>
      </v-btn>
      <v-btn class="mx-2" icon elevation="5" @click="onClickRemovePlayer">
        <v-icon>
          mdi-minus
        </v-icon>
      </v-btn>
    </v-toolbar>

    <div class="card">

      <v-data-table class=" table elevation-20" v-model="selectedPlayers" show-select :headers="headers"
        :items="players" max-width="500" disable-pagination hide-default-footer hide-default-header item-key="name" mobile-breakpoint="0">
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
  }),
  methods: {
    ...mapActions([
      'removePlayerAction'
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
</style>