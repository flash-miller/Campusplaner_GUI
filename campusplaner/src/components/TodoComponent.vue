<template>
    <h1>TODO</h1>
        <v-row
            no-gutters
            class="todoEntryRow newTodoRow"
        >
            <v-col
                cols="1"
                class="checkboxCol"
            >
                <v-checkbox
                    class="todoCheckbox"
                    disabled
                ></v-checkbox>
            </v-col>
            
            <v-col
                cols="6"
                >
                <v-text-field
                    placeholder="Neues TODO"
                    v-model="newTodoText"
                    variant="underlined"
                    class="textInput"
                    v-on:keyup.enter="addNewTodo()"
                ></v-text-field>
            </v-col>
            
            <v-col
                cols="3"
                class="todoDateCol"
            >
                <!--<p class="todoDate">{{ newTodoDate.toLocaleString().split(',')[0].replaceAll('/','.') }}</p>-->
                <Datepicker
                    class="datePickerInput"
                    v-model="newTodoDate"
                    :style="{'--vdp-hover-bg-color': '#1C2764', '--vdp-selected-bg-color': '#1C2764', '--vdp-text-color': '#1C2764'}"
                />
            </v-col>
            <v-col
                cols="1"
                class="actionButton"
            >
                <v-btn
                    block
                    v-on:click="addNewTodo()"
                >
                    <v-icon color="#1C2764">mdi-calendar-plus</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row
            no-gutters
            class="todoEntryRow"
            v-for="(todo, i) in getTodos()"
            :key="refreshKey"
        >
            <v-col
                cols="1"
                class="checkboxCol"
            >
                <v-checkbox
                    v-model="todo.checked"
                    class="todoCheckbox"
                ></v-checkbox>
            </v-col>
            
            <v-col
                cols="6"
                >
                <v-text-field
                    v-model="todo.text"
                    variant="underlined"
                ></v-text-field>
            </v-col>
            
            <v-col
                cols="3"
                class="todoDateCol"
            >
                <!--<p class="todoDate">{{ new Date(todo.time).toLocaleString().split(',')[0].replaceAll('/','.') }}</p>-->
                <Datepicker
                    class="datePickerInput"
                    v-model="todo.time"
                    :style="{'--vdp-hover-bg-color': '#1C2764', '--vdp-selected-bg-color': '#1C2764', '--vdp-text-color': '#1C2764'}"
                />
            </v-col>
            <v-col
                cols="1"
                class="actionButton"
            >
                <v-btn
                    block
                    v-on:click="removeTodo(i)"
                >
                    <v-icon color="#1C2764">mdi-delete-outline</v-icon>
                </v-btn>
            </v-col>
        </v-row>
</template>

<script>

import store from "../store";
import Datepicker from 'vue3-datepicker';
import { ref, onMounted } from 'vue';

export default {
    name: "TodoComponent",
    components: { Datepicker },
    methods: {
        forceRerender() {
            this.refreshKey += 1;
        },
        getTodos() {
            return store.getters.getStudentTodos;
        },
        addNewTodo() {
            store.dispatch('addTodo', {text: this.newTodoText, checked: false, time: this.newTodoDate});
            this.updateTodos();
            this.newTodoText = "";
            this.newTodoDate = new Date();
            this.forceRerender();
        },
        removeTodo(index){
            store.dispatch('removeTodo', {index: index});
            this.updateTodos();
            this.forceRerender();
        },
        updateTodos() {
            store.dispatch('saveState');
        }
    },
    data: () => ({
        newTodoText: "",
        refreshKey: 0,
        newTodoDate: new Date(),
        picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    })
}

</script>

<style>
    h1 {
        font-family: "Barlow-SemiBold", Helvetica, Arial;
        font-weight: 600;
        color: #1C2764;
    }

    .textInput input::placeholder {
        font-style: italic;
    }

    .todoDate {
        margin-top: 15px;
    }

    .todoDateCol {
        display:flex;
        justify-content: end;
        padding-top: 15px !important;
        margin-right: 5px;
    }

    .v3dp__datepicker {
        width: 100px;
    }

    .datePickerInput {
        width: 100px;
        cursor: pointer;
        padding: 5px;
        border-style: solid;
        border-color: lightgrey;
        border-radius: 5px;
    }

    .checkboxCol {
        margin-right: 15px;
        padding-top: 7px !important;
    }

    .actionButton {
        padding-top: 15px !important;
    }

    .todoEntryRow {
        height: 60px;
    }

    input::-webkit-input-placeholder{
        color: red;
    }
</style>