<template>
  <div class="about">
    <NotificationOverview />
  </div>
</template>

<script>
import NotificationOverview from '@/components/NotificationOverview.vue';

export default ({
  components: {
    NotificationOverview
  },
});
</script>

<style>
  .about #tv-img-div {
    padding: 0 150px 0 150px;
  }

  .tv-info {
    margin: 0;
  }
</style>