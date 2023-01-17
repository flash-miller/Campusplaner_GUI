<template>
    <h1>TODO</h1>
    <v-virtual-scroll>
        <v-row
            no-gutters
        >
            <v-col
                cols="2"
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
                    placeholder="neues todo"
                    v-model="newTodoText"
                    variant="underlined"
                    v-on:keyup.enter="addNewTodo()"
                ></v-text-field>
            </v-col>
            
            <v-col
                cols="3"
                class="todoDateCol"
            >
                <p class="todoDate">{{ newTodoDate.toLocaleString().split(',')[0].replaceAll('/','.') }}</p>
            </v-col>
        </v-row>
        <v-row
            no-gutters
            v-for="todo in getTodos()"
        >
            <v-col
                cols="2"
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
                <p class="todoDate">{{ new Date(todo.time).toLocaleString().split(',')[0].replaceAll('/','.') }}</p>
            </v-col>
        </v-row>
    </v-virtual-scroll>
</template>

<script>

import store from "../store";

export default {
    name: "TodoComponent",
    methods: {
        getTodos() {
            return store.getters.getStudentTodos;
        },
        addNewTodo() {

        },
        updateStudentData() {

        }
    },
    data: () => ({
        newTodoText: "",
        newTodoDate: new Date(),
    })
}

</script>

<style scoped>
    h1 {
        font-family: "Barlow-SemiBold", Helvetica, Arial;
        font-weight: 600;
        color: #1C2764;
    }

    .todoDate {
        margin-top: 15px;
    }

    .todoDateCol {
        display:flex;
        justify-content: end;
    }
</style>