<template>
    <div class="header">
        <div>
            <RouterLink :to="{ name: 'home' }">
                <img class="header__logo" src="/images/logo.png" alt="Logo til butikken Jewelry, trykk her for å komme til forsiden">
            </RouterLink>
        </div>

        <div>
            <RouterLink class="header__link header__home" :to="{ name: 'home' }">HOME</RouterLink>

            <RouterLink class="header__link" :to="{ name: 'store' }">STORE</RouterLink>
            
            <RouterLink class="header__link header__cart" :to="{ name: 'cart' }">
                <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.625 15.2344H33.9844V14.4531C33.9844 9.49219 29.9609 5.46875 25 5.46875C20.0391 5.46875 16.0156 9.49219 16.0156 14.4531V15.2344H9.375C8.51074 15.2344 7.8125 15.9326 7.8125 16.7969V42.9688C7.8125 43.833 8.51074 44.5312 9.375 44.5312H40.625C41.4893 44.5312 42.1875 43.833 42.1875 42.9688V16.7969C42.1875 15.9326 41.4893 15.2344 40.625 15.2344ZM19.5312 14.4531C19.5312 11.4307 21.9775 8.98438 25 8.98438C28.0225 8.98438 30.4688 11.4307 30.4688 14.4531V15.2344H19.5312V14.4531ZM38.6719 41.0156H11.3281V18.75H16.0156V23.0469C16.0156 23.2617 16.1914 23.4375 16.4062 23.4375H19.1406C19.3555 23.4375 19.5312 23.2617 19.5312 23.0469V18.75H30.4688V23.0469C30.4688 23.2617 30.6445 23.4375 30.8594 23.4375H33.5938C33.8086 23.4375 33.9844 23.2617 33.9844 23.0469V18.75H38.6719V41.0156Z" fill="black"/>
                </svg>

                <span> {{ countItem }} </span>
            </RouterLink>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            cartItems() {
				return this.$store.getters.getItems;
			},

            // countItem() {
			//  	return this.cartItems.reduce(item) {
			//  		return item.quantity++;
			// 	};
			// },
            countItem() {
                return this.$store.getters.getItemCount
            }
        }
    }
</script>


<style>
    .header {
        text-align: center;
        margin-top: 10px;
    }

    .header__logo {
        width: 150px;
    }

    .header__link {
        color: black;
        text-decoration: none;
        font-weight: bold;
    }

    .header__home {
        margin-right: 50px;
    }

    .header__cart {
        margin-left: 100px;
    }

    @media screen and (min-width: 1200px) {
        .header__cart {
            margin-left: 760px;
        }
    }
</style>