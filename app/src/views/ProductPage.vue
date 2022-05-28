<template>
    <div v-if="loading">...</div>

	<main class="product" v-else>
		<div class="product__image">
			<img :src="result.image.asset.url" alt="Bilde av produktet">
	    </div>

        <section class="product__info">
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
                Legg til i handlekurv
            </button>
        </section>
	</main>
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
		margin: 30px 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
	}

    @media screen and (min-width: 950px) {
        .product {
            margin: 40px 0 0 100px;
            flex-direction: row;
        }
    }

	.product__image {
		width: 200px;
	}

    @media screen and (min-width: 950px) {
        .product__image {
            width: 250px;
            margin-right: 60px;
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

    @media screen and (min-width: 950px) {
        .info__description {
            width: 450px;
        }
    }

	.info__price {
        margin-left: 20px;
        margin-bottom: 20px;
	}

    .info__button {
        margin-left: 40px;
        padding: 10px;
        background-color: var(--details);
        color: var(--foreground);
    }

    .info__button:hover {
        font-weight: bold;
        background-color: var(--hover);
    }
</style>