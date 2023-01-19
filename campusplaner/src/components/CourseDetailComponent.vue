<template>
    <v-card outlined tile>
        <div>
            <h2>{{ course.name }}</h2>
            <p>{{ course.dozent }}</p>
            <p>{{ course.period }}</p>
            <p>{{ course.examMethod }}</p>
            <p v-if="course.prerequirement">Übung ist eine Vorbedingung für weitere Module!</p>
            <button id="registerC" @click="setCourseRegister(course.id)">{{ getRegisteredText() }}</button>
            <div v-if="hasOtherCourses()">
                <h4>Zusätzliche Übung</h4>
                <v-card v-for="practice in getOtherCourses()">
                    <p>{{ practice.name }}</p>
                    <p v-if="practice.prerequirement">Veranstaltung ist eine Vorbedingung für weitere Module!</p>
                </v-card>
            </div>
        </div>
        <br />
        <div>
            <h2 v-if="hasNotifications()">BENACHRICHTIGUNGEN</h2>
            <v-card v-for="notification in getNotifications()">
                <NotificationCard :notification="notification" />
            </v-card>
        </div>
        <br />
        <div class="material">
            <h2>VORLESUNGSMATERIALEN</h2>
            <ul>
                <div class="gray">
                    <v-img class="icon" :src="require('@/assets/papericon.png')" />
                    <li>Script01</li>
                    <v-img class="icon" :src="require('@/assets/cloudicon.png')" />
                </div>
                <div class="white"> <v-img class="icon" :src="require('@/assets/papericon.png')" />
                    <li>Übungsbogen01</li>
                    <v-img class="icon" :src="require('@/assets/cloudicon.png')" />
                </div>

                <div class="gray">
                    <v-img class="icon" :src="require('@/assets/papericon.png')" />
                    <li>Script02</li>
                    <v-img class="icon" :src="require('@/assets/cloudicon.png')" />
                </div>
                <div class="white"> <v-img class="icon" :src="require('@/assets/papericon.png')" />
                    <li>Script03</li>
                    <v-img class="icon" :src="require('@/assets/cloudicon.png')" />
                </div>

                <div class="gray">
                    <v-img class="icon" :src="require('@/assets/papericon.png')" />
                    <li>Übungsbogen02</li>
                    <v-img class="icon" :src="require('@/assets/cloudicon.png')" />
                </div>

                <div class="white"> <v-img class="icon" :src="require('@/assets/papericon.png')" />
                    <li>Script04</li>
                    <v-img class="icon" :src="require('@/assets/cloudicon.png')" />
                </div>

            </ul>
            </div>
    </v-card>
</template>


<script>
import store from "../store";
import NotificationCard from "./NotificationCard.vue"

export default {
    data() {
        return {
            course: this.getCourseData(),
        
        }
    },
    components: {
        NotificationCard,
    },
    props: {
        courseId: Number
    },
    methods: {
        getCourseData() {
            const allCourses = store.getters.getCourse;
            return allCourses.find(c => c.id == this.courseId);
        },
        hasOtherCourses() {
            return this.course.otherCourses.length >= 1;
        },
        getOtherCourses() {
            const allCourses = store.getters.getCourse;
            let otherCourses = [];
            if (this.hasOtherCourses()) {
                this.course.otherCourses.forEach(element => {
                    otherCourses.push(allCourses.find(c => c.id == element.courseId));
                });
            }
            return otherCourses;
        },
        getNotifications() {
            const allNotifications = store.getters.getNotifications;
            const id = this.courseId;

            return allNotifications.filter(x => x.type == "D" && x.courseId == id);
        },
        hasNotifications() {
            return this.getNotifications().length >= 1;
        },
        getRegisteredText(){
            const sCourses = store.getters.getStudentData.courses;
            if(sCourses.includes(this.courseId))
                return "Eingeschrieben";
            else {
                return "Anmelden";
            }
        },
        setCourseRegister(courseId){
            store.dispatch("addCourse", courseId);

        }
    }
}
</script>
<style>
#registerC {
    border: 1px solid grey;
}
#registerC:hover {
    background-color: #e8e9f0;
}

.icon {
    height: 20px;
}

.gray {
    background-color: gray;
    display: flex;
    align-items: center;
}

.white {
    display: flex;
    align-items: center;
}
</style>