<template>
	<div class="login-page">
		<nav class="nav">
				<router-link to="/">
					<img class="nav__logo" src="../assets/logo.png" alt="Logotype">
				</router-link>
				<router-link class="nav__link" to="/">&larr; Back to the home page</router-link>
		</nav>
		<section class="login">
			<form class="form">
					<img src="../assets/avatar.png" alt="" class="form__avatar">
					<input class="form__input" type="email" id="email" placeholder="Type your e-mail" v-model="mail" novalidate :class="{ 'has-error': $v.mail.$dirty && $v.mail.$invalid }" @input="$v.mail.$touch()">
					<p class="form__input-hint" v-if="$v.mail.$dirty && $v.mail.$invalid">The field is not correct.</p>
					<input class="form__input" type="password"  id="password" placeholder="Type your password" v-model="password" :class="{ 'has-error': $v.password.$dirty && $v.password.$invalid }" @input="$v.password.$touch()">
					<p class="form__input-hint" v-if="$v.password.$dirty && !$v.password.required">The field is required.</p>
					<p class="form__input-hint" v-if="$v.password.$dirty && !$v.password.minLength">The password must contain a minimum of 5 characters.</p>
					<button type="submit" @click="send" class="form__btn" :disabled="$v.$invalid">Log in</button>
					<router-link to="/register" class="form__link">You don't have an account yet? Sign up!</router-link>
			</form>
		</section>
	</div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
	name: 'Login',
	mixins: [ validationMixin ],
	data() {
		return {
			mail: '',
			password: ''
		}
	},
	validations: {
		mail: {
			required,
			email
		},
		password: {
			required,
			minLength: minLength(5)
		}
	},
	methods: {
		send(e) {
			e.preventDefault();
			let toast = this.$toasted.show("Succes! You logged in!", {
					theme: "bubble",
					type: 'info',
					position: "bottom-right",
					duration : 5000
			});

			setTimeout(() => {
				toast = null;
			}, 3000);
		}
	}
}
</script>

<style lang="scss" scoped>
.login-page {
	width: 100%;
	background-image: linear-gradient(to bottom, #fff 0%, #f7f7f7 99%, #f7f7f7 100%);

	.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 90%;
		margin: 0 auto;
		height: 10vh;

		&__logo {
			width: 60px;
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

	.login {
		min-height: 90vh;
		width: 90%;
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 95%;
		margin: 0 auto;

		.form {
			width: 500px;
			padding: 50px 0 10px;
			background-color: #ececec;
			position: relative;
			box-shadow: 0 1px 4px 0 rgba(0,108,91,.24);
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			&__avatar {
				width: 100px;
				position: absolute;
				top: 0;
				transform: translateY(-50%);
				z-index: 3;
			}

			&::before, &::after {
				content: '';
				position: absolute;
				border-radius: 50%;
			}

			&::before {
				width: 100px;
				height: 100px;
				background-color: #ececec;
				top: 0;
				left: 50%;
				transform: translate(-50%, -60%);
			}

			&::after {
				width: 80px;
				height: 80px;
				left: 50%;
				top: 0;
				transform: translate(-50%, -60%);
				background-image: linear-gradient(to bottom, #fff 0%, #f7f7f7 99%, #f7f7f7 100%);
				box-shadow: 0 1px 4px 0 rgba(0,108,91,.24);
			}

				&__input {
					width: 90%;
					margin-top: 10px;
					padding: 12px;
					border: none;
					border-radius: 5px;

					&.has-error {
						border: 1px solid red;
					}
				}

				&__input-hint {
					margin: 5px 0 0;
					color: red;
					text-align: left;
					font-size: 14px;
					width: 90%;
				}

				&__btn {
					display: block;
					margin: 10px auto;
					padding: 10px 19px;
					border: none;
					border-radius: 5px;
					background-color: #5ad0ca;
					color: #fff;
					width: 90%;
					text-decoration: none;
					font-weight: bold;
					box-shadow: 0 1px 4px 0 rgba(0,108,91,.24);
					transition: all .2s ease-in-out;
					cursor: pointer;
					text-transform: uppercase;
					outline: none;

					&:disabled, &[disabled] {
						cursor: default;
						background-color: #dfdfdf;
						color: rgb(61, 61, 61);

						&:hover {
							background-color: #dfdfdf;
						}
					}

					&:hover {
						background-color: #43b1ab;
					}
				}

				&__link {
					text-decoration: none;
					color: #5759ee;
					margin: 20px 0;
					width: 340px;
					font-weight: bold;
					transition: all .2s ease-in-out;

					&:hover {
						color: #4143c2;
					}

					&::before {
						content: "";
						position: absolute;
						margin: 0 auto;
						width: 305px;
						height: 2px;
						bottom: 25px;
						left: 0;
						right: 0;
						background-color: #4143c2;
						visibility: hidden;
						-webkit-transform: scaleX(0);
						transform: scaleX(0);
						-webkit-transition: all 0.3s ease-in-out 0s;
						transition: all 0.3s ease-in-out 0s;
					}

					&:hover::before {
						visibility: visible;
						-webkit-transform: scaleX(1);
						transform: scaleX(1);
					}
				}
			}
		}
}
</style>