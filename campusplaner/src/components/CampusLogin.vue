<template>
    <v-container class="loginWrapper">
        <v-text-field
            class="userField"
            label="Matrikelnummer"
            :rules="userRules"
            hide-details="auto"
            @input="v => user= v.target.value"
        ></v-text-field>
        <v-text-field
            class="passwordField"
            label="Passwort"
            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (value = !value)"
            :type="value ? 'password' : 'text'"
            @input="v => userPassword= v.target.value"
        ></v-text-field>
        <v-btn
            class="loginButton"
            @click="login()"
        >
            Login
        </v-btn>
    </v-container>
</template>

<script>

import store from "../store";

export default {
    name: "CampusLogin",
    data: () => ({
        user: "",
        userPassword: "",
        valid: true,
        value: true,
        userRules: [
            value => !!value || 'Required.',
            value => (value && value.length == 6) || 'Geben sie nur ihre 6-stellige Matrikelnummer ohne Kürzel an',
            value => {
                var regex = /\d/g;
                return regex.test(value) || 'Bitte geben sie nur Zahlen ein';
            },
        ],
        passwordRules: [
            value => !!value || 'Required.',
            value => (value && value.length == 6) || 'Min 3 characters',
            value => /^\d+$/.test(value) || 'Bitte geben sie nur Zahlen ein',
        ],
        rules: {
            required: value => !!value || "Required.",
            password: value => {
                const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
                return (
                    pattern.test(value) ||
                    "Min. 8 characters with at least one capital letter, a number and a special character."
                );
            }
        }
    }),
    methods: {
        login() {
            console.log("user", this.user);
            console.log("password", this.userPassword);
            store.dispatch('setUserData', {userName: this.user, userPassword: this.userPassword});
            this.$router.push("/");
        },
    },
}

</script>

<style scoped>
    .loginWrapper {
        display:flex;
        flex-direction: column;
        align-items: center;
    }

    .userField {
        width: 350px;
        color: white;
    }

    .passwordField {
        width: 350px;
        color: white;
    }

    .loginButton {
        width: 150px;
        min-width: 150px;
    }
</style>