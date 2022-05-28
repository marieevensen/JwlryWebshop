<template>
    <div v-if="loading">...</div>

	<div class="products" v-else>
		<div v-for="product in result">
			<RouterLink  :to="{ name: 'product', params: { product_slug: product.slug.current }}">
				<div class="products__image-text">Click to see the product</div>
				<img class="products__image" :src="product.image.asset.url" alt="Bilde av produktet">
			</RouterLink>

			<div class="products__name">
				{{ product.name }}
			</div>

			<div class="products__price">
				{{ product.price }}kr
			</div>
		</div>
	</div>
</template>

<script>
	import query from '../groq/home.groq?raw';
    import sanityMixin from '../mixins/sanityMixin.js';

	export default {

        mixins: [sanityMixin],

 		async created() {
            await this.sanityFetch(query)
		}
    }
</script>

<style>
	.products {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		text-align: center;
		margin-top: 40px;
	}

	@media screen and (max-width: 950px) {
		.products {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media screen and (max-width: 600px) {
		.products {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	.products__image {
		width: 280px;
		border: 2px solid var(--details);
	}

	.products__image-text {
		padding: 150px 30px 195px;
		margin-left: 70px;
		position: absolute;
		opacity: 0.0;
		color: var(--foreground);
	}

	.products__image-text:hover {
		opacity: 1;
	}

	.products__name {
		font-weight: bold;
		font-size: 0,8em;
		margin: 5px 0 0 7px;
	}

	.products__price {
		margin: 2px 0 40px 20px;
	}
</style>