<template>
  <div
    @click="$emit('input', !value)"
    class="checkbox-container"
    :class="{ disabled }"
  >
    <div v-show="value" class="checkbox-inner-container"></div>
  </div>
</template>
<script>
export default {
  name: "CCheckbox",
  props: {
    value: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },
};
</script>
<style>
.checkbox-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
  border-radius: 0.2rem;
  border: solid 1px #8c8c8c;
}
.checkbox-container.disabled {
  border: solid 1px #8c8c8c66;
  background-color: #fefefe;
  cursor: not-allowed;
}
.checkbox-inner-container {
  background-color: var(--primary-color);
  border-radius: 0.2rem;
  width: 75%;
  height: 75%;
}
</style>