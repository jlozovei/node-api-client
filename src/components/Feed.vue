<template>
	<ul class="feed list" v-if="publications.length > 0">
		<Publication v-for="publication in publications"
			:key="publication._id"
			:id="publication._id"
			:message="publication.message"
			:date="publication.created_at"
			:author="publication.author_github"
			:stars="publication.stars"
			:reports="publication.reports" />
	</ul>

	<div class="empty" v-else>
		<progressive-img src="https://media.giphy.com/media/EbGzxNByyIcve/giphy.gif" />
		{{ strings.publications.noData }}
	</div>
</template>

<style lang="scss">
.feed {
	display: block;
	position: relative;
	padding: 0;

	li {
		display: block;
		width: 100%;
		margin-bottom: 2rem;
		border: 1px solid #ccc;
		padding: 1rem;
	}
}
</style>

<script>
import strings from '@/utils/strings'
import Publication from '@/components/Publication'

export default {
	name: 'Feed',
	props: ['publications'],
	data() {
		return {
			strings: strings
		}
	},
	components: { Publication }
}
</script>
