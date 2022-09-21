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
      <v-text-field v-model="teamCount" label="Team Count" solo></v-text-field>
      <div class="btn-group"> 
         <v-btn class="btn" @click="randomize">
        Randomize
      </v-btn>
      <v-btn class="btn" @click="onClickSetTeams">
        Set Teams
      </v-btn>
      </div>
     
      <v-card class="team-card" v-for="item in this.teams" v-bind:key="item.teamName">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>{{ item.teamName }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.players.join(" ") }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
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
    teams: [],
    shuffledPlayers: [],
    teamCount: null,
  }),
  methods: {
    ...mapActions([
      // ...
    ]),
    goBack() {
      this.$router.push('/');
    },
    randomize() {

      // Clear lists.
      this.teams = [];
      this.shuffledPlayers = [];

      // Shuffle the player names into array: shuffledPlayers.
      console.log(this.players);

      // Store only the names.
      for (let player of this.players) {
        this.shuffledPlayers.push(player.name);
      }

      // Shuffle the array.
      this.shuffledPlayers = this.shuffle(this.shuffledPlayers);
      console.log(this.shuffledPlayers);

      // Create x amount of teams and push to teams.
      let length = parseInt(this.teamCount);
      for (let x = 0; x < length; x++) {
        this.teams.push({ teamName: `Team ${x}` });
      }

      // Chunk the players
      let chunkArray = this.chunkArrayInGroups(this.shuffledPlayers, (this.players.length / this.teamCount));
      console.log(chunkArray);

      // Add the chunk to the teams
      for (let x = 0; x < length; x++) {
        this.teams[x].players = chunkArray[x];
      }

      console.log(this.teams);

    },
    shuffle(array) {
      let counter = array.length;

      // While there are elements in the array
      while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
      }

      return array;
    },
    chunkArrayInGroups(arr, size) {
      var myArray = [];
      for (var i = 0; i < arr.length; i += size) {
        myArray.push(arr.slice(i, i + size));
      }
      return myArray;
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
  margin-bottom: 20px;
  background-color: white;
}

.team-card {
  margin-bottom: 15px;
}
.btn-group {
  display: flex;
  justify-content: space-between; 
}
</style>