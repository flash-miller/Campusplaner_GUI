<template>
    <div class="desktopview">
        <v-container class="navigationContainer">
            <v-row class="navigationRow">
                <v-img class="fhwLogo" :src="require('@/assets/images/fhw icon.png')" @click="navigate('home')" />
                <v-row class="navigation">
                    <div class="navigationEntry" :class="{ active: isCurrentPage('calendar') }"
                        @click="navigate('calendar')">
                        <h1>MEIN KALENDER</h1>
                    </div>
                    <div class="navigationEntry" :class="{ active: isCurrentPage('university') }"
                        @click="navigate('university')">
                        <h1>MEINE HOCHSCHULE</h1>
                    </div>
                    <div class="navigationEntry" :class="{ active: isCurrentPage('courses') }"
                        @click="navigate('courses')">
                        <h1>MEINE KURSÜBERSICHT</h1>
                    </div>
                    <div class="navigationEntry" :class="{ active: isCurrentPage('education') }"
                        @click="navigate('education')">
                        <h1>MEIN STUDIUM</h1>
                    </div>
                </v-row>
                <v-img class="notification" :src="require('@/assets/images/icons/notification icon.png')"
                    @click="navigate('notifications')" />
                <v-icon color="white" @click="navigate('settings')">mdi-cog</v-icon>
            </v-row>
        </v-container>
    </div>
    <div class="mobileview">
        <header> <v-container class="mobilenavigationContainer">
                <v-row class="mobilenavigationRow">
                    <v-img class="fhwLogo" :src="require('@/assets/images/fhw icon.png')" @click="navigate('home')" />
                    <div class="nav">
                        <v-img class="notification" :src="require('@/assets/images/icons/notification icon.png')"
                            @click="navigate('notifications')" />
                        <v-icon color="white" @click="navigate('settings')">mdi-cog</v-icon>
                    </div>

                </v-row>
            </v-container></header>
        <footer>
            <v-container class="footermobilenavigationContainer">
                <v-row class="footernavigationRow">

                    <v-col sm="2"><v-img class="home" :src="require('@/assets/images/icons/hausicon.png')"
                            @click="navigate('home')" /></v-col>
                    <v-col sm="2"> <v-img class="calendar" :src="require('@/assets/images/icons/kalendericon.png')"
                            @click="navigate('calendar')" /></v-col>
                    <v-col sm="2">
                        <v-img class="university" :src="require('@/assets/images/icons/studentenicon.png')"
                            @click="navigate('university')" /></v-col>
                    <v-col sm="2"> <v-img class="courses" :src="require('@/assets/images/icons/buchicon.png')"
                            @click="navigate('courses')" /></v-col>
                    <v-col sm="2"> <v-img class="education" :src="require('@/assets/images/icons/profilicon.png')"
                            @click="navigate('education')" /></v-col>



                </v-row>
            </v-container>
        </footer>

    </div>
</template>

<script>
export default {
    name: "StudentNavigation",
    data: () => {
        return {
            path: document.location.origin,
        }
    },
    methods: {
        navigate(to) {
            this.$router.push("/" + to);
        },
        isCurrentPage(page) {
            return page === this.$route.name;
        }
    }
}
</script>

<style scoped>
@media (max-width: 700px) {

    footer {
        position: absolute;
        bottom: 0px;
        width: 100%;
    }

    .desktopview {
        display: none;
    }



    .footernavigationRow {
        display: flex;
        justify-content: center;
        align-items: center;
    }


    .nav {
        display: flex;
        justify-content: end;
        align-items: center;

    }

    .mobilenavigationRow {
        display: flex;
        flex-wrap: wrap;
        flex: 1 1 auto;
        margin: -12px;
        justify-content: space-between;
        position: sticky;

    }

    v-row {
        display: flex;
        flex-wrap: wrap;
    }

    .footermobilenavigationContainer {
        max-width: none;
        width: 100%;
        height: 50px;
        background-color: #1C2764;
        padding: 0px 30px 0 30px;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mobilenavigationContainer {
        max-width: none;
        width: 100%;
        height: 50px;
        background-color: #1C2764;
        padding: 0px 30px 0 30px;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .fhwLogo {
        width: 30px;
        height: 30px;
        max-width: 30px;
    }

    .fhwLogo:hover {
        cursor: pointer;
    }

    .notification {
        width: 25px;
        height: 25px;
        filter: brightness(10);
        max-width: 25px;
        margin-left: 30px;
        margin-right: 25px;
    }

    .notification:hover {
        cursor: pointer;
    }


    .navigationEntry h1 {
        font-size: 18px;
        color: white;
        font-family: "Barlow", Helvetica, Arial;

    }

    .navigationEntry h1:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    .navigationEntry.active h1 {
        text-decoration: underline;
    }

}









@media (min-width: 701px) {
    .mobileview {
        display: none;
    }

    .v-row {
    margin: 0;
}
.navigationContainer {
    max-width: none;
    width: 100%;
    height: 75px;
    background-color: #1C2764;
    padding: 0px 40px 0 30px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.navigationRow {
    align-items: center;
}
.fhwLogo {
    width: 45px;
    height: 45px;
    max-width: 45px;
}
.fhwLogo:hover {
    cursor: pointer;
}
.notification {
    width: 25px;
    height: 25px;
    filter: brightness(10);
    max-width: 25px;
    margin-left: 30px;
    margin-right: 25px;
}
.notification:hover {
    cursor: pointer;
}
.navigation {
    display: flex;
    justify-content: end;
    align-items: center;
}
.navigationEntry h1 {
    font-size: 18px;
    color: white;
    font-family: "Barlow", Helvetica, Arial;
    margin: 0 25px 0 25px;
}
.navigationEntry h1:hover {
    cursor: pointer;
    text-decoration: underline;
}
.navigationEntry.active h1 {
    text-decoration: underline;
}
}
</style>