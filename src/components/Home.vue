<template>
  <v-app>
    <div class="container">
      <v-row class="row">
        <v-btn class="btn" large @click="route('players')">Players</v-btn>
      </v-row>
      <v-row class="row">
        <v-btn class="btn" large @click="route('points_ffa')">Points FFA</v-btn>
      </v-row>
      <v-row class="row">
        <v-btn class="btn" large @click="route('dice')">Roll Dice!</v-btn>
      </v-row>
      <v-row class="row">
        <v-btn class="btn" large @click="route('team_generator')">Random Team Generator</v-btn>
      </v-row>
    </div>
  </v-app>

</template>

<script>
export default {
  name: 'Home',
  components: {

  },
  data: () => ({

  }),
  methods: {
    route(route) {
      this.$router.push(route);
    },
  }
}
</script>

<style scoped>
.container {
  /* display: block; */
  /* align-items: center; */
  /* justify-content: center; */
  vertical-align: middle;
  margin-top: 30px;
}

.btn {
  margin: auto;
  margin-top: 15px;
  width: 280px;
}
</style>
