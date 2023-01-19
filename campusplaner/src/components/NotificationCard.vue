<template>
    <v-row no-gutters>
        <v-col cols="9" md="9" sm="9">
            <p class="notification-header">{{ notification.headline }}</p>
            <p class="notification-body">{{ notification.text }}</p>
        </v-col>
        <v-col cols="3" md="3" sm="3">
            <p class="notification-body tx-r">{{ notification.date }}</p>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        notification: Object
    }
}
</script>

<style>
.notification-header {
    color: #1C2764;
    text-transform: uppercase;
}

.notification-body {
    color: #A8A8A8;
}

.tx-r {
    text-align: right;
}
</style>