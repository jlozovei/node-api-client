import axios from 'axios'
import * as keys from './keys'

export default () => {
	return axios.create({
		baseURL: `${keys.LOCAL_BASE_URL}`,
		headers: {
			'X-Access-Token': `${keys.BASIC_TOKEN}`
		}
	})
}
