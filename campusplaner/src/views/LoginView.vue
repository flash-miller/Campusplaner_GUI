<template>
    <div class="desktopView">
        <div class="login">
            <div class="greetingPanel">
                <div class="greeting">
                    IHRE NUMMER EINS LÖSUNG ZUM MANAGEN DER KOMMUNIKATION MIT IHREN LERNENDEN
                </div>
            </div>
            <div class="loginContainer">
                <h1>CAMPUSPLANER</h1>
                <CampusLogin />
            </div>
            <div class="footerInformation">
                This is a product demo by Alisa Elin Mach, Nino-Julian Müller, Maarten Pohle and Vanessa Thörner for the
                Fachhochschule Wedel.
            </div>
        </div>
    </div>



    <div class="mobileView">
        <div class="login">
            <div class="loginContainer">
                <h1>CAMPUSPLANER</h1>
                <CampusLogin />
            </div>
        </div>
    </div>
</template>

<script>
import CampusLogin from '../components/CampusLogin.vue';

export default {
    name: "LoginView",
    components: { CampusLogin }
}
</script>




<style scoped>
@media (max-width: 700px) {

    footer{
        display: none;
    }
    .desktopView {
        display: none;
    }

    .login {
        background-image: linear-gradient(to right, rgb(78, 145, 150), rgb(112, 187, 192));
        display: flex;
        position: fixed;
    }


}



@media (min-width: 701px) {
    .mobileView {
        display: none;
    }

    .login {
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;

        background-image: linear-gradient(to right, rgb(78, 145, 150), rgb(112, 187, 192));
        padding: 100px 150px 100px 150px;
        display: flex;
        flex-direction: row;
    }

    .loginContainer {
        font-family: "Barlow-SemiBold", Helvetica, Arial;
        width: 35%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 150px;
    }

    .greetingPanel {
        width: 65%;
        border-right: solid white 1px;
    }

    .greeting {
        font-family: "Barlow", Helvetica, Arial;
        width: 450px;
        font-size: 50px;
        line-height: normal;
        color: white;
    }

    .loginContainer {
        font-family: "Barlow-SemiBold", Helvetica, Arial;
        width: 35%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 150px;
    }

    .loginContainer h1 {
        margin-bottom: 250px;
        color: white;
    }

    .footerInformation {
        position: absolute;
        bottom: 10px;
        left: 10px;
        color: white;
        font-family: "Barlow-Light", Helvetica, Arial;
        font-size: 13px;
    }
}
</style>