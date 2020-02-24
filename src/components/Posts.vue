<template>
	<div class="post">
		<h3 class="post__title"> {{  post.title }}</h3>
		<p class="post__author">{{ post.author }}</p>
		<p class="post__description">{{ post.description }}</p>
		<router-link  to="" class="post__details">See details →</router-link>
		<div class="post__icons">
			<router-link to="" class="post__icon post__edit">&#9998; edit</router-link>
			<router-link to="" class="post__icon post__remove">&#10007; delete</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Posts',
	props: [ 'post']
}
</script>

<style lang="scss" scoped>

.post {
	padding: 10px;
	background-color: #fff;
	margin: 10px;
	border-radius: 10px;
	box-shadow: 0 1px 4px 0 rgba(0,108,91,.24);
	position: relative;

	&__title, &__author, &__description, &__details {
		text-align: left;
		width: 95%;
		padding: 5px;
		margin: 5px 0 5px 30px;
	}

	&__author {
		color: #9c9c9c;
	}

	&__description {
		margin: 25px auto 5px;
		width: 90%;
		text-align: left;
		margin: 25px 30px 5px;
	}

	&__details {
		text-decoration: none;
		color: #5556ee;
		text-align: left;
		transition: all .2s ease-in-out;
		font-size: .9em;
		display: block;
		margin-bottom: 50px;

		&:hover {
			color: #3939c0;
		}
	}

	&__icons {
		// position: absolute;
		display: flex;
		justify-content: center;
		bottom: 10px;
		left: 0;
		right: 0;

		.post__icon {
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