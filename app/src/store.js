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

	// 1 Henter produktene som er i handlekurven
	// 2 Henter lengden for å kunne skrive ut hvor mange forskjellige produkter som er i handlekurven
	
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

	// 1 For å legge til et produkt sjekkes det om produktet allerede er i handlekurven,
	// 1.1 hvis produktet er der, blir antallet plusset med 1,
	// 1.2 hvis produktet ikke er der, blir det lagt til
	// 2 Fjerner produktet, ved å finne index og slette den
	// 3 Fjerner alle produktene ved å finne lengden av handlekurven, deretter gjøre det til 0

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