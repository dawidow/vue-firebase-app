<template>
	<div class="modal">
		<h3 class="modal__info">Add new post</h3>
			<form class="form">
				<button class="form__close-btn" @click="hideModal"></button>
				<input type="text" class="form__input" placeholder="Title of the post" :class="{ 'has-error': $v.title.$dirty && $v.title.$invalid }" @input="$v.title.$touch()" v-model="title">
				<p class="form__input-hint" v-if="$v.title.$dirty && !$v.title.required">The field is required.</p>
				<p class="form__input-hint" v-if="$v.title.$dirty && !$v.title.minLength">The field must contain a minimum of 5 characters.</p>
				<input type="text" class="form__input" placeholder="Author name" :class="{ 'has-error': $v.author.$dirty && $v.author.$invalid }" @input="$v.author.$touch()" v-model="author">
				<p class="form__input-hint" v-if="$v.author.$dirty && !$v.author.required">The field is required.</p>
				<p class="form__input-hint" v-if="$v.author.$dirty && !$v.author.minLength">The field must contain a minimum of 5 characters.</p>
				<input type="text" class="form__input" placeholder="Post description" :class="{ 'has-error': $v.description.$dirty && $v.description.$invalid }" @input="$v.description.$touch()" v-model="description">
				<p class="form__input-hint" v-if="$v.description.$dirty && !$v.description.required">The field is required.</p>
				<p class="form__input-hint" v-if="$v.description.$dirty && !$v.description.minLength">The field must contain a minimum of 20 characters.</p>
				<button type="submit" @click="send" class="form__btn" :disabled="$v.$invalid">Add new post</button>
			</form>
	</div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';

export default {
	name: 'Modal',
	mixins: [ validationMixin ],
	data() {
		return {
			title: '',
			author: '',
			description: '',
		}
	},
	validations: {
		title: {
			required,
			minLength: minLength(5)
		},
		author: {
			required,
			minLength: minLength(5)
		},
		description: {
			required,
			minLength: minLength(20)
		}
	},
	methods: {
		send(e) {
			e.preventDefault();
			let toast = this.$toasted.show("Succes! Your post was created!!", {
					theme: "bubble",
					type: 'info',
					position: "bottom-right",
					duration : 5000
			});

			setTimeout(() => {
				toast = null;
			}, 2000);

			this.$emit('closeModal', false);
		},
		hideModal(e) {
			e.preventDefault();
			this.$emit('closeModal', false);
		}
	}
}
</script>

<style lang="scss" scoped>

.modal {
	max-width: 90%;
	width: 600px;
	padding: 10px;
	margin: 0 auto;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #ececec;
	box-shadow: 0 1px 4px 0 rgba(0,108,91,.24);

	&__info {
		margin: 0 0 20px;
	}

	.form {
		&__input {
			width: 90%;
			margin-top: 10px;
			padding: 12px;
			border: none;
			border-radius: 5px;
			outline: none;
			position: relative;

			&.has-error {
				border: 1px solid red;
			}
		}

		&__close-btn {
			width: 25px;
			height: 25px;
			background-color: #fff;
			position: absolute;
			top: 10px;
			right: 10px;
			border: none;
			border-radius: 5px;
			cursor: pointer;
			transition: all .2s ease-in-out;

			&::before {
				content: 'X';
			}

			&:hover {
				background-color: #43b1ab;
			}

			&:hover::before {
				color: #fff;
			}
		}

		&__input-hint {
			margin: 5px auto;
			color: red;
			text-align: left;
			font-size: 12px;
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
	}
}

</style>