<template>
  <section class="todo">
    <div class="todo__column">
      <div class="todo__search">
        <SearchComponent />
      </div>
      <ul class="todo__lists">
        <TodoList />
      </ul>
    </div>
    <div class="todo__body">
      <router-view />
    </div>
  </section>
</template>

<script>
import SearchComponent from "@/components/SearchComponent";
import TodoList from "@/components/TodoList";
export default {
  name: "TodoMain",
  mixins: [],
  props: {},
  components: { TodoList, SearchComponent },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
  validations: {},
};
</script>

<style scoped lang="scss">
.todo {
  width: 100%;
  height: 100%;
  display: flex;
  &__column {
    flex: 1 1 20%;
  }
  &__body {
    flex: 1 1 80%;
    background-color: #fff;
  }
}
</style>
