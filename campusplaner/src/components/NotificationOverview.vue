<template>
    <v-img class="tv-info" :src="require('@/assets/images/tv_info.jpg')" />
    <div>
        <h3>BENACHRICHTIGUNGEN</h3>
        <div>
            <p>HOCHSCHULE</p>
            <div v-for="data in content.body">{{ data }}</div>
        </div>
    </div>
</template>

<script>
import { json } from '@/assets/data/notificationData';
export default {
    data() {
        return {
            content: {
                body: [
                    [
                        {
                            "headline": "Klausuranmeldung",
                            "text": "Ihr habt jetzt bis zum 08.01.2023 zeit euch für die Klausur anzumelden.",
                            "date": "10.12.2022 13:45"
                        },
                        {
                            "headline": "Verfügungstag",
                            "text": "Morgen ist ein Verfügungstag und somit finden morgen keine Vorlesungen statt.",
                            "date": "08.12.2022 10:00"
                        }
                    ]
                ]
            }
        }
    }
}
</script>

<style>
.tv-info {
    width: 698px;
}
</style>