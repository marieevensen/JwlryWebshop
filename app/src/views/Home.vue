<template>
	<main class="frontpage">
		<div class="frontpage__top">
			<span class="top__text">SMYKKER</span>

			<span class="top__text--two">MOTE</span>
			
			<img class="top__image" src="/images/image1.jpg" alt="Bilde av hender med smykker fra butikken">
			
			<img class="top__image--two" src="/images/image2.jpg" alt="Bilde av en modell med smykker fra butikken">
			
			<img class="top__image top__image--three" src="/images/image3.jpg" alt="Bilde av hender med smykker fra butikken">
		</div>

		<div class="frontpage__bottom">
			<p class="bottom__text">FINN DIN INDRE SKJØNNHET</p>
			
			<img class="bottom__image--circle" src="/images/image5.jpg" alt="Bilde av en hals med halskjeder fra butikken">
			
			<img class="bottom__image" src="/images/image4.jpg" alt="Bilde av et øret med øredobber fra butikken">
		</div>
	</main>
</template>

<style>
	.frontpage {
		margin-top: 20px;
	}

	.frontpage__top {
		text-align: center;
		margin-bottom: 120px;
	}

	@media screen and (max-width: 600px) {
		.frontpage__top {
			margin-bottom: 50px;
		}
	}

	.top__image {
		width: 280px;
		border-radius: 70% 70% 0 0;
	}

	@media screen and (max-width: 600px) {
		.top__image {
			width: 200px;
			margin: 20px 0;
		}
	}

	.top__image--two {
		width: 300px;
		border-radius: 0 0 70% 70%;
	}

	@media screen and (max-width: 600px) {
		.top__image--two {
			width: 200px;
		}
	}

	.top__image--three {
		display: none
	}

	@media screen and (min-width: 950px) {
		.top__image--three {
			display: inline;
		}
	}

	.top__text {
		position: absolute;
		margin: 20px 0 0 50px;
		font-size: 70px;
	}

	@media screen and (max-width: 600px) {
		.top__text, .top__text--two {
			display: none;
		}
	}

	.top__text--two {
		position: absolute;
		margin: 370px 0 0 120px;
		font-size: 70px;
	}

	.frontpage__bottom {
		text-align: left;
		padding-left: 170px;
	}

	@media screen and (max-width: 600px) {
		.frontpage__bottom {
			text-align: center;
			padding-left: 0;
		}
	}

	.bottom__text {
		width: 400px;
		font-size: 50px;
	}

	@media screen and (min-width: 950px) {
		.bottom__text {
			position: absolute;
			margin: 20px 0 0 500px;
		}
	}
	
	@media screen and (max-width: 600px) {
		.bottom__text {
			font-size: 30px;
		}
	}

	.bottom__image {
		width: 470px;
		margin: 30px 0;
	}

	@media screen and (max-width: 600px) {
		.bottom__image {
			width: 250px;
		}
	}

	.bottom__image--circle {
		display: none;
	}


	@media screen and (min-width: 950px) {
		.bottom__image--circle {
			width: 600px;
			position: absolute;
			display: flex;
			margin: 160px 0 0 350px;
			border-radius: 50% 50% 50% 50%;
		}
	}
</style>