<template>
	<div class="publication__footer">
		<div class="publication__stars" @click="star({ id: id, stars: stars })">
			<icon name="star" color="#e6b716"></icon>
			<p>{{ stars | hasStars }}</p>
		</div>
		<div class="publication__report" @click="report({ id: id, reports: reports })">
			<p>{{ this.strings.publications.actions.seeLess }}</p>
		</div>
	</div>
</template>

<script>
import strings from '@/utils/strings'

export default {
	name: 'Footer',
	props: ['id', 'stars', 'reports'],
	data() {
		return {
			strings: strings
		}
	},
	methods: {
		star(publication) {
			publication.stars = publication.stars > 0 ? publication.stars + 1 : 1

			this.$emit('star', publication)
		},

		report(publication) {
			publication.reports = publication.reports > 0 ? publication.reports + 1 : 1
			this.$emit('report', publication)
		}
	},
	filters: {
		hasStars(stars) {
			if (stars > 0) return stars
			else return ''
		}
	}
}
</script>
