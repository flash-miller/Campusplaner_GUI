<template>
    <div>
        <v-img class="tv-info" :src="require('@/assets/images/tv_info.jpg')" />
    </div>
    <div>
        <h3>BENACHRICHTIGUNGEN</h3>
        <v-row no-gutters>
            <v-col cols="6" md="6" sm="12">
                <v-card>
                    <p>HOCHSCHULE</p>
                    <v-card 
                        v-for = "notification in getNotifications()"
                    >
                        <p class="notification-header">{{ notification.headline }}</p>
                        <p class="notification-body">{{ notification.text }}</p>
                    </v-card>
                    <p class="more">Weitere...</p>
                </v-card>
            </v-col>
            <v-col cols="6" md="6" sm="12">
                <v-card>
                    <p>DOZENTEN</p>
                    <v-card>
                        <p class="notification-header">Systemnahe Programmierung</p>
                        <p class="notification-body">Das Tutorium findet heute ab 15:30 Uhr in HS01 statt.</p>
                    </v-card>
                    <hr />
                    <v-card>
                        <p class="notification-header">Data Science</p>
                        <p class="notification-body">Für alle die am Samstag gefehlt haben, wiederhole ich nochmal die
                            Praxisbeisp...</p>
                    </v-card>
                    <hr />
                    <v-card>
                        <p class="notification-header">Übung Explority Data Analysis</p>
                        <p class="notification-body">Die Abnhame für Aufgabe 02 werden am Mittwoch um 11 Uhr
                            stattfinden.</p>
                    </v-card>
                    <hr />
                    <v-card>
                        <p class="notification-header">Systemnahe Programmierung</p>
                        <p class="notification-body">Die Ergebnisse der Nachbereitung vom letzten Mittwoch stehen zur
                            Verfügung.</p>
                    </v-card>
                    <p class="more">Weitere...</p>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import store from "../store";

export default {
    methods: {
        getNotifications() {
            return store.getters.getNotifications;
        }
    }
}
</script>

<style>
.tv-info {
    width: 698px;
}

.notification-header {
    color: #1C2764;
}

.notification-body {
    color: #A8A8A8;
}

.more {
    color: #A8A8A8;
    font-style: italic;
}
</style>