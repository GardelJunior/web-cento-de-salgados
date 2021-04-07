<template>
  <button v-bind="$attrs" class="my-button">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "CButton",
  data() {
    return {};
  },
};
</script>
<style scoped>
.my-button {
  width: 94%;
  font-size: 1rem;
  display: flex;
  height: 48px;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  letter-spacing: 0.08rem;
  background-color: var(--primary-color);
}
.my-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>