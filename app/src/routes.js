import Home from './views/Home.vue';
import Store from './views/Store.vue';
import Cart from './views/Cart.vue';
import ProductPage from './views/ProductPage.vue'

export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'store', path: '/store', component: Store },
	{ name: 'cart', path: '/cart', component: Cart },
	{ name: 'product', path: '/store/:product_slug', component: ProductPage }
];
