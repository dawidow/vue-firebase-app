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
			<h2 class="main__welcome">Welcome on your dashboard!</h2>
			<div class="main__wall">
				<Posts v-for="(post, index) in posts" :key="post.id" :post="post"/>
			</div>
		</section>
		<section class="summary">
			<h3 class="summary__info">Summary of your wall</h3>
			<div class="summary__box">
				<p class="summary__text">Number of posts <p class="summary__text--number">{{ posts.length }}</p></p>
			</div>
			<div class="summary__box">
				<p class="summary__text">Current date <p class="summary__text--number">{{ getDate }}</p></p>
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
	computed: {
		getDate() {
			let today = new Date();
			let dd = String(today.getDate()).padStart(2, '0');
			let mm = String(today.getMonth() + 1).padStart(2, '0');
			let yyyy = today.getFullYear();

			return today = mm + '/' + dd + '/' + yyyy;
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
	padding-bottom: 70px;
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
		z-index: 4;

		&:hover {
			background-color: #43b1ab;
		}
	}

	.summary {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 90%;
		margin: 10px auto;

		&__info {
			color: rgb(75, 75, 75);
		}

		&__box {
			width: 95%;
			padding: 30px 0;
			margin: 10px 0;
			background-image: linear-gradient(to right bottom, #87eeeb 0%, #369c9c 99%, #369c9c 100%);
			border-radius: 10px;
			font-weight: bold;
			position: relative;
			overflow: hidden;
			color: #fff;
			font-size: 1.2em;
			box-shadow: 0 1px 4px 0 rgba(0,108,91,.24);

			.summary__text {
				position: relative;
				z-index: 2;
				font-weight: bold;

				&--number {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -120%);
					font-size: 2.5em;
					color: rgba(255, 255, 255, 0.3);
					z-index: 1;
				}
			}
		}

		.summary__box:nth-child(odd) {
				background-image: linear-gradient(to right bottom, #a7b0f3 0%, #5556ee 99%, #5556ee 100%);

				&__text--number {
					color: rgba(255, 255, 255, 0.2);
				}
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

	.summary {
		display: flex;
		width: 90%;
		flex-direction: row !important;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;

		&__info {
			flex-basis: 100%;
		}

		&__box {
			flex-basis: 49%;
		}
	}
}

</style>