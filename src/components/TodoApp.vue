<template>
  <div class="contenedor-todo">
    <h1>Mascotas:</h1>
    <div
      v-for="todo in todos"
      :key="todo.id"
      data-test="todo"
      :class="[todo.completed ? 'completed' : '']"
    >
    <input
        type="checkbox"
        v-model="todo.completed"
        data-test="todo-checkbox"
      />
      {{ todo.text }}
      
    </div>

    <form data-test="form" @submit.prevent="createTodo">
      <input data-test="new-todo" v-model="newTodo" />
    </form>
  </div>
</template>


<script>
export default {
  name: 'TodoApp',

  data() {
    return {
      newTodo: '',
      todos: [
        {
          id: 1,
          text: 'Cerdito',
          completed: false
        }
      ]
    }
  },

  methods: {
    createTodo() {
      this.todos.push({
        id: 2,
        text: this.newTodo,
        completed: false
      })
    }
  }
}
</script>



<style scoped>
.contenedor-todo{
  width: 80vw;
  margin: 2rem auto;
}
</style>

  
  