<template>
  <div class="container">
    <h1>Todo List</h1>
    <hr>
    <div class="row">
      <div class="input-group col-md-4">
        <input
          type="text"
          class="form-control"
          placeholder="add Todo.."
          v-model="newTodo"
          @keyup.enter="actionAddTodo" />
        <span class="input-group-btn">

          <v-btn flat icon color="success" @click="actionAddTodo">
              <v-icon>add</v-icon>
          </v-btn>
        </span>
      </div>
    </div>
    <!-- 左右兩個欄位分別存放 todo / done -->
    <div  class="row">
      <div class="col-md-6">
        <h2>Todo List:</h2>
        <ol>
          <todoItem 
          v-for="(item, index) in todoList" :item="item" 
          :key="'list_'+index"/>
        </ol>
      </div>
      <div class="col-md-6">
        <h2>Done List:</h2>
        <ol >
          <li 
            v-for="(item, index) in doneList"
            :key="'list_'+index"
          >
            <label>
              <input 
                type="checkbox"
                :checked="item.done"
                @change="toggleTodo( item.key )">
                {{ item.content }}
            </label>
          </li>
        </ol>
      </div>
    </div><!-- end row -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import todoItem from './TodoList.vue';

export default {
  components: {
    todoItem
  },
  data () {
    return {
      newTodo: ''
    }
  },
  computed: mapGetters({
    todoList: 'getTodo',
    doneList: 'getDone',
  }),
  methods: {
    ...mapActions([
        'toggleTodo',
        'deleteTodo',
    ]),
    actionAddTodo () {
      this.$store.dispatch('addTodo', this.newTodo);
      this.newTodo = '';
    }
  }
}
</script>

