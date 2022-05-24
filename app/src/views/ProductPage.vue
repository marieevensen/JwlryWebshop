<template>
    <div v-if="loading">...</div>

	<div class="product" v-else>
			<div class="product__image">
				<img :src="result.image.asset.url" alt="Bilde av produktet">
			</div>

            <div class="product__info">
                <div class="info__name">
                    {{ result.name }}
                </div>

                <div class="info__description">
                    {{ result.description }}
                </div>

                <div class="info__price">
                    {{ result.price }}kr
                </div>

                <button class="info__button" @click="addProductToCart(result)">
                    Add to cart
                </button>
            </div>
	</div>
</template>

<script>
	import query from '../groq/slug.groq?raw';
    import sanityMixin from '../mixins/sanityMixin.js';

	export default {

        mixins: [sanityMixin],

 		async created() {
            await this.sanityFetchParams(query, { slug: this.$route.params.product_slug })
		},

        methods: {
			addProductToCart(product) {
				this.$store.dispatch('addToCart', product);
			}
		}
    }
</script>

<style>
    .product {
		margin: 40px 0 0 100px;
        display: flex;
	}

    @media screen and (max-width: 700px) {
        .product {
            margin: 30px 0 0 0;
            flex-direction: column;
            align-items: center;
        }
    }

	.product__image {
		width: 250px;
		border: 2px solid #c1ab87;
	}

    @media screen and (max-width: 900px) {
        .product__image {
            width: 200px;
            border: none;
        }
    }

    @media screen and (min-width: 700px) {
        .product__info {
            margin-left: 60px;
        }
    }

	.info__name {
        margin-top: 20px;
        margin-bottom: 20px;
		font-weight: bold;
        font-size: 1.3em;
	}

    .info__description {
        width: 250px;
        margin-left: 20px;
        margin-bottom: 20px;
    }

    @media screen and (min-width: 900px) {
        .info__description {
            width: 500px;
        }
    }

	.info__price {
        margin-left: 20px;
        margin-bottom: 20px;
	}

    .info__button {
        margin-left: 40px;
        padding: 10px;
        background-color: #c1ab87;
    }

    .info__button:hover {
        font-weight: bold;
        background-color: #d6c09c;
    }
</style>