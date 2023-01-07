<template>
    <v-container class="navigationContainer">
        <v-row class="navigationRow">
            <v-img
                class="fhwLogo"
                :src="require('@/assets/images/fhw icon.png')"
                @click="navigate('home')"
            />
            <v-row class="navigation">
                <div
                    class="navigationEntry"
                    :class="{ active: isCurrentPage('calendar') }"
                    @click="navigate('calendar')"
                >
                    <h1>MEIN KALENDER</h1>
                </div>
                <div
                    class="navigationEntry"
                    :class="{ active: isCurrentPage('university') }"
                    @click="navigate('university')"
                >
                    <h1>MEINE HOCHSCHULE</h1>
                </div>
                <div
                    class="navigationEntry"
                    :class="{ active: isCurrentPage('courses') }"
                    @click="navigate('courses')"
                >
                    <h1>MEINE KURSÜBERSICHT</h1>
                </div>
                <div
                    class="navigationEntry"
                    :class="{ active: isCurrentPage('education') }"
                    @click="navigate('education')"
                >
                    <h1>MEIN STUDIUM</h1>
                </div>
            </v-row>
            <v-img
                class="notification"
                :src="require('@/assets/images/icons/notification icon.png')"
                @click="navigate('notifications')"
            />
        </v-row>
    </v-container>
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
</style>