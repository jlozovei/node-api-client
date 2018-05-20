<template>
	<footer class="footer">
		<p>With <icon name="heart" color="#c51e1e"></icon> by <a :href="url" target="_blank" rel="noopener">jlozovei</a> | &copy; {{year}}</p>
	</footer>
</template>

<style lang="scss" scoped>
.footer {
	border-top: 1px solid #ccc;
	text-align: center;
	margin-top: 2rem;
}
</style>

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
