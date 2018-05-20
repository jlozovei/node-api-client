<template>
	<footer class="footer">
		<p>With <icon name="heart" color="#c51e1e"></icon> by <a :href="url" target="_blank" rel="noopener">jlozovei</a> | &copy; {{year}}</p>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	data() {
		return {
			url: 'https://jlozovei.github.io/',
			year: new Date().getFullYear()
		}
	}
}
</script>
