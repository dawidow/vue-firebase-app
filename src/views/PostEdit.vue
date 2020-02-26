<template>
	<div class="edit">
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
		<form class="edit__item">
			<input class="edit__title-input" placeholder="Type title" type="text" v-model="title">
			<input class="edit__author-input" placeholder="Type author" type="text" v-model="author">
			<input class="edit__description-input" placeholder="Type description" type="text" v-model="description">
			<input type="submit" @click="updatePost" class="edit__update" value="save">
		</form>
		<router-link  class="edit__back" to="/dashboard">&larr; Back to dashboard</router-link>
	</div>
</template>

<script>
import db from '../components/firebaseInit';

export default {
	name: 'PostEdit',
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
		updatePost(e) {
			e.preventDefault();

			db.collection('posts').where('post_id', '==', this.$route.params.post_id).get()
				.then(querySnapshot => {
					querySnapshot.forEach(doc => {
						doc.ref.update({
							post_id: this.post_id,
							title: this.title,
							author: this.author,
							description: this.description
						})
						.then(() => {
							this.$router.push('/dashboard/')
						})
					})
				})
		}
	}
}
</script>

<style lang="scss" scoped>
.edit {
	width: 100%;
	min-height: 100vh;
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

	&__item {
		width: 95%;
		margin: 0 auto;

		.edit__update {
			padding: 5px;
		}
	}

	&__back {
		text-decoration: none;
		color: #5556ee;
		transition: all .2s ease-in-out;

		&:hover {
			color: #43b1ab;
		}
	}
}
</style>