<template>
  <div class="todo-list" @click="openTodoList">
    <div class="todo-list__icon"></div>
    <div class="todo-list__title">{{ todoList.title }}</div>
    <div class="todo-list__count"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "TodoList",
  components: {},
  props: {
    todoList: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const openTodoList = () => {
      store.dispatch("getTodosOfCurrentTodoListAction", props.todoList);
      router.push({ name: "TodoPage", params: { id: props.todoList.id } });
    };
    return { openTodoList };
  },
});
</script>

<style scoped lang="scss">
@import "src/assets/colors/colors";

.todo-list {
  cursor: pointer;
  padding: 8px 16px;
  &:hover {
    background-color: $hovered-default;
  }
}
</style>
