<template>
	<div>{{ posts }}</div>
</template>

<script>
import db from '../components/firebaseInit.js';

export default {
	name: 'Dashboard',
	data() {
		return {
			posts: [],
		}
	},
	created() {
		db.collection('posts').get().then(querySnapshot => {
			querySnapshot.forEach(doc => {
				const data = {
					'id': doc.id,
					'author': doc.data().author,
					'createdAd': doc.data().createdAt,
					'description': doc.data().description,
					'title': doc.data().title
				}
				this.posts.push(data);
			})
		})
	}
}
</script>

<style>

</style>