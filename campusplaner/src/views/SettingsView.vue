<template>
    <h1>Profil </h1>
    <v-img
                class="profilbild"
                :src="require('@/assets/profilbilddefault.png')"
            />
    <p>Matrikelnummer</p>
    <p>E-Mail-Adresse</p>
    <p>Passwort</p>

    <h2>Informationen</h2>
    <p>Vorname</p>
    <p>Nachname</p>
    <p>Straße/Hausnummer</p>
    <p>Semester</p>

    <p>Darkmode <label class="switch" >
            <input type="checkbox" onclick="darkmode()">
            <span class="slider round" ></span>
        </label></p>
    <p>Schrift vergrößern <label class="switch">
            <input type="checkbox" onclick="fontsize()">
            <span class="slider round"></span>
        </label></p>
    <p>Benachrichtigungen Hochschule <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
        </label></p>
        <p>Benachrichtigungen Dozenten <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
        </label></p>
        <p>Benachrichtigungen Kalender <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
        </label></p>
</template>

<script>
function darkmode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

function darkmode() {
   var element = document.body;
   element.classList.toggle("font-size");
}
</script>

<style>
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

.dark-mode {
  background-color: black;
  color: white;
}

.font-size {
    font-size: large;
}
</style>
    


