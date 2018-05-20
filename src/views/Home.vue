<template>
	<div class="wrapper">
		<Form @getPublications="parentGetPublications" />
		<Feed :publications="publications" @getPublications="parentGetPublications" />
	</div>
</template>

<script>
import PublicationService from '@/services/PublicationService'

import Form from '@/components/Form'
import Feed from '@/components/Feed'

export default {
	name: 'Home',
	data() {
		return {
			publications: []
		}
	},
	components: { Form, Feed },
	mounted() {
		this.getPublications()
	},
	methods: {
		async getPublications() {
			const response = await PublicationService.getPublications()

			if (response && response.data) this.publications = response.data
			else console.error('no lucky for you')
		},

		parentGetPublications() {
			this.getPublications()
		}
	}
}
</script>
