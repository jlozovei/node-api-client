<template>
	<div class="publication__body">
		<p class="publication__message">{{ message }}</p>
	</div>
</template>

<script>
export default {
	name: 'Body',
	props: ['message']
}
</script>
