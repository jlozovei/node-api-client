<template>
	<div id="app">
		<Header />
		<router-view/>
		<Footer />
	</div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600');

* {
	font-family: 'Montserrat', arial;
	box-sizing: border-box;
}

@import './assets/css/_base';
</style>

<script>
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default {
	name: 'App',
	components: { Header, Footer }
}
</script>
