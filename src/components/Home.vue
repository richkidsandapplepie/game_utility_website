<template>
  <v-app>
    <div class="container">
      <v-row>
        <v-btn class="btn" rounded elevation="10" large @click="route('players')">Players</v-btn>
      </v-row>
      <v-row>
        <v-btn class="btn" rounded elevation="10" large @click="route('points_ffa')">Points FFA</v-btn>
      </v-row>
      <v-row>
        <v-btn class="btn" rounded elevation="10" large @click="route('dice')">Roll Dice!</v-btn>
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
  margin: 10px;
}
</style>
