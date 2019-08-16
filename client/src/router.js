import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Index from '@/components/home/Index'
import Student from '@/components/user/Student'
import Teacher from '@/components/user/Teacher'
import Access from '@/components/admin/Access'
import Role from '@/components/admin/Role'

Vue.use(Router)

const router = new Router ({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
			name: 'login',
			path: '/login',
			component: Login
		},
		{
			name: 'index',
			path: '/',
			component: Index,
			children: [
				{
					name: 'students',
					path: 'students',
					component: Student
				},
				{
					name: 'teachers',
					path: 'teachers',
					component: Teacher
				},
				{
					name: 'accesss',
					path: 'accesss',
					component: Access
				},
				{
					name: 'roles',
					path: 'roles',
					component: Role
				}
			]
		},
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
	const isLogin = localStorage.token
	if (to.path == '/login') {
		next()
	} else {
		isLogin ? next() : next('/login')
	}
}) 
export default router