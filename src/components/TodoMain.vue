<template>
  <section class="todo">
    <div class="todo__column">
      <div class="todo__search">
        <SearchComponent />
      </div>
      <ul class="todo__lists">
        <TodoList
          v-for="todoList in todoListArray"
          :key="todoList.id"
          :todoList="todoList"
        />
      </ul>
    </div>
    <div class="todo__body">
      <router-view />
    </div>
  </section>
</template>

<script lang="ts">
import SearchComponent from "@/components/SearchComponent.vue";
import TodoList from "@/components/TodoList.vue";
import ITodoList from "@/interfaces/TodoList";
import { defineComponent, onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "TodoMain",
  mixins: [],
  props: {},
  components: { TodoList, SearchComponent },
  setup() {
    const store = useStore();
    const todoListArray = computed<ITodoList[]>(() => {
      return store.state.todoListArray;
    });
    onMounted(() => {
      store.dispatch("getAllTodoListsAction");
      store.dispatch("getAllTodosAction");
    });
    return { todoListArray };
  },
});
</script>

<style scoped lang="scss">
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.todo {
  width: 100%;
  height: 100%;
  display: flex;
  &__column {
    flex: 1 1 20%;
    height: 100%;
  }
  &__lists {
    height: calc(100% - 50px);
    overflow: auto;
  }
  &__body {
    flex: 1 1 80%;
    background-color: #fff;
  }
}
</style>
