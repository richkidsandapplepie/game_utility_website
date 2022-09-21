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
      <v-data-table class="table" :headers="headers" :items="players" max-width="500" disable-pagination
        hide-default-footer single-select item-key="name" mobile-breakpoint="0">

        <template v-slot:[`item.actions`]="{ item }">
          <v-btn icon @click="add(item)">
            <v-icon>
              mdi-plus
            </v-icon>
          </v-btn>
          <v-btn icon @click="minus(item)">
            <v-icon>
              mdi-minus
            </v-icon>
          </v-btn>
          <v-btn icon @click="edit(item)">
            <v-icon>
              mdi-pencil
            </v-icon>
          </v-btn>
        </template>
      </v-data-table>
      <EditPoints v-model="showEditPoints" :player="selectedPlayer" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import EditPoints from './EditPoints.vue';
export default {
  name: 'Players',

  components: {
    EditPoints
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
      { text: 'Player', value: 'name' },
      { text: 'Points', value: 'points' },
      { text: 'Actions', value: 'actions' },
    ],
    showEditPoints: false,
    selectedPlayer: {},
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
    },
    edit(player) {
      this.selectedPlayer = player;
      this.showEditPoints = true;
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
  background-color: white;
}
</style>