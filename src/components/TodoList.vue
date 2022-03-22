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
    const openTodoList = () => {
      store.commit("SET_CURRENT_TODO_LIST", props.todoList);
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
