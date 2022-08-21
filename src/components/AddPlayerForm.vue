<template>
  <v-dialog v-model="show" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="text-h5">Add Player/s</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="player" label="name"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click.stop="show = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="onClickAddPlayer">
          Add
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddPlayerForm',
  props: {
    value: Boolean
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    },

  },
  data: () => ({
    player: '',
  }),

  methods: {
    ...mapActions([
      'addSinglePlayer'
      // ...
    ]),
    // Adds single player.
    onClickAddPlayer() {
      if (this.player) {
        this.addSinglePlayer({ name: this.player, points: 0 });
        this.show = false;
      }

    }
  }
}
</script>