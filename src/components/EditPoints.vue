<template>
  <v-dialog v-model="show" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="text-h5">Edit Points</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="points" type="number" label="points"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click.stop="show = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="clear">
          Clear
        </v-btn>
        <v-btn color="blue darken-1" text @click="onClickAddPoints">
          Add
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'EditPoints',
  props: {
    value: Boolean,
    player: Object,
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
    points: null,
  }),

  methods: {
    ...mapActions([
      "addPointToPlayerAction"
    ]),
    onClickAddPoints() {
      let int = parseInt(this.points);
      
      this.addPointToPlayerAction({
        playerName: this.player.name,
        points: int
      });

      // Close dialog.
      this.show = false;
    },
    clear() {
      let int = parseInt(this.player.points);

      this.addPointToPlayerAction({
        playerName: this.player.name,
        points:-(int) 
      });

      // Close dialog.
      this.show = false;
    }

  }
}
</script>