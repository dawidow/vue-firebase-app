import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Toasted from 'vue-toasted'
import firebase from 'firebase'
import './components/firebaseInit'

Vue.use(Toasted)

Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(user => {
	if(!app) {
		app = new Vue({
			router,
			render: h => h(App)
			}).$mount('#app')
	}
})