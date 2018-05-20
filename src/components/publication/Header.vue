<template>
	<div class="publication__header">
		<a v-if="author !== ''" :href="`https://github.com/${author}`" target="_blank" rel="noopener">{{ author | hasAuthor }}</a>
		<p v-else class="anonymous">{{ author | hasAuthor }}</p>
		<p class="publication__date">{{ date | dateFormat }}</p>
	</div>
</template>

<script>
import moment from 'moment'

export default {
	name: 'Header',
	props: ['author', 'date'],
	filters: {
		dateFormat(timestamp) {
			return moment(timestamp).format('DD/MM/YYYY, hh:mm')
		},

		hasAuthor(author) {
			if (author === '') return 'Anonymous and misterious'
			else return author
		}
	}
}
</script>
