<template>
  <button v-bind="$attrs" @click="$emit('click')" class="my-button">
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
  display: flex;
  width: 90%;
  height: 48px;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  letter-spacing: 0.08rem;
  color: white;
  background-color: var(--primary-color);
}
.my-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>