<template>
	<main class="cart">
		<article class="cart__item" v-for="(item, index) in cartItems">
            <img class="item__image" :src="item.product.image.asset.url" alt="Bilde av produktet du har i handlekurven din">

			<p class="item__name">{{ item.product.name }}</p>
           	
		    <p class="item__price">{{ item.product.price }}kr</p>
 
			<div class="item__quantity">
				<button class="item__quantity--minus" @click="minusQuantity(item)" aria-label="Minsk antall">-</button>
			
				<span class="item__quantity--number">{{ item.quantity }}</span>
			
				<button class="item__quantity--plus" @click="plusQuantity(item)" aria-label="Øk antall">+</button>
			</div>

			<button class="item__remove-button" @click="removeItem(index)" aria-label="Slett produktet">X</button>
		</article>

		<section class="cart__purchase">
			<p class="purchase__total-price">
				Total pris: {{ cartPriceTotal }}kr
			</p>

			<button class="purchase-button" @click="removeAllItems()">
				Fullfør bestilling
			</button>
		</section>
	</main>
</template>

<script>
	export default {
		computed: {
			cartItems() {
				return this.$store.getters.getItems;
			},
			
			itemCount() {
			 	return this.$store.getters.getItemCount;
			},

			cartPriceTotal() {
			 	return this.cartItems.reduce(function(total, item) {
			 		return total + item.product.price * item.quantity;
				}, 0);
			},
		},

		methods: {
			removeItem(itemIndex) {
				this.$store.dispatch('removeItemFromCart', itemIndex)
			},

			removeAllItems() {
				this.$store.dispatch('removeAllItemsFromCart') && alert("Takk for din bestilling!")
			},

			plusQuantity(item) {
			 	item.quantity += 1;
			},

			minusQuantity(item) {
				if(item.quantity <= 1) {
					item.quantity = 1;
				} else {
					item.quantity -=1;
				}
			}
		}
	}
</script>

<!-- Kommenterer script
	1 Regner totalprisen ved å plusse total med (pris gange antall)
	2 Lager funksjoner for å minske og øke antall
	2.1 Gjør også slik at antall ikke kan være mindre enn 1
-->

<style>
	.cart__item {
        display: flex;
		flex-direction: column;
		align-items: center;
		margin: 40px 0 0;
	}

	@media screen and (min-width: 950px) {
		.cart__item {
			flex-direction: row;
			margin: 40px 0 0 100px;
		}
	}

	.item__image {
		width: 150px;
		border: 1px solid var(--details);
	}

	.item__name {
		margin: 5px 30px;
		font-weight: bold;
	}

	.item__price {
		margin: 5px 0;
	}

	.item__quantity {
		background-color: var(--details);
		margin: 5px 0;
	}

	@media screen and (min-width: 950px) {
		.item__quantity {
			margin-left: 30px;
		}
	}

	.item__quantity--minus, .item__quantity--plus {
		padding: 0 10px;
		color: var(--foreground);
	}

	.item__quantity--minus:hover, .item__quantity--plus:hover {
		background-color: var(--hover);
	}

	.item__remove-button {
		margin: 5px;
		color: var(--foreground);
	}

	.item__remove-button:hover {
		font-weight: bold;
	}	

	@media screen and (min-width: 950px) {
		.item__remove-button {
			margin-left: 100px;
		}
	}

	.cart__purchase {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 30px;
	}

	.purchase__total-price {
		margin-bottom: 20px;
		font-size: 1.2em;
	}

	.purchase-button {
		width: 180px;
		padding: 10px;
		background-color: var(--details);
		color: var(--foreground);
	}

	.purchase-button:hover {
		font-weight: bold;
		background-color: var(--hover);
	}
</style>