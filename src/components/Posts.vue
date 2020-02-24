<template>
	<div class="post">
		<h3 class="post__title"> {{  post.title }}</h3>
		<p class="post__author">{{ post.author }}</p>
		<p class="post__description">{{ post.description }}</p>
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
	background-color: #ececec;
	margin: 10px;
	border-radius: 10px;

	&__title, &__author, &__description {
		text-align: left;
		width: 95%;
		margin: 5px auto;
	}

	&__description {
		margin: 25px auto 5px;
	}
}

</style>