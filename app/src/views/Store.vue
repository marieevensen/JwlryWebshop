<template>
    <div v-if="loading">...</div>

	<main class="products" v-else>
		<article v-for="product in result">
			<RouterLink  :to="{ name: 'product', params: { product_slug: product.slug.current }}" aria-label="Klikk her for å se produkt">
				<span class="products__image-text">Klikk her for å se produkt</span>

				<img class="products__image" :src="product.image.asset.url" alt="bilde av produktet">
			</RouterLink>

			<p class="products__name">{{ product.name }}</p>

			<p class="products__price">{{ product.price }}kr</p>
		</article>
	</main>
</template>

<!-- Kommenterer script
	1 Bruker slug for å kunne navigere til de forskjellige produktene
-->

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
		grid-template-columns: repeat(2, 1fr);
		text-align: center;
		margin-top: 40px;
	}

	@media screen and (min-width: 950px) {
		.products {
			grid-template-columns: repeat(3, 1fr);
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
		display: none;
	}

	@media screen and (min-width: 950px) {
		.products__image-text {
			position: absolute;
			display: inline;
			padding: 150px 25px 195px 20px;
			opacity: 0.0;
			color: var(--foreground);
		}
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