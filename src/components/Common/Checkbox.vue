<template>
  <div class="checkbox" :class="{ checked: checked }" @click="handleClick">
    <svg width="18px" height="18px" viewBox="0 0 18 18">
      <path
        d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"
      ></path>
      <polyline points="1 9 7 14 15 4"></polyline>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Checkbox",
  components: {},
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const handleClick = () => {
      emit("update:checked", !props.checked);
    };
    return {
      handleClick,
    };
  },
});
</script>

<style scoped lang="scss">
@import "src/assets/colors/colors";

//.checkbox {
//  display: block;
//  color: #ddd;
//  cursor: pointer;
//  -webkit-user-select: none;
//  -moz-user-select: none;
//  -ms-user-select: none;
//  &:before {
//    content: "";
//    display: block;
//    width: 20px;
//    height: 20px;
//    border: 1px solid #6cc0e5;
//    -webkit-transition: all 0.12s, border-color 0.08s;
//    transition: all 0.12s, border-color 0.08s;
//  }
//}
//
//.checked:before {
//  width: 10px;
//  top: -5px;
//  left: 5px;
//  border-radius: 0;
//  opacity: 1;
//  border-top-color: transparent;
//  border-left-color: transparent;
//  -webkit-transform: rotate(45deg);
//  transform: rotate(45deg);
//}
.checkbox {
  cursor: pointer;
  position: relative;
  //margin: auto;
  width: 18px;
  height: 18px;
  -webkit-tap-highlight-color: transparent;
  transform: translate3d(0, 0, 0);
}
.checkbox:before {
  content: "";
  position: absolute;
  top: -11px;
  left: -11px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(34, 50, 84, 0.03);
  opacity: 0;
  transition: opacity 0.2s ease;
}
.checkbox svg {
  position: relative;
  z-index: 1;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #c8ccd4;
  stroke-width: 1.5;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
}
.checkbox svg path {
  stroke-dasharray: 60;
  stroke-dashoffset: 0;
}
.checkbox svg polyline {
  stroke-dasharray: 22;
  stroke-dashoffset: 66;
}
.checkbox:hover:before {
  opacity: 1;
}
.checkbox:hover svg {
  stroke: #4285f4;
}
.checked svg {
  stroke: #4285f4;
}
.checked svg path {
  stroke-dashoffset: 60;
  transition: all 0.3s linear;
}
.checked svg polyline {
  stroke-dashoffset: 42;
  transition: all 0.2s linear;
  transition-delay: 0.15s;
}
</style>
