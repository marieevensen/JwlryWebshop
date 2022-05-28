<template>
	<div class="frontpage">
		<div class="frontpage__top">
			<span class="top__text">J E W E L R Y</span>

			<span class="top__text--two">F A S H I O N</span>
			
			<img class="top__image" src="/images/image1.jpg" alt="Bilde av hender med smykker fram butikken">
			
			<img class="top__image--two" src="/images/image2.jpg" alt="Bilde av person med smykker fra butikken">
			
			<img class="top__image top__image--three" src="/images/image3.jpg" alt="Bilde av hender med smykker fram butikken">
		</div>

		<div class="frontpage__bottom">
			<span class="bottom__text">FIND YOUR INNER BEAUTY</span>
			
			<img class="bottom__image--circle" src="/images/image5.jpg" alt="Bilde av et øre, med øredobber fra butikken">
			
			<img class="bottom__image" src="/images/image4.jpg" alt="Bilde av halskjeder fra butikken">
		</div>
	</div>
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

	@media screen and (min-width: 950px) {
		.top__image--two {
			margin: 0 30px;
		}
	}

	@media screen and (max-width: 950px) {
		.top__image--three {
			display: none;
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
		margin: 370px 0 0 450px;
		font-size: 70px;
	}

	@media screen and (max-width: 950px) {
		.top__text--two {
			margin: 370px 0 0 30px;
		}
	}

	.frontpage__bottom {
		text-align: center;
	}

	.bottom__text {
		width: 400px;
		font-size: 50px;
	}

	@media screen and (min-width: 950px) {
		.bottom__text {
			position: absolute;
			margin: 20px 0 0 500px;
			font-size: 50px;
		}
	}
	
	@media screen and (max-width: 600px) {
		.bottom__text {
			font-size: 25px;
		}
	}

	.bottom__image {
		width: 470px;
		margin: 30px 0;
	}

	@media screen and (min-width: 950px) {
		.bottom__image {
			width: 470px;
			margin: 0 475px 60px 0;
		}
	}

	@media screen and (max-width: 600px) {
		.bottom__image {
			width: 200px;
		}
	}

	.bottom__image--circle {
		width: 600px;
		position: absolute;
		margin: 160px 0 0 350px;
		border-radius: 50% 50% 50% 50%;
	}

	@media screen and (max-width: 950px) {
		.bottom__image--circle {
			display: none;
		}
	}
</style>