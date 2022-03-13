<template>
  <div class="todo-list">
    <div class="todo-list__icon"></div>
    <div class="todo-list__title">{{ todoList.name }}</div>
    <div class="todo-list__count"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
  setup() {
    //
  },
});
</script>

<style scoped lang="scss"></style>
