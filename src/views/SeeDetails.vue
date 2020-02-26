<template>
	<div class="details">
			<nav class="nav">
				<router-link to="/">
					<img class="nav__logo" src="../assets/logo.png" alt="Logotype">
				</router-link>
				<div class="nav__right-side">
					<router-link class="nav__link" to="/">Logout</router-link>
					<div class="nav__hello">
						<p class="nav__name">Hello name</p>
						<img src="../assets/avatar.png" alt="avatar" class="nav__avatar">
					</div>
				</div>
		</nav>
		<router-link  class="details__back" to="/dashboard">&larr; Back to dashboard</router-link>
		<div class="details__item">
			<h3 class="details__title">{{ title }}</h3>
			<p class="details__author">{{ author }}</p>
			<p class="details__description">{{ description }}</p>
			<div class="details__icons">
				<router-link to='' class="details__edit">&#9998; edit</router-link>
				<button class="details__remove" @click="removePost">&#10007; delete</button>
			</div>
		</div>
	</div>
</template>

<script>
import db from '../components/firebaseInit';

export default {
	name: 'SeeDetails',
	data() {
		return {
			post_id: null,
			title: null,
			author: null,
			description: null,
		}
	},
	beforeRouteEnter (to, from, next) {
		db.collection('posts').where('post_id', '==', to.params.post_id).get()
			.then(querySnapshot => {
				querySnapshot.forEach(doc => {
					next(vm => {
						vm.post_id = doc.data().post_id,
						vm.title = doc.data().title,
						vm.author = doc.data().author,
						vm.description = doc.data().description
					})
				})
			})
	},
	watch: {
		'$route': 'fetchData'
	},
	methods: {
		fetchData() {
			db.collection('posts').where('post_id', '==', this.$route.params.post_id).get()
				.then(querySnapshot => {
					querySnapshot.forEach(doc => {
						this.post_id = doc.data().post_id,
						this.title = doc.data().title,
						this.author = doc.data().author,
						this.description = doc.data().description
					})
				})
		},
		removePost() {
			if(confirm('Are you sure?')) {
				db.collection('posts').where('post_id', '==', this.$route.params)
			}
		}
	}
}
</script>

<style lang="scss" scoped>

.details {
	width: 100%;

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

		&__right-side {
			display: flex;
			align-items: center;

				.nav__link {
					margin-right: 10px;
					text-decoration: none;
					color: #000;
					transition: all .2s ease-in-out;
					font-weight: bold;

						&:hover {
							color: #5ad0ca;
						}
				}

				.nav__hello {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					.nav__name {
						order: 2;
						margin: 0;
						display: none;
					}

					.nav__avatar {
						width: 60px;
						margin: 0;
						order: 1;
					}
				}
		}
	}

	.details__item {
		background: #fff;
	}

	&__back {
		text-decoration: none;
		color: #000;
		transition: all .2s ease-in-out;

		&:hover {
			color: #43b1ab;
		}
	}

	&__icons {
	// position: absolute;
	display: flex;
	justify-content: center;
	bottom: 10px;
	left: 0;
	right: 0;

	.details__edit {
		text-decoration: none;
		color: #5556ee;
		font-size: 16px;
		font-weight: bold;
		margin: 0 10px;
		transition: all .2s ease-in-out;

		&:hover {
			color: #3939c0;
		}
	}

	.details__remove {
		border-radius: 5px;
		border: none;
		background-color: #5556ee;
		color: #fff;
		font-size: 16px;
		margin: 0 10px;
		cursor: pointer;
		transition: all .2s ease-in-out;

		&:hover {
			color: #fff;
			background-color: #3939c0;
		}
	}

		.details__icon {
			text-decoration: none;
			color: #5556ee;
			margin: 0 30px;
			text-align: right;
			transition: all .2s ease-in-out;

			&:hover {
				color: #3939c0;
			}
		}
	}
}

</style>