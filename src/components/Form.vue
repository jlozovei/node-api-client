<template>
	<form class="form" id="publication-form">
		<div class="form__row">
			<input type="text" id="form_author" name="author" class="form__input" autofocus v-model="publication.author_github" :placeholder="strings.inputs.author">
		</div>

		<div class="form__row">
			<textarea id="form_message" name="message" class="form__input" v-model="publication.message" :placeholder="strings.inputs.message"></textarea>
		</div>
		
		<div class="form__row form__row--buttons">
			<button type="button" class="button button--white button--cancel">{{ this.strings.buttons.cancel }}</button>
			<button type="submit" class="button button--white button--confirm">{{ this.strings.buttons.send }}</button>
		</div>
	</form>
</template>

<style lang="scss">
form {
	width: 100%;
	border: none;

	input,
	textarea {
		display: block;
		width: 100%;
		padding: 1rem;
		border: 1px solid #ccc;
		margin-bottom: 1rem;
	}

	button {
		display: inline-block;
		text-align: center;
		border: 1px solid #ccc;
	}
}
</style>

<script>
import strings from '@/utils/strings'

export default {
	name: 'Form',
	data() {
		return {
			strings: strings,
			publication: {
				message: '',
				author_github: ''
			}
		}
	}
}
</script>
