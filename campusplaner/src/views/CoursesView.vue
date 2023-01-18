<template>
  <v-row no-gutters>
    <v-col cols="7" md="7" sm="12">
      <v-card>
        <div class="about">

          <h1>Deine Kursübersicht</h1>
          <div class="listbox-area">
            <div>
              <input type="search" id="search" placeholder="Suche…" />

              <ul id="ss_elem_list" role="listbox" aria-labelledby="ss_elem">
                <v-card v-for="course in getStudentCourses()">
                  <li id="ss_elem_Np" role="option">
                    {{ course }}
                  </li>
                </v-card>

              </ul>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="5" md="5" sm="12">
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
      </v-card>
    </v-col>
  </v-row>

</template>

<script>
import store from "../store";
export default {
  methods: {
    getStudentCourses() {
      return store.getters.getStudentCourses;
    }
  }
}

</script>

<style>

.termin {
  display: flex;
    justify-content: space-between;
    width: 100%;
}

.listbox-area {
  padding: 15px;
  border: 1px solid #aaa;
  border-radius: 19px;
  background: #eee;
  margin-right: 50%
}

[role="listbox"] {
  min-height: 18em;
  border: 1px solid #aaa;
  background: white;
}

[role="listbox"]#ss_elem_list {
  position: relative;
  max-height: 18em;
  overflow-y: auto;
}

[role="listbox"]+*,
.listbox-label+* {
  margin-top: 1em;
}

[role="group"] {
  margin: 0;
  padding: 0;
}

[role="group"]>[role="presentation"] {
  display: block;
  margin: 0;
  padding: 0 0.5em;
  font-weight: bold;
  line-height: 2;
  background-color: #ccc;
}

[role="option"] {
  position: relative;
  display: block;
  padding: 0 1em 0 1.5em;
  line-height: 1.8em;
}

[role="option"].focused {
  background: #bde4ff;
}

[role="option"][aria-selected="true"]::before {
  position: absolute;
  left: 0.5em;
  content: "✓";
}

button[aria-haspopup="listbox"] {
  position: relative;
  padding: 5px 10px;
  width: 150px;
  border-radius: 0;
  text-align: left;
}

button[aria-haspopup="listbox"]::after {
  position: absolute;
  right: 5px;
  top: 10px;
  width: 0;
  height: 0;
  border: 8px solid transparent;
  border-top-color: currentcolor;
  border-bottom: 0;
  content: "";
}

button[aria-haspopup="listbox"][aria-expanded="true"]::after {
  position: absolute;
  right: 5px;
  top: 10px;
  width: 0;
  height: 0;
  border: 8px solid transparent;
  border-top: 0;
  border-bottom-color: currentcolor;
  content: "";
}

button[aria-haspopup="listbox"]+[role="listbox"] {
  position: absolute;
  margin: 0;
  width: 9.5em;
  max-height: 10em;
  border-top: 0;
  overflow-y: auto;
}

[role="toolbar"] {
  display: flex;
}

[role="toolbar"]>* {
  border: 1px solid #aaa;
  background: #ccc;
}

[role="toolbar"]>[aria-disabled="false"]:focus {
  background-color: #eee;
}

button {
  font-size: inherit;
}

button[aria-disabled="true"] {
  opacity: 0.5;
}

.move-right-btn::after {
  content: " →";
}

.move-left-btn::before {
  content: "← ";
}

.annotate {
  color: #366ed4;
  font-style: italic;
}

.hidden {
  display: none;
}

.offscreen {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  font-size: 14px;
  white-space: nowrap;
}
</style>


