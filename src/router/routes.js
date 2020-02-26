import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import SeeDetails from '../views/SeeDetails.vue'
import PostEdit from '../views/PostEdit.vue'

export default [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/login', name: 'Login', component: Login, meta: { requiresGuest: true }  },
	{ path: '/register', name: 'Register', component: Register, meta: { requiresGuest: true }  },
	{ path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: { requiresAuth: true } },
	{ path: '/dashboard/:post_id', name: 'SeeDetails', component: SeeDetails, meta: { requiresAuth: true } },
	{ path: '/dashboard/edit/:post_id', name: 'PostEdit', component: PostEdit, meta: { requiresAuth: true }  }
]