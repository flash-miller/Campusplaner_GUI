<template>
  <NotificationOverview id="notifications"/>
  <HelloWorld id="helloWorld"/>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';
import NotificationOverview from '@/components/NotificationOverview.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
    NotificationOverview
  },
});
</script>

<style>
  #notifications {
    width: 70%;
    float: left;
  }
  #helloWorld {
    width: 30%;
    float: right;
  }
</style>