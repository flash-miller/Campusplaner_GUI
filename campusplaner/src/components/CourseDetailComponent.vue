<template>
    <v-card outlined tile>
        <h2>Systemnahe Programmierung</h2>
        <p>Christian Uhlig</p>
        <p>Mittwoch 8:00-9:15 Uhr</p>
        <p>Klausur</p>
        <br>
        <p>zusätzliche Übung</p>
        <p>ÜBUNG SYSTEMNAHE PROGRAMMIERUNG</p>
        <p>Übung ist vorbedingung für weitere Module!</p>
        <br>
        <h2>BENACHRICHTIGUNGEN</h2>
        <div class="termin">
          <p>SYSTEMNAHE PROGRAMMIERUNG</p>
          <p>HEUTE</p>
        </div>
        <div class="termin">
          <p>Das Tutorium findet heute ab 15:30 Uhr in HS01 statt.</p>
          <p>11:45</p>
        </div>
        <br>


        <p>SYSTEMNAHE PROGRAMMIERUNG</p>
        <p>Die Ergebnisse der Nachbereitung vom letzten Mittwoch stehen zur Verfügung. Es geht um dne Vorlesungsteil 4
          “Listenstrukturen”.</p>
        <br>
        <h2>VORLESUNGSMATERIALEN</h2>
        <h1>{{ course-Id }}</h1>
      </v-card>
</template>

<script>
export default {
    props: ['courseId']
}
</script>

<style>
</style>