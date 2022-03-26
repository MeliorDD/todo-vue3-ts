<template>
  <section class="todo-page">
    <div class="todo-page__header">
      <h2>{{ currentTodoList.title }}</h2>
    </div>
    <div class="todo-page__body">
      <ul class="todo-page__list">
        <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import ITodo from "@/interfaces/Todo";
import TodoItem from "@/components/TodoItem.vue";
import ITodoList from "@/interfaces/TodoList";

export default defineComponent({
  name: "TodoPage",
  components: { TodoItem },
  setup() {
    const store = useStore();
    const currentTodoList = computed<ITodoList>(() => {
      return store.state.currentTodoList;
    });
    const todos = computed<Array<ITodo>>(() => {
      return store.state.currentTodosArray;
    });
    return { todos, currentTodoList };
  },
});
</script>

<style scoped lang="scss">
.todo-page {
  height: 100%;
  width: 100%;
  &__header {
    padding: 16px;
    height: 20%;
    width: 100%;
    background: linear-gradient(
      to right,
      rgba(75, 123, 211, 0.5),
      rgba(22, 215, 177, 0.3)
    );
    display: flex;
    align-items: end;
    h2 {
      font-weight: 400;
      font-size: 36px;
      color: white;
    }
  }
}
</style>
