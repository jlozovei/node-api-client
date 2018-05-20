import api from './api'

export default {
	getPublications() {
		return api().get('/')
	},

	createPublication(payload) {
		return api().post('/', payload)
	},

	starPublication(payload) {
		return api().put(`/stars/${payload.id}`, payload)
	},

	reportPublication(payload) {
		return api().put(`/report/${payload.id}`, payload)
	}
}
