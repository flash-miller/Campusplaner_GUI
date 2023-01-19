<template>
  <div class="desktopView">
  <v-row no-gutters>
    <v-col cols="5" md="5" sm="12">
      <v-card>
        <div class="about">
          <h1>Deine Kursübersicht</h1>
          <button id="btnAll" @click="clickBtnAll()">Alle</button>
          <button id="btnActual" @click="clickBtnAcutal()">Laufende</button>
          <div class="listbox-area" :key="redrawListKey">
            <input type="search" id="search" placeholder="Suche…" />
            <ul id="ss_elem_list" role="listbox" aria-labelledby="ss_elem">
              <v-card v-for="course in getCourses()">
                <li id="ss_elem_Np" role="option" @click="setSelectedCourse(course.id)">
                  <v-row no-gutters>
                    <v-col cols="11" md="11" sm="11">
                      <p class="header">{{ course.name }}</p>
                      <p class="infoText">{{ course.dozent }}</p>
                      <p class="infoText">{{ course.period }}</p>
                    </v-col>
                    <v-col>
                      <p class="arrow">></p>
                    </v-col>
                  </v-row>
                </li>
              </v-card>
            </ul>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="7" md="7" sm="12">
      <CourseDetail :courseId="selectedCourse" :key="redrawDetailsKey" />
    </v-col>
  </v-row>
</div>

<div class="mobileView">
  <v-row no-gutters>
    <v-col cols="15" md="5" sm="12">
      <v-card>
        <div class="about">
          <h1>Deine Kursübersicht</h1>
          <button id="btnAll" @click="clickBtnAll()">Alle</button>
          <button id="btnActual" @click="clickBtnAcutal()">Laufende</button>
          <div class="listbox-area" :key="redrawListKey">
            <input type="search" id="search" placeholder="Suche…" />
            <ul id="ss_elem_list" role="listbox" aria-labelledby="ss_elem">
              <v-card v-for="course in getCourses()">
                <li id="ss_elem_Np" role="option" @click="setSelectedCourse(course.id)">
                  <v-row no-gutters>
                    <v-col cols="11" md="11" sm="11">
                      <p class="header">{{ course.name }}</p>
                      <p class="infoText">{{ course.dozent }}</p>
                      <p class="infoText">{{ course.period }}</p>
                    </v-col>
                    <v-col>
                      <p class="arrow">></p>
                    </v-col>
                  </v-row>
                </li>
               
              </v-card>
            </ul>
          </div>
        </div>
        <CourseDetail :courseId="selectedCourse" :key="redrawDetailsKey" />
      </v-card>
    </v-col>
    <v-col cols="0" md="7" sm="12">
      
    </v-col>
  </v-row>
</div>





</template>

<script>
import store from "../store";
import CourseDetail from "../components/CourseDetailComponent.vue";

export default {
  data() {
    return {
      selectedCourse: 0,
      redrawDetailsKey: 0,
      redrawListKey: 0,
      allSelected: true
    }
  },
  components: {
    CourseDetail,
  },
  methods: {
    getStudentCourses() {
      return store.getters.getStudentCourses;
    },
    getCourses() {
      const allCourses = store.getters.getCourse;

      let result = [];
      if (this.allSelected) {
        allCourses.forEach(element => {
          result.push(element);
        });
      }
      else {
        result = this.getCoursesByStudent(allCourses);
      }

      return result;
    },
    getCoursesByStudent(allCourses) {
      const sCourses = store.getters.getStudentCourses;

      let studentCourses = [];
      sCourses.forEach((id) => {
        allCourses.forEach((c) => {
          if (c.id == id)
            studentCourses.push(c);
        });
      });

      return studentCourses;
    },
    setSelectedCourse(id) {
      this.selectedCourse = id;
      this.rerenderDetailsComponent();
    },
    rerenderDetailsComponent() {
      this.redrawDetailsKey += 1;
    },
    clickBtnAll() {
      this.allSelected = true;
      this.getCourses();
      this.rerenderCourseList();
    },
    clickBtnAcutal() {
      this.allSelected = false;
      this.getCourses();
      this.rerenderCourseList();
    },
    rerenderCourseList() {
      this.redrawListKey += 1;
    },
    
  }
}

</script>

<style>


@media (max-width: 700px) {
  .desktopView {
    display: none;
  }
}



@media (min-width: 701px) {
  .mobileView {
    display: none;
  }

  #btnAll {
  margin-left: 2px;
  margin-right: 2px;
}
#btnAll:active {
  color: #1C2764;
}
#btnAll:focus{
  text-decoration: underline;
}

#btnActual {
  margin-left: 2px;
  margin-right: 2px;
}
#btnActual:active {
  color: #1C2764;
}
#btnActual:focus{
  text-decoration: underline;
}

.arrow {
  vertical-align: middle;
}

.termin {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.listbox-area {
  padding: 10px;
  border-radius: 19px;
  background: #FFFFFF;
  width: 100%
}

[role="listbox"] {
  min-height: 18em;
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

.header {
  color: #1C2764;
  text-transform: uppercase;
}

.infoText {
  color: #A8A8A8;
}
}




</style>


