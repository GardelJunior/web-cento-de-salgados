<template>
  <div id="cart-screen">
    <header id="cart-header">
      <button id="back-button" @click="navigateBack">
        <img src="../assets/images/back-icon.svg" alt="back icon" />
      </button>
      <h2>Carrinho</h2>
    </header>
    <div id="cart-resume">
      <span id="resume-title">Resumo do Cento de Salgado</span>
      <ul>
        <li v-for="item of cartSnacksWithQuantities" :key="item.id">
          <span class="snack-name">{{ item.name }}</span>
          <span class="snack-quantity">{{ item.quantity }}und</span>
        </li>
      </ul>
    </div>
    <div id="pricing-container">
      <ul v-if="isCoxinhaSelected" id="discount">
        <li>
          <span>Subtotal</span>
          <span class="price">{{ cartTotalValue.subtotal | money_brl }}</span>
        </li>
        <li>
          <span>Desconto</span>
          <span class="price">{{ cartTotalValue.discount | money_brl }}</span>
        </li>
      </ul>
      <div id="total">
        <span>Total</span>
        <span id="total-label">{{ cartTotalValue.total | money_brl }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "CartScreen",
  data() {
    return {};
  },
  filters: {
    money_brl(value) {
      return `R$${value.toFixed(2).replace(".", ",")}`;
    },
  },
  computed: {
    ...mapGetters([
      "isCoxinhaSelected",
      "cartTotalValue",
      "cartSnacksWithQuantities",
    ]),
  },
  methods: {
    navigateBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
#cart-screen {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
#cart-header {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: var(--primary-color);
  height: 3.2rem;
}
#cart-header h2 {
  font-size: 1rem;
  font-weight: 500;
  color: white;
}
#back-button {
  background: transparent;
  margin-right: 0.6rem;
}
#back-button img {
  width: 1.1rem;
  height: 1.1rem;
  margin-top: 3px;
}

#cart-resume {
  display: flex;
  flex-direction: column;
  flex: 1;
}

#cart-resume ul {
  width: 100%;
  display: flex;
  flex-direction: column;
}

#cart-resume li {
  display: flex;
  justify-content: space-between;
  padding: 1.4rem 1rem;
  border-bottom: solid 1px #ddd;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
}

#resume-title {
  margin-top: 1.8rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  border-bottom: solid 1px #707070;
}

#cart-resume .snack-name {
  color: #333;
}

#cart-resume .snack-quantity {
  font-weight: 300;
  color: #999;
}

#pricing-container {
  display: flex;
  flex-direction: column;
}
#discount li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.1rem;
  font-size: 1.1rem;
  color: #777;
}

#total,
#cart-header,
#discount li {
  padding: 0 1rem;
}

#total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primary-color);
  height: 5rem;
  font-size: 1.3rem;
  color: white;
}

#total-label {
  font-family: "Poppins", sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
}
</style>