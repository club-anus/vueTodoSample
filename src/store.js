import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const TODO_ADD = 'todo_add'
const TODO_DONE = 'todo_done'
const TODO_DELETE = 'todo_delete'

const todoModule = {
  namespaced: true,
  state: {
    todos: []
  },
  mutations: {
    [TODO_ADD]: (state, todo) => {
      state.todos.push(todo)
    },
    [TODO_DONE]: (state, index) => {
      state.todos[index].isDone = !state.todos[index].isDone
    },
    [TODO_DELETE]: (state, index) => {
      state.todos.splice(index,1)
    },
  },
  actions: {
    add: (context, todo) => {
      context.commit(TODO_ADD, todo)
    },
    done: (context, index) => {
      context.commit(TODO_DONE, index)
    },
    delete: (context, index) => {
      context.commit(TODO_DELETE, index)
    },
  },
  getters: {
    allTodos: state => {
      return state.todos
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.isDone)
    },
    notDoneTodos: state => {
      return state.todos.filter(todo => !todo.isDone)
    },
    todoCount: state => {
      return state.todos.length
    }
  }
}

export default new Vuex.Store({
  modules: {
    todoModule,
  }
})
