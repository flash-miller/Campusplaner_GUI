<template>
  <h1>Hallo {{ getFirstName() }}!</h1>
  <v-row no-gutters>
    <v-col
      cols="7"
      md="7"
      sm="12"
      >
      <v-card>
        Hello
      </v-card>
    </v-col>
    <v-col
      cols="5"
      md="5"
      sm="12"
    >
      <v-card outlined tile>
        Hello2
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { defineComponent } from 'vue';
import store from "../store";

// Components
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
  },

  methods: {
    getFirstName() {
      return store.getters.getStudentName.firstName;
    }
  }
});
</script>
