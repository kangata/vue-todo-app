<template>
  <div id="app">
    <div class="container ml-auto mr-auto p-5">
      <div class="todo lg:w-1/2 my-10 ml-auto mr-auto rounded-lg">
        <div class="bg-teal-300 text-center border-solid py-5">
          <h1 class="text-3xl font-semibold text-white">ToDo App</h1>
        </div>
        <div class="todo-content">
          <div class="flex p-5">
            <div class="w-1/3" @click="activeList='running'">
              <div class="text-center cursor-pointer">
                <div class="text-4xl font-semibold text-teal-300">{{ running.length }}</div>
                <div class="text-sm text-gray-500">Running</div>
              </div></div>
            <div class="w-1/3" @click="activeList='todos'">
              <div class="text-center cursor-pointer">
                <div class="text-4xl font-semibold text-teal-300">{{ todos.length }}</div>
                <div class="text-sm text-gray-500">All</div>
              </div>
            </div>
            <div class="w-1/3" @click="activeList='completed'">
              <div class="text-center cursor-pointer">
                <div class="text-4xl font-semibold text-teal-300">{{ completed.length }}</div>
                <div class="text-sm text-gray-500">Completed</div>
              </div></div>
          </div>
          <div class="px-5">
            <div class="flex justify-center">
              <div class="inline-block bg-teal-300 my-5 py-1 px-5 rounded-full text-center text-white text-xl font-semibold">{{ label }}</div>
            </div>
            <ul class="todo-list">
              <li
                v-for="(item, index) in list"
                :key="index"
                class="todo-list-item border-solid border-b border-gray-200 p-3 cursor-pointer"
                :class="{ completed: item.completed }">
                <div class="flex content-center">
                  <div class="w-auto">
                    <button class="todo-button-check w-8 h-8 rounded-full border-2 boder-sold border-gray-300 text-gray-300 focus:outline-none" @click="markAsComplete(index)">
                      <fa-icon icon="check"></fa-icon>
                    </button>
                  </div>
                  <div class="w-full">
                    <span class="ml-3 text-xl leading-relaxed">{{ item.text }}</span>
                  </div>
                  <div class="w-auto">
                    <button class="todo-button-remove w-8 h-8 focus:outline-none" @click="remove(index)">
                      <fa-icon class="text-red-300" icon="times"></fa-icon>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
            <div v-if="list.length < 1" class="my-10 text-center text-gray-400">
              <fa-icon class="text-5xl" icon="clipboard-list"></fa-icon>
              <div class="mt-2 font-semibold">No Data</div>
            </div>
          </div>
          <div class="todo-input" :class="{ visible: inputShow }">
            <input v-model="input" ref="input" class="mt-5 w-full text-lg text-center py-3 px-2 focus:outline-none" placeholder="Whats need to be done?" @keypress.enter="add">
          </div>
        </div>
        <div class="todo-button-add">
          <button class="bg-teal-300 rounded-full w-12 h-12 block ml-auto mr-auto text-white focus:outline-none" @click="toggleInput">
            <fa-icon v-if="inputShow" icon="angle-up"></fa-icon>
            <fa-icon v-else icon="plus"></fa-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todos: [],
      input: '',
      inputShow: false,
      activeList: 'todos'
    }
  },

  computed: {
    list () {
      return this[this.activeList]
    },
    running () {
      return this.todos.filter(item => !item.completed)
    },
    completed () {
      return this.todos.filter(item => item.completed)
    },
    label () {
      const labels = {
        todos: 'All Todos',
        running: 'Running Todos',
        completed: 'Completed Todos'
      }

      return labels[this.activeList]
    }
  },

  methods: {
    toggleInput () {
      this.inputShow = !this.inputShow

      if (this.inputShow) {
        this.$nextTick(() => {
          this.$refs.input.focus()
        })
      }
    },
    add () {
      this.todos.push({
        text: this.input,
        completed: 0
      })

      this.input = ''
    },
    remove (index) {
      this.todos.splice(index, 1)
    },
    markAsComplete (index) {
      this.todos[index].completed = 1
    }
  }
}
</script>
