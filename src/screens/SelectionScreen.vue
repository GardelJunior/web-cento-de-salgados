<template>
  <div id="selection-container">
    <header id="selection-header">
      <div :class="{ open: isCoxinhaSelected }" class="coxinha-discount-banner">
        <img src="../assets/images/coxinha.png" alt="coxinhas" />
        <p>
          ESCOLHEU <b>COXINHA</b> GANHOU DESCONTO DE <b>10%</b> NO SEU CENTO DE
          SALGADOS
        </p>
      </div>
      <h2>Monte seu cento de salgado (1,2 ou 4 opções)</h2>
    </header>
    <ul>
      <li
        v-for="item in items"
        :key="item.id"
        @click="toggleSnackSelect(item.id)"
      >
        <c-checkbox
          :value="selection.includes(item.id)"
          :disabled="!selection.includes(item.id) && !canSelectMore"
        />
        <span>{{ item.name }}</span>
      </li>
    </ul>
    <c-button
      @click="navigateToCart"
      :disabled="!isSelectionValid"
      class="button-margin"
    >
      CARRINHO
    </c-button>
  </div>
</template>
<script>
import CButton from "../components/CButton";
import CCheckbox from "../components/CCheckbox.vue";
import { SNACKS } from "../constants";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SelectionScreen",
  components: { CButton, CCheckbox },
  data() {
    return {
      items: SNACKS,
    };
  },
  methods: {
    ...mapActions(["toggleSnackSelect"]),
    navigateToCart() {
      if (this.isSelectionValid) {
        this.$router.push({ name: "cart-screen" });
      }
    },
  },
  computed: {
    ...mapGetters([
      "isCoxinhaSelected",
      "isSelectionValid",
      "canSelectMore",
      "selection",
    ]),
  },
};
</script>
<style scoped>
#selection-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 3rem;
  background: var(--primary-color);
}

#selection-header h2 {
  margin: 0.9rem 0;
  font-size: 0.9rem;
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.025rem;
  color: white;
}

#selection-header .coxinha-discount-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.3rem;
  width: 100%;
  max-height: 0;
  overflow: hidden;
  background: linear-gradient(to left, #cbcbcb, #aeaeae);
  transition: max-height ease-in 150ms;
}

#selection-header .coxinha-discount-banner.open {
  max-height: 6.1rem;
}

#selection-header .coxinha-discount-banner img {
  max-width: 8rem;
  /* transform: translateX(-2.4rem); */
  margin-left: -4rem;
  margin-right: 0.8rem;
}

#selection-header .coxinha-discount-banner p {
  max-width: 14rem;
  line-height: 1.4rem;
  color: #333;
}

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
  padding: 1.5rem 1rem;
  border-bottom: solid 1px #ddd;
  color: #707070;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
}

ul li .checkbox-container {
  margin-right: 0.8rem;
}
</style>