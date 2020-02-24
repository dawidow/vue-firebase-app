<template>
	<div class="dashboard">
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
		<section class="main">
			<h2 class="main__welcome">Welcome .. on your dashboard!</h2>
			<div class="main__wall">
				<Posts v-for="(post, index) in posts" :key="post.id" :post="post"/>
			</div>
		</section>
		<div @click="openModal" class="add-btn">Add new post.</div>
		<Modal v-if="modalIsOpen === true" @closeModal="closeModal"/>
	</div>
</template>

<script>
import db from '../components/firebaseInit.js';
import Posts from '../components/Posts';
import Modal from '../components/Modal';

export default {
	name: 'Dashboard',
	components: {
		Posts,
		Modal
	},
	data() {
		return {
			posts: [],
			modalIsOpen: false,
		}
	},
	methods: {
		openModal() {
			this.modalIsOpen = true;
		},
		closeModal() {
			this.modalIsOpen = false;
		}
	},
	created() {
		db.collection('posts').get().then(querySnapshot => {
			querySnapshot.forEach(doc => {
				const data = {
					'id': doc.id,
					'author': doc.data().author,
					'createdAt': doc.data().createdAt,
					'description': doc.data().description,
					'title': doc.data().title
				}
				this.posts.push(data);
			})
		})
	}
}
</script>

<style lang="scss" scoped>

.dashboard {
	min-height: 100vh;
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

	.main {
		width: 90%;
		margin: 0 auto;

		&__welcome {
			width: 100%;
			text-align: center;
		}
	}

	.add-btn {
		position: fixed;
		bottom: 20px;
		right: 20px;
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

@media screen and (min-width: 980px) {
	.main {
		&__welcome {
			width: 100%;
			text-align: left !important;
		}
	}
}

</style>