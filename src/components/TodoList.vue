<template>
    <ul>
        <li v-for="(todo, index) in todoList" v-bind:key="todo.id" @click="done(index)">
            <s v-if="todo.isDone">{{todo.title}}</s>
            <span v-else>{{todo.title}}</span>
        </li>
    </ul>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    computed: {
        ...mapGetters('todo', {
            todoList:'allTodos',
        })
    },
    methods: {
        ...mapActions('todo', [
            'done',
        ])
    }
}
</script>
