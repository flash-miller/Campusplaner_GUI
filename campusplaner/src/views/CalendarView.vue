<template>
  <v-row no-gutters>
    <v-col cols="7" md="7" sm="12">
      <v-card>
        <h1>MEIN KALENDER</h1>
        <div class="colours">
          <p>Vorlesungen</p>
          <v-img class="glocke" :src="require('@/assets/images/icons/notification icon.png')" />
        </div>
        <div class="colours">
          <p>Übungen</p>
          <v-img class="glocke" :src="require('@/assets/images/icons/notification icon.png')" />
        </div>
        <div class="colours">
          <p>Eigene Einträge</p>
          <v-img class="glocke" :src="require('@/assets/images/icons/notification icon.png')" />
        </div>
        <div class="colours">
          <p>Hochschule</p>
          <v-img class="glocke" :src="require('@/assets/images/icons/notification icon.png')" />
        </div>
        <div class="colours"> 
          <v-img class="glocke" :src="require('@/assets/images/icons/kalendericon.png')" />
          <p>exportieren</p>
        </div>
        <div class="listbox-area">
            <input type="search" id="search" placeholder="Suche…" />

            <ul id="ss_elem_list" role="listbox" aria-labelledby="ss_elem">
              <v-card v-for="course in getCoursesByStudent()">
                <li id="ss_elem_Np" role="option">
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

      </v-card>
    </v-col>
    <v-col cols="5" md="5" sm="12">
      <v-card outlined tile class="todoWrapper">
        <TodoComponent />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import store from "../store";
import CourseDetail from "../components/CourseDetailComponent.vue";

export default {
  data() {
    return {
      passedData: {
        courseId: "1"
      }
    }
  },
  components: {
    CourseDetail,
  },
  methods: {
    getStudentCourses() {
      return store.getters.getStudentCourses;
    },
    getCoursesByStudent() {
      const sCourses = store.getters.getStudentCourses;
      const allCourses = store.getters.getCourse;

      let studentCourses = [];
      sCourses.forEach((id) => {
        allCourses.forEach((c) => {
          if (c.id == id)
            studentCourses.push(c);
        });
      });

      return studentCourses;
    }
  }
}

</script>

<style>
.colours {
  display: flex;
}

.glocke {
  height: 20px;
}
</style>