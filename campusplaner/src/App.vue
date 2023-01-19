<template>
  <v-app>
    <v-main>
      <StudentNavigation v-if="isLoggedIn" />
      <div class="viewWrapper">
        <v-btn class="logoutButton" @click="logout()">
          Logout
        </v-btn>
        <router-view />
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
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push("/login");
    }
  }
}
</script>

<style>
@font-face {
  font-family: "Barlow";
  src: local("Barlow"), url(./assets/fonts/Barlow-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Barlow-Bold";
  src: local("Barlow"), url(./assets/fonts/Barlow-Bold.ttf) format("truetype");
}

@font-face {
  font-family: "Barlow-SemiBold";
  src: local("Barlow"), url(./assets/fonts/Barlow-SemiBold.ttf) format("truetype");
}

@font-face {
  font-family: "Barlow-Medium";
  src: local("Barlow"), url(./assets/fonts/Barlow-Medium.ttf) format("truetype");
}

@font-face {
  font-family: "Barlow-Light";
  src: local("Barlow"), url(./assets/fonts/Barlow-Light.ttf) format("truetype");

}

@media (max-width: 700px) {
  .viewWrapper {
    padding: 1px 1px 1px;
  }

}


.viewWrapper {
  padding: 15px 15px 15 15px;
}
.logoutButton {
  position: absolute;
  right: 25px;
  font-size: 9px;
}
h1, h2, h3 {
  color: #1C2764;
  text-transform: uppercase;
}
h3 {
  font-size: 20px;
}
.v-card {
    margin: 2px;
    padding: 2px;
}
.dark-mode {
    background-color: #16171d;
  color: #fff;
}
</style>      
