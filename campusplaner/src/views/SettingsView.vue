<template>
    <v-row no-gutters>
        <v-col cols="6" md="6" sm="12">
            <v-card>
                <h1>MEIN PROFIL</h1>
                <v-img class="profilbild" :src="require('@/assets/profilbilddefault.png')" />

                <h2>Persönliche Daten</h2>
                <div class="info">
                    <p>Vorname:</p>
                    <p>{{ getFirstName() }}</p>
                </div>
                <div class="info">
                    <p>Nachname:</p>
                    <p>{{ getLastName() }}</p>
                </div>
                <div class="info">
                    <p>Geburtstag:</p>
                    <p>{{ getBirthday() }}</p>
                </div>
                <div class="info">
                    <p>Adresse:</p>
                    <p>{{ getAdress() }}</p>
                </div>
                <div class="info">
                    <p>E-Mail:</p>
                    <p>{{ getEmail() }}</p>
                </div>
                <div class="info">
                    <p>Telefon:</p>
                    <p>{{ getPhone() }}</p>
                </div>
            </v-card>

            <v-card>
                <h2>Studium</h2>
                <div class="info">
                    <p>Anmeldung:</p>
                    <p>{{ getLoginDate() }}</p>
                </div>

                <div class="info">
                    <p>Studienbeginn:</p>
                    <p>{{ getStudyBegin() }}</p>
                </div>

                <div class="info">
                    <p>Studiengang:</p>
                    <p>{{ getStudyTopic() }}</p>
                </div>

                <div class="info">
                    <p>Studienart:</p>
                    <p>{{ getStudyType() }}</p>
                </div>

                <div class="info">
                    <p>aktuelles Semester:</p>
                    <p>{{ getActualSemester() }}</p>
                </div>

                <div class="info">
                    <p>Matrikelnummer:</p>
                    <p>{{ getMatNumber() }}</p>
                </div>

                <div class="info">
                    <p>FH-Mail:</p>
                    <p>{{ getStudyMail() }}</p>
                </div>
            </v-card>
        </v-col>
        <v-col cols="6" md="6" sm="12">
            <v-card outlined tile>
                <h2>Einstellungen</h2>
                <div class="info">
                    <p>Darkmode {{ isDark }}</p>
                    <label class="switch">
                        <input type="checkbox" @click="darkmode()">
                        <span class="slider round"></span>
                    </label>
                </div>

                <div class="info">
                    <p>Schrift vergrößern</p>
                    <label class="switch">
                        <input type="checkbox" @click="fontsize()">
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="info">
                    <p>Benachrichtigungen Hochschule</p>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="info">
                    <p>Benachrichtigungen Dozenten</p>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>

                <div class="info">

                    <p>Benachrichtigungen Kalender</p>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>

            </v-card>
        </v-col>
    </v-row>



</template>

<script>
import store from "../store";

export default {
    methods: {
        darkmode() {
            var element = document.querySelector('main');
            var element2 = document.querySelectorAll('.v-card');
            element.classList.toggle("dark-mode");
            element2.classList.toggle("dark-mode");
         
        },

        fontsize() {
            var element = document.querySelector('main');
            element.classList.toggle("font-size");
        },
        getFirstName() {
            return store.getters.getStudentName.firstName;
        },
        getLastName() {
            return store.getters.getStudentName.lastName;
        },
        getBirthday() {
            return store.getters.getInfo.birthday;
        },
        getAdress() {
            return store.getters.getInfo.adress;
        },
        getEmail() {
            return store.getters.getInfo.email;
        },
        getPhone() {
            return store.getters.getInfo.phone;
        },
        getLoginDate() {
            return store.getters.getInfo.loginDate;
        },
        getStudyBegin() {
            return store.getters.getInfo.studyBegin;
        },
        getStudyTopic() {
            return store.getters.getInfo.studyTopic;
        },
        getStudyType() {
            return store.getters.getInfo.studyType;
        },
        getActualSemester() {
            return store.getters.getInfo.actualSemester;
        },
        getMatNumber() {
            return store.getters.getInfo.matNumber;
        },
        getStudyMail() {
            return store.getters.getInfo.studyMail;
        },

    }
}

</script>


<style>
.v-card {
    margin: 2px;
    padding: 2px;
}

.info {
    display: flex;
    justify-content: space-between;
    width: 70%;
}

.profilbild {
    border: solid;
    border-color: black;
    border-radius: 25px;
    margin-bottom: 2%;

    height: 150px;
    width: 150px;
}


/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: #2196F3;
}

input:focus+.slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

.font-size {
    font-size: x-large;
}

.dark-mode {
    background: #16171d ;
  color: #fff;
}


</style>
    


