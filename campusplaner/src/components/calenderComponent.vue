<template>
    <v-row>
        <v-calendar ref="calendar" :now="today" :value="today" :events="events" color="primary"
            type="week"></v-calendar>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        today: '2019-01-08',
        events: [
            {
                name: 'Nachbesprechung - Mobile Commerce',
                start: '2019-01-07 09:00',
                end: '2019-01-07 10:00',
            },
            {
                name: `Verfügungstag`,
                start: '2019-01-10',
            },
            {
                name: 'Abnahme - Systemnahe Programmierung',
                start: '2019-01-09 12:30',
                end: '2019-01-09 15:30',
            },
        ],
    }),
}
</script>

<style scoped>
.my-event {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 2px;
    background-color: #1867c0;
    color: #ffffff;
    border: 1px solid #1867c0;
    font-size: 12px;
    padding: 3px;
    cursor: pointer;
    margin-bottom: 1px;
    left: 4px;
    margin-right: 8px;
    position: relative;
}

.my-event.with-time {
    position: absolute;
    right: 4px;
    margin-right: 0px;
}
</style>