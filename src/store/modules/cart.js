import { SNACKS, SNACKS_BOX_MAX_QTY, SNACKS_BOX_PRICE } from '../../constants';

const state = () => ({
  selection: [],
})

const getters = {
  selection: state => state.selection,
  canSelectMore: state => state.selection.length < 4,
  isCoxinhaSelected: state => state.selection.includes(SNACKS[0].id),
  isSelectionValid: state => [1, 2, 4].includes(state.selection.length),
  cartTotalValue: (_, { isCoxinhaSelected }) => {
    const discount = isCoxinhaSelected ? 0.1 : 0.0;
    const subtotal = SNACKS_BOX_PRICE;
    const valueWithDiscount = subtotal * discount;
    const total = subtotal - valueWithDiscount;

    return {
      subtotal,
      discount: valueWithDiscount,
      total
    }
  },
  cartSnacksWithQuantities: state => {
    const quantityPerSnackType = SNACKS_BOX_MAX_QTY / state.selection.length;
    return state.selection.map((id) => {
      const { name } = SNACKS.find(item => item.id === id);
      return {
        id: id,
        name: name,
        quantity: quantityPerSnackType
      }
    })
  },
}

const actions = {
  toggleSnackSelect({ state: { selection }, commit }, snack_id) {
    const canInsert = selection.length < 4;
    const snackIndex = selection.indexOf(snack_id);
    if (snackIndex >= 0) {
      commit('removeSnackFromSelection', snackIndex);
    } else {
      if (canInsert) {
        commit('insertSnackIntoSelection', snack_id);
      }
    }
  }
}

const mutations = {
  removeSnackFromSelection(state, index) {
    state.selection.splice(index, 1);
  },
  insertSnackIntoSelection(state, snack_id) {
    state.selection.push(snack_id);
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}