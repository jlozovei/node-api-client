import axios from 'axios'
import * as keys from './keys'

const baseURL = process.env.NODE_ENV === 'local' ? keys.LOCAL_BASE_URL : keys.PROD_BASE_URL

export default () => {
	return axios.create({
		baseURL: baseURL,
		headers: {
			'X-Access-Token': `${keys.BASIC_TOKEN}`
		}
	})
}
