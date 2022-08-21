<template>
  <div>
    <v-toolbar flat>
      <v-btn class="mx-2" icon elevation="5" @click="goBack">
        <v-icon>
          mdi-arrow-left
        </v-icon>
      </v-btn>


    </v-toolbar>

    <div class="card">

      <v-data-table class=" table elevation-20" :headers="headers" :items="players" max-width="500" disable-pagination
        hide-default-footer single-select item-key="name" mobile-breakpoint="0">

        <template v-slot:[`item.actions`]="{ item }">
          <v-btn class="mx-2" icon elevation="2" @click="add(item)">
            <v-icon>
              mdi-plus
            </v-icon>
          </v-btn>
          <v-btn class="mx-2" icon elevation="2" @click="minus(item)">
            <v-icon>
              mdi-minus
            </v-icon>
          </v-btn>
          <v-btn class="mx-2" icon elevation="2" @click="edit(item)">
            <v-icon>
              mdi-pencil
            </v-icon>
          </v-btn>
        </template>

      </v-data-table>

    </div>
    <AddPlayerForm v-model="showAddPlayerForm" />

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Players',

  components: {
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'players'
      // ...
    ])
  },
  data: () => ({
    headers: [
      { text: 'name', value: 'name' },
      { text: 'points', value: 'points' },
      { text: 'actions', value: 'actions' },
    ],
  }),
  methods: {
    ...mapActions([
      'removePlayerAction',
      'addPointToPlayerAction'
      // ...
    ]),
    goBack() {
      this.$router.push('/');
    },
    add(player) {
      console.log(player);
      let pObj = {
        playerName: player.name,
        points: 1,
      }
      this.addPointToPlayerAction(pObj);
    },
    minus(player) {
      console.log(player);
      let pObj = {
        playerName: player.name,
        points: -1,
      }
      this.addPointToPlayerAction(pObj);
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