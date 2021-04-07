<template>
  <div id="selection-container">
    <div>Item</div>
    <ul>
      <li>
        <input type="checkbox" name="" id="" />
        Coxinha
      </li>
      <li>
        <input type="checkbox" name="" id="" />
        Coxinha
      </li>
      <li>
        <input type="checkbox" name="" id="" />
        Coxinha
      </li>
      <li>
        <input type="checkbox" name="" id="" />
        Coxinha
      </li>
      <li>
        <input type="checkbox" name="" id="" />
        Coxinha
      </li>
    </ul>
    <c-button class="button-margin">CARRINHO</c-button>
  </div>
</template>
<script>
import CButton from "../components/CButton";
export default {
  name: "SelectionScreen",
  components: { CButton },
  data() {
    return {};
  },
};
</script>
<style scoped>
#selection-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.button-margin {
  margin-bottom: 1rem;
}

ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
}

ul li {
  padding: 24px 18px;
  border-bottom: solid 1px #ddd;
  color: #707070;
}
</style>