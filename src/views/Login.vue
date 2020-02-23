<template>
	<div>
		<nav class="nav">
				<router-link to="/">
					<img class="nav__logo" src="../assets/logo.png" alt="Logotype">
				</router-link>
				<router-link class="nav__link" to="/">&larr; Back to home-page</router-link>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'Login',
}
</script>

<style lang="scss" scoped>

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

</style>