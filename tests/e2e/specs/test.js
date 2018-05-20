// https://docs.cypress.io/api/introduction/api.html

describe('PublicationHub UI Test', () => {
	beforeEach(() => {
		cy.visit('http://localhost:8080/')
	})

	it('Validate publication form', () => {
		cy.get('textarea[name=message]').focus()
		cy.get('button[type=submit]').click()

		cy.get('form .form__row small').should('have.class', 'active')
	})

	it('Creating a publication', () => {
		const msg = "This is a post using Cypress! Dont't be afraid of it."

		cy.get('input[name=author]').type('cypress-io')
		cy.get('textarea[name=message]').type(msg)
		cy.get('button[type=submit]').click()

		cy.contains('ul.feed li:first-child .publication__message', msg)
	})

	it('Staring a publication', () => {
		cy.get('ul.feed li:first-child .publication__stars').click()
		cy.contains('ul.feed li:first-child .publication__stars p', 1)
	})

	it('Reporting a publication', () => {
		cy.get('ul.feed').then($feed => {
			const first = $feed.find('li:first-child').data('id')

			cy.get('ul.feed li:first-child .publication__report').click()
			cy.expect($feed.find('li:first-child').data('id')).to.equal(first)
		})
	})
})
