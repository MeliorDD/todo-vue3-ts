<template>
  <section class="main">
    <TodoMain />
  </section>
</template>

<script>
import TodoMain from "@/components/TodoMain";
export default {
  name: "LayoutMain",
  mixins: [],
  props: {},
  components: { TodoMain },
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
@import "src/assets/colors/colors";

.main {
  height: 100%;
  width: 100%;
  background: $main-bg;
  display: flex;
  align-items: start;
  justify-content: center;
}
</style>
