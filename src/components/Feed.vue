<template>
	<ul class="feed list" v-if="publications.length > 0">
		<Publication v-for="publication in publications"
			:key="publication._id"
			:id="publication._id"
			:message="publication.message"
			:date="publication.created_at"
			:author="publication.author_github"
			:stars="publication.stars"
			:reports="publication.reports"
			@clickStar="receiveStar"
			@clickReport="receiveReport" />
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
import PublicationService from '@/services/PublicationService'

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
	methods: {
		receiveStar(payload) {
			this.starPublication(payload)
		},

		receiveReport(payload) {
			this.reportPublication(payload)
		},

		async searchPublications(payload) {
			const response = await PublicationService.searchPublications(payload)

			if (response && response.data) this.publications = response.data
			else console.error('no lucky for you')
		},

		async starPublication(payload) {
			const response = await PublicationService.starPublication(payload)

			if (response && response.data) this.$emit('getPublications')
			else console.error('no lucky for you')
		},

		async reportPublication(payload) {
			const response = await PublicationService.reportPublication(payload)

			if (response && response.data) this.$emit('getPublications')
			else console.log('no lucky for you')
		}
	},
	components: { Publication }
}
</script>
