<template>
	<div class="publication__footer">
		<div class="publication__stars">
			<icon name="star" color="#e6b716"></icon>
			<p>{{ stars | hasStars }}</p>
		</div>
		<div class="publication__report">
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
	filters: {
		hasStars(stars) {
			if (stars > 0) return stars
			else return ''
		}
	}
}
</script>
