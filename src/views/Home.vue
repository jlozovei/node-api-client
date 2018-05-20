<template>
	<div class="wrapper">
		<Form />
		<Feed :publications="publications" />
	</div>
</template>

<script>
import Form from '@/components/Form'
import Feed from '@/components/Feed'

export default {
	name: 'Home',
	data() {
		return {
			publications: [
				{
					id: 1,
					message: "Hi there! This is a fancy publication, don't you think?",
					author_github: 'jlozovei',
					created_at: 1526783666456,
					stars: 1,
					reports: 0
				},
				{
					id: 2,
					message:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida nunc vel eros luctus, eget euismod eros posuere. Integer pulvinar est non erat sodales, a lobortis metus sodales.',
					author_github: '',
					created_at: 1526785364374,
					stars: 10,
					reports: 0
				}
			]
		}
	},
	components: { Form, Feed }
}
</script>
