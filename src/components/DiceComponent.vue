
<template>
<div>
  <v-toolbar flat>
    <v-btn class="mx-2" icon elevation="5" @click="goBack">
      <v-icon>
        mdi-arrow-left
      </v-icon>
    </v-btn>
  </v-toolbar>

  <v-divider></v-divider>

  <v-card id="dicePanel" elevation="2" outlined>

    <!-- Table of Dice -->
    <v-simple-table dark>
      <thead>
        <tr>
          <th>Number of Sides</th>
          <th>Number of Dice</th>
          <th>Remove Dice</th>
        </tr>
      </thead>     
      <tbody>
        <tr v-for="(dice,i) in diceGroups" :key="i">

          <!-- Number of Sides Column -->
          <td>
            <v-btn class="mx-2" x-small fab color="white" @click="decrementSidesDiceGroup(i)">
              <v-icon color="black">mdi-minus</v-icon>
            </v-btn>
            <v-btn class="mx-2" x-small fab color="white" @click="incrementSidesDiceGroup(i)">
              <v-icon color="black">mdi-plus</v-icon>
            </v-btn>
            d{{ dice.numSides }}
          </td>
          
          <!-- Number of Dice Column -->
          <td>
            <v-btn class="mx-2" x-small fab color="white" @click="decrementNumDiceGroup(i)">
              <v-icon color="black">mdi-minus</v-icon>
            </v-btn>
            <v-btn class="mx-2" x-small fab color="white" @click="incrementNumDiceGroup(i)">
              <v-icon color="black">mdi-plus</v-icon>
            </v-btn>
            x{{ dice.numDice }}
          </td> 

          <!-- Remove Dice Column -->
          <td>
            <v-btn class="mx-2" color="red" @click="removeDiceGroup(i)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>

        <!-- Add a new dice group row -->
        <tr>
          <td>
            <v-btn class="mx-2" color="green" @click="addDiceGroup">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            Add dice group
          </td>
        </tr>

      </tbody>
    </v-simple-table>

    <v-card id="rollPanel" dark>
      <v-btn class="mx-2" color="indigo" @click="rollTheDice">Roll the Dice!</v-btn>
      <v-card id="resultPanel" light>
        <p>{{ resultString }}</p>
        <p v-if="totalRoll !== 0">Total = {{ totalRoll }}</p>
        <p v-if="maxRoll !== 0">Max = {{ maxRoll }}</p>
        <p v-if="averageRoll !== 0">Average = {{ averageRoll }}</p>
      </v-card>
    </v-card>

  </v-card> 
<!-- 
    <v-btn class="mx-2" fab dark color="gray">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-btn class="mx-2" fab dark color="gray">
      <v-icon>mdi-minus</v-icon>
    </v-btn>
  </v-card>
-->
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {

  // ??????
  computed: {
    ...mapGetters([
      'diceGroups'
    ])
  },

  data() {
    return {
      diceRolls: [],
      totalRoll: 0,
      maxRoll: 0,
      averageRoll: 0,
      resultString: ''
    };
  },
  methods: {
    ...mapActions([
      'addDiceGroup',
      'removeDiceGroup',
      'incrementSidesDiceGroup',
      'decrementSidesDiceGroup',
      'incrementNumDiceGroup',
      'decrementNumDiceGroup'
    ]),
    goBack() {
      this.$router.push('/');
    },
    rollDiceGroup(diceGroup) {
      let result = [];
      for (let i = 0; i < diceGroup.numDice; i++) {
        result.push(
          Math.floor(Math.random() * diceGroup.numSides) + 1
        );
      }
      return result;
    },
    rollTheDice() {
      // clear dice rolls
      this.diceRolls = [];

      // for each diceGroup, roll the diceGroup and append results to diceRolls
      this.diceGroups.forEach(dg => this.diceRolls = this.diceRolls.concat(this.rollDiceGroup(dg)));

      // clear the result string
      this.resultString = '';

      // build result string
      this.resultString = this.diceRolls.join(', ');

      // get stats about the roll
      this.totalRoll = this.getTotalRoll();
      this.maxRoll = this.getMaxRoll();
      this.averageRoll = this.getAverageRoll(); 
    },
    getMaxRoll() {
      return Math.max(...this.diceRolls);
    },
    getAverageRoll() {
      return this.getTotalRoll() / this.diceRolls.length;
    },
    getTotalRoll() {
      return this.diceRolls.reduce( (l,r)=>l+r, 0); 
    }
  }	
}
</script>

<style scoped>
  #dicePanel {
    padding: 2%;
    margin: 2%;
    background-color: rgb(120,120,120);
  }
  #rollPanel {
    padding: 2%;
    margin-top: 2%;
  }  
  #resultPanel {
    padding: 1%;
    margin: 0.9%;
  }

</style>
