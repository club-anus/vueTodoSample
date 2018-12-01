<template>
    <div>
        <input type="text" v-model="title" />
        <input type="button" value="add" @click="add(title)"/>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    data:() => {
        return {
            title: 'title of todo',
        }
    },
    methods: {
        ...mapActions('todo', [
            'add',
        ])
    }
}
</script>