<template>
	<div class="cart">
		<div class="cart__item" v-for="(item, index) in cartItems">
            <img class="item__image" :src="item.product.image.asset.url" alt="Bilde av produktet du har i handlekurv">

			<span class="item__name">{{ item.product.name }}</span>
           	
		    <span class="item__price">{{ item.product.price }}kr</span>
 
			<div class="item__quantity">
				<button class="item__quantity--minus" @click="minusQuantity(item)">-</button>
			
				<span class="item__quantity--number">{{ item.quantity }}</span>
			
				<button class="item__quantity--plus" @click="plusQuantity(item)">+</button>
			</div>

			<button class="item__remove-button" @click="removeItem(index)">X</button>
		</div>

		<div class="cart__purchase">
			<div class="purchase__total-price">
				Total price: {{ cartPriceTotal }}kr
			</div>

			<button class="purchase-button" @click="removeAllItems()">
				Purchase
			</button>
		</div>
	</div>
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
				this.$store.dispatch('removeAllItemsFromCart') && alert("Thanks for your order!")
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

<style>
	.cart__item {
        display: flex;
		align-items: center;
		margin: 40px 0 0 100px;
	}

	@media screen and (max-width: 1000px) {
		.cart__item {
			flex-direction: column;
			margin: 40px 0 0 0;
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

	@media screen and (min-width: 1000px) {
		.item__quantity {
			margin-left: 50px;
		}
	}

	.item__quantity--minus, .item__quantity--plus {
		padding: 0 10px;
	}

	.item__quantity--minus:hover, .item__quantity--plus:hover {
		background-color: var(--hover);
	}

	.item__remove-button {
		margin: 5px;
	}

	.item__remove-button:hover {
		font-weight: bold;
	}	

	@media screen and (min-width: 1000px) {
		.item__remove-button {
			margin-left: 100px;
		}
	}

	.cart__purchase {
		text-align: center;
		margin-top: 30px;
	}

	.purchase__total-price {
		margin-bottom: 20px;
		font-size: 1.2em;
	}

	.purchase-button {
		padding: 10px;
		background-color: var(--details);
	}

	.purchase-button:hover {
		font-weight: bold;
		background-color: var(--hover);
	}
</style>