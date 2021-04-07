export default [
  {
    name: 'selection-screen',
    path: '/',
    component: () => import('../screens/SelectionScreen.vue')
  },
  {
    name: 'cart-screen',
    path: '/cart',
    component: () => import('../screens/CartScreen.vue')
  },
];