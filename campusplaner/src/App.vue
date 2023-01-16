<template>
  <v-app>
    <v-main>
      <StudentNavigation v-if="isLoggedIn"/>
      <div class="viewWrapper">
        <v-btn
          class="logoutButton"
          @click="logout()"
        >
          Logout
        </v-btn>
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script>

import StudentNavigation from './components/StudentNavigation.vue';

export default {
  name: 'App',

  components: { StudentNavigation },
  data: () => ({
    //
  }),
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout(){
      this.$store.dispatch('logout');
      this.$router.push("/login");
    }
  }
}
</script>

<style>
@font-face {
  font-family: "Barlow";
  src: local("Barlow"),   url(./assets/fonts/Barlow-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Barlow-Bold";
  src: local("Barlow"),   url(./assets/fonts/Barlow-Bold.ttf) format("truetype");
}
@font-face {
  font-family: "Barlow-SemiBold";
  src: local("Barlow"),   url(./assets/fonts/Barlow-SemiBold.ttf) format("truetype");
}
@font-face {
  font-family: "Barlow-Medium";
  src: local("Barlow"),   url(./assets/fonts/Barlow-Medium.ttf) format("truetype");
}
@font-face {
  font-family: "Barlow-Light";
  src: local("Barlow"),   url(./assets/fonts/Barlow-Light.ttf) format("truetype");
}

.viewWrapper {
  padding: 25px 200px 0 200px;
}

.logoutButton {
  position: absolute;
  right: 25px;
  font-size: 9px;
}

h3 {
  color: #1C2764;
}
</style>      
