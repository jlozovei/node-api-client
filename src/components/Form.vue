<template>
	<form class="form" id="publication-form">
		<div class="form__row">
			<input type="text" id="form_author" name="author" class="form__input" autofocus v-model="publication.author_github" :placeholder="strings.inputs.author">
		</div>

		<div class="form__row">
			<textarea id="form_message" name="message" class="form__input" v-model="publication.message" :placeholder="strings.inputs.message" @keyup="validateMessage" @blur="validateMessage"></textarea>
			<p class="limiter">{{ this.validation.messageCurrent }}</p>
			<small :class="{'active': this.validation.errors.message != ''}">{{ this.validation.errors.message }}</small>
		</div>
		
		<div class="form__row form__row--buttons">
			<button type="button" class="button button--white button--cancel" @click="cleanForm">{{ this.strings.buttons.cancel }}</button>
			<button type="submit" class="button button--white button--confirm" @click="validateForm">{{ this.strings.buttons.send }}</button>
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
import PublicationService from '@/services/PublicationService'

import strings from '@/utils/strings'

export default {
	name: 'Form',
	data() {
		return {
			strings: strings,
			publication: {
				message: '',
				author_github: ''
			},

			validation: {
				messageLimit: 250,
				messageCurrent: 250,
				errors: {
					message: ''
				}
			}
		}
	},
	methods: {
		titleFocus() {
			document.getElementById('publication-form').classList.add('form--open')
		},

		validateMessage(event) {
			const { target } = event

			this.validation.messageCurrent = this.validation.messageLimit - target.value.length

			if (target.value.length > this.validation.messageLimit)
				document.querySelector('form .limiter').classList.add('highlight')
			else document.querySelector('form .limiter').classList.remove('highlight')

			if (target.value.length <= 0) this.validation.errors.message = 'Please insert a message'
			else if (target.value.length > 250) this.validation.errors.message = 'The length must be minor than 250'
			else this.validation.errors.message = ''
		},

		validateForm(event) {
			event.preventDefault()
			event.stopPropagation()

			if (this.validation.errors.message !== '' || this.publication.message == '') {
				document.getElementById('form_message').focus()
				return false
			} else {
				this.createPublication()
			}
		},

		cleanForm() {
			this.publication.message = ''
			this.publication.author_github = ''

			this.validation.messageCurrent = this.validation.messageLimit
		},

		async createPublication() {
			let timestamp = new Date().getTime(),
				publication = {
					message: this.publication.message,
					author_github: this.publication.author_github,
					created_at: timestamp,
					deleted_at: '',
					gif_url: '',
					stars: 0,
					reports: 0
				}

			const response = await PublicationService.createPublication(publication)

			if (response && response.data) {
				this.$emit('getPublications')
				this.cleanForm()
			} else {
				console.log('bad lucky for u')
			}
		}
	}
}
</script>
