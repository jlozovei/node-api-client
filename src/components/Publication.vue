<template>
	<li class="publication" :data-id="id">
		<Header :author="author" :date="date" />

		<Body :message="message" />

		<Footer :id="id" :stars="stars" :reports="reports" />
	</li>
</template>

<script>
import Header from '@/components/publication/Header'
import Body from '@/components/publication/Body'
import Footer from '@/components/publication/Footer'

export default {
	name: 'Publication',
	components: { Header, Body, Footer },
	props: ['id', 'message', 'date', 'author', 'stars', 'reports']
}
</script>
