export default {
	state() {
		return {
			cart: [
			],
		};
	},

	

	getters: {
		getItems(state) {
			return state.cart;
		},

		getItemCount(state) {
		 	return state.cart.length;
		},
	},
	
	mutations: {
		addItemToCart(state, product) {
			const existing = state.cart.findIndex(item => {
				return item.product._id === product._id;
			});
			console.log(existing)
			if(existing >= 0) {
				state.cart[existing].quantity += 1;
			} else {
				state.cart.push({quantity: 1, product: product});
			}
		},

		removeItem(state, itemIndex) {
			state.cart.splice(itemIndex, 1);
		},

		removeAll(state) {
			const cartLength = state.cart.length;

			state.cart.splice(0, cartLength);
		}
	},

	actions: {
		addToCart({commit}, product) {
			commit('addItemToCart', product);
		},

		removeItemFromCart({commit}, itemIndex) {
			commit('removeItem', itemIndex)
		},

		removeAllItemsFromCart({commit}) {
			commit('removeAll')
		}
	}
};
