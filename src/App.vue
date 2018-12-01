<template>
  <div id="app">
    <AddTodoForm />
    <TodoList />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AddTodoForm from './components/AddTodoForm.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
    AddTodoForm,
    TodoList,
  }
}
</script>