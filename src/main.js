import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import progressiveImage from 'vue-progressive-image'

Vue.use(progressiveImage)
Vue.component('icon', Icon)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
