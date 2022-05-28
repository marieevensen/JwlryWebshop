<template>
    <footer class="footer">
        Laget av Marie Evensen

        <RouterLink :to="{ name: 'home' }">
            <img class="footer__logo" src="/images/logo.png" alt="Logo til butikken Jewelry, klikk her for å gå til hjemmesiden">
        </RouterLink>    
    </footer>
</template>

<style>
    .footer {
        display: flex;
        margin: 30px 50px 0px;
        border-top: 2px var(--foreground) solid;
        justify-content: space-between;
        padding: 10px 30px;
    }

    @media screen and (max-width: 600px) {
		.footer {
            font-size: 0.7em;
        }
	}

    .footer__logo {
        height: 60px;
    }

    @media screen and (max-width: 600px) {
		.footer__logo {
            display: none;
        }
	}
</style>