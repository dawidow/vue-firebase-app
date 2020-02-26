import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  router.beforeEach((to, from, next) => {
	  if(to.matched.some(record => record.meta.requiresAuth)) {
		  if(!firebase.auth().currentUser) {
			  next({
				  path: '/login',
				  query: {
					  redirect: to.fullPath
				  }
			  })
		  }
	  }
  })
})

export default router