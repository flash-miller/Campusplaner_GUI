<template>
  <div class="desktopView">
  <h1>Hallo {{ getFirstName() }}!</h1>
  <v-row no-gutters>
    <v-col
      cols="7"
      md="7"
      sm="12"
      >
      <v-card>
        <NotificationOverview />
      </v-card>
    </v-col>
    <v-col
      cols="5"
      md="5"
      sm="12"
    >
      <v-card outlined tile class="todoWrapper">
        <TodoComponent/>
      </v-card>
    </v-col>
  </v-row>
  </div>

  <div class="mobileView">
    <h1>Hallo {{ getFirstName() }}!</h1>
  <v-row no-gutters>
    <v-col
      cols="17"
      md="1"
      sm="1"
      >
      <v-card>
        <NotificationOverview />
      </v-card>
      <v-card outlined tile class="todoWrapper">
        <TodoComponent/>
      </v-card>
    </v-col>
    <v-col
      cols="0"
      md="0"
      sm="0"
    >
     
    </v-col>
  </v-row>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import store from "../store";

// Components
import NotificationOverview from '@/components/NotificationOverview.vue';
import TodoComponent from '@/components/TodoComponent.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    NotificationOverview, TodoComponent
  },

  methods: {
    getFirstName() {
      return store.getters.getStudentName.firstName;
    }
  }
});
</script>

<style scoped>

@media (max-width: 700px) {
  .desktopView{
    visibility: hidden;
  }
}



@media (min-width: 701px) {
  .mobileView{
    visibility: hidden;
  }
   .todoWrapper {
    overflow: visible;
  }
  }
</style>