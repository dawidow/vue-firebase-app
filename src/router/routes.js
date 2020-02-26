import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import SeeDetails from '../views/SeeDetails.vue'

export default [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/login', name: 'Login', component: Login },
	{ path: '/register', name: 'Register', component: Register },
	{ path: '/dashboard', name: 'Dashboard', component: Dashboard },
	{ path: '/dashboard/:post_id', name: 'SeeDetails', component: SeeDetails },
	// { path: '/dashboard/edit/:post_id' }
]