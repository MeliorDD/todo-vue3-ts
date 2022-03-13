<template>
  <div class="search">
    <div class="search__wrap">
      <input type="text" class="search__input" placeholder="Поиск" />
      <img src="../assets/icons/search.svg" class="search__icon" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchComponent",
  components: {},
  setup() {
    //
  },
});
</script>

<style scoped lang="scss">
@import "src/assets/colors/colors";

.search {
  padding: 8px;
  &__wrap {
    position: relative;
  }
  &__input {
    width: 100%;
    border: transparent;
    border-radius: 0;
    outline: none;
    transition: border-color 0.3s ease-in-out;
    background-color: transparent;
    padding: 8px 32px 8px 8px;
    &:focus {
      border-bottom: 1px solid $blue-default;
    }
  }
  &__icon {
    position: absolute;
    top: 8px;
    right: 8px;
  }
}
</style>
