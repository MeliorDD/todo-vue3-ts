<template>
  <li class="todo">
    <Checkbox v-model:checked="checked" class="todo__checkbox" />
    <p class="todo__title">
      {{ todo.title }}
    </p>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Checkbox from "@/components/Common/Checkbox.vue";

export default defineComponent({
  name: "TodoItem",
  components: { Checkbox },
  props: {
    todo: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup(props) {
    const checked = ref<boolean>(props.todo.is_completed);
    return { checked };
  },
});
</script>

<style scoped lang="scss">
.todo {
  display: flex;
  padding: 16px;
  &__checkbox {
    margin-right: 16px;
  }
}
</style>
