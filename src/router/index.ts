import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'LandingPage',
		component: LandingPage,
	},
	// {
	// 	path: '/about',
	// 	name: 'About',
	// 	component: () =>
	// 		import('../views/About.vue'),
	// }
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
