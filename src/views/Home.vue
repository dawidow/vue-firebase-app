<template>
	<div>
		<header class="header">
			<div class="header__logotype">
				<img class="header__logo" src="../assets/logo.png" alt="Logotype">
				<p class="header__logo-name">teamwall</p>
			</div>
			<div class="header__buttons">
				<router-link class="header__login" to="/login">Login</router-link>
				<router-link class="header__register" to="/register">Try for free!</router-link>
			</div>
		</header>
		<section class="main">
			<h1 class="main__intro">Your wall full of ideas</h1>
			<p class="main__description">Share your ideas with the whole team. Try our solution for free to exchange ideas in your project.</p>
			<router-link class="main__register" to="/register">Try for free!</router-link>
		</section>

		<footer class="footer">
			<p class="footer__description">Made with ❤️ by <a class="footer__link" href="https://dowczarz.pl/">Dawid Owczarz</a>.</p>
		</footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  }
}
</script>

<style lang="scss" scoped>

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 90%;
		height: 10vh;
		margin: 0 auto;

		&__logotype {
			display: flex;
			align-items: center;

			.header__logo {
				width: 60px;
			}

			.header__logo-name {
				display: none;
			}
		}

		&__buttons {
			display: flex;
			align-items: center;

			.header__login {
				margin-right: 10px;
				text-decoration: none;
				color: #000;
				transition: all .2s ease-in-out;
				font-weight: bold;

				&:hover {
					color: #5ad0ca;
				}
			}

			.header__register {
				margin-left: 10px;
				padding: 10px 19px;
				border-radius: 5px;
				background-color: #5ad0ca;
				color: #fff;
				text-decoration: none;
				font-weight: bold;
				box-shadow: 0 1px 4px 0 rgba(0,108,91,.24);
				transition: all .2s ease-in-out;
				cursor: pointer;


				&:hover {
					background-color: #43b1ab;
				}
			}
		}
	}

	.main {
		width: 90%;
		height: 80vh;
		margin: 0 auto;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		&::before {
			content: '';
			background: none;
			width: 536px;
			height: 427px;
			position: absolute;
			right: 0;
			top: 0;
			bottom: 0;
		}

		.main__register {
			padding: 10px 19px;
			border-radius: 5px;
			background-color: #5ad0ca;
			color: #fff;
			text-decoration: none;
			font-weight: bold;
			box-shadow: 0 1px 4px 0 rgba(0,108,91,.24);
			transition: all .2s ease-in-out;
			cursor: pointer;
			z-index: 4;

			&:hover {
				background-color: #43b1ab;
			}
		}

		&__intro {
			margin: 0;
		}

		&__description {
			max-width: 500px;
			text-align: center;;
		}
	}

	.footer {
		height: 10vh;

		&__description {
			color: #000;
			font-size: .9em;
		}

		&__link {
			text-decoration: none;
			color: #000;
			transition: all .2s ease-in-out;

			&:hover {
				color: #43b1ab;
			}
		}
	}

	@media screen and (min-width: 980px) {
		.header {
			.header__logo-name {
				display: block;
				margin-left: 10px;
				font-weight: bold;
			}
		}

		.main {
			display: flex;
			justify-content: center;
			align-items: flex-start;

			&::before {
				content: '';
				background-image: url('../assets/header.png');
				background-repeat: no-repeat;
				width: 536px;
				height: 427px;
				position: absolute;
				right: 20px;
				top: 10vh;
				bottom: 0;
				z-index: -1;
			}

			&__description {
				text-align: left;
			}
		}
	}

</style>