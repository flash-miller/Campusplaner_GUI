<template>
    <div class="desktopView">
        <div id="tv-img-div">
        <v-img class="tv-info" :src="require('@/assets/images/tv_info.jpg')" alt="TV-Information Picture" />
    </div>
    <div>
        <h3>BENACHRICHTIGUNGEN</h3>
        <v-row no-gutters>
            <v-col cols="6" md="6" sm="12">
                <v-card class="notification-box">
                    <p>HOCHSCHULE</p>
                    <v-card class="notification" v-for="notification in getHoNotifications()">
                        <NotificationCard :notification="notification" />
                    </v-card>
                    <p class="more">Weitere...</p>
                </v-card>
            </v-col>
            <v-col cols="6" md="6" sm="12">
                <v-card class="notification-box">
                    <p>DOZENTEN</p>
                    <v-card class="notification" v-for="notification in getCoursesByStudent()">
                        <NotificationCard :notification="notification" />
                    </v-card>
                    <p class="more">Weitere...</p>
                </v-card>
            </v-col>
        </v-row>
    </div>
    </div>

    <div class="mobileView">
       
        <div id="tv-img-div">
        <v-img class="tv-info" :src="require('@/assets/images/tv_info.jpg')" alt="TV-Information Picture" />
    </div>
    <div>
        <h3>BENACHRICHTIGUNGEN</h3>
        <v-row no-gutters>
            <v-col cols="6" md="6" sm="12">
                <v-card class="notification-box">
                    <p>HOCHSCHULE</p>
                    <v-card class="notification" v-for="notification in getHoNotifications()">
                        <v-row no-gutters>
                            <v-col cols="8" md="8" sm="8">
                                <p class="notification-header">{{ notification.headline }}</p>
                                <p class="notification-body">{{ notification.text }}</p>
                            </v-col>
                            <v-col cols="9" md="9" sm="9">
                                <p class="notification-body tx-r">{{ notification.date }}</p>
                            </v-col>
                        </v-row>

                    </v-card>
                    <p class="more">Weitere...</p>
                </v-card>
            </v-col>
            <v-col cols="6" md="6" sm="12">
                <v-card class="notification-box">
                    <p>DOZENTEN</p>
                    <v-card class="notification" v-for="notification in getCoursesByStudent()">
                        <v-row no-gutters>
                            <v-col cols="9" md="9" sm="9">
                                <p class="notification-header">{{ notification.headline }}</p>
                                <p class="notification-body">{{ notification.text }}</p>
                            </v-col>
                            <v-col cols="9" md="9" sm="9">
                                <p class="notification-body tx-r">{{ notification.date }}</p>
                            </v-col>
                        </v-row>
                    </v-card>
                    <p class="more">Weitere...</p>
                </v-card>
            </v-col>
        </v-row>
    </div>
    </div>


   
</template>

<script>
import store from "../store";
import NotificationCard from "./NotificationCard.vue"

export default {
    components: { NotificationCard },
    methods: {
        getHoNotifications() {
            const notifications = store.getters.getNotifications;
            return notifications.filter(function (n) {
                return n.type == 'H';
            }).slice(0, 4)
        },
        getDoNotifications() {
            const notifications = store.getters.getNotifications;
            return notifications.filter(function (n) {
                return n.type == 'D';
            })
        },
        getCoursesByStudent() {
            const sCourses = store.getters.getStudentCourses;
            const notifications = this.getDoNotifications();

            let myCoursesNotifications = [];

            sCourses.forEach((id) => {
                notifications.forEach((n) => {
                    if (n.courseId == id)
                        myCoursesNotifications.push(n);
                });
            });

            return myCoursesNotifications.slice(0, 4);
        }
    }
}
</script>

<style>

@media (max-width: 700px) {
  .desktopView{
    visibility: hidden;
  }
}



@media (min-width: 701px) {
  .mobileView{
    visibility: hidden;
  }

}

#tv-img-div {
    margin-bottom: 20px;
    display: flex;
}

div {
    margin-bottom: 2px;
}

.tv-info {
    width: 698px;
    margin: 5px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #A8A8A8;
}

.notification-box {
    margin-left: 5px;
    margin-right: 5px;
}

.notification {
    margin: 2px;
    padding: 2px;
}

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

.more {
    color: #A8A8A8;
    font-style: italic;
}
</style>