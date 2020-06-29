import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Index from '@/components/home/Index'
import Student from '@/components/user/Student'
import Teacher from '@/components/user/Teacher'
import CourseList from '@/components/student/CourseList'
import MyCourse from '@/components/student/MyCourse'
import AllCourse from '@/components/course/AllCourse'
import CourseStatistics from '@/components/course/CourseStatistics'

Vue.use(Router)

const router = new Router({
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
			redirect: '/allcourse',
			children: [
				{
					name: 'students',
					path: 'students',
					component: Student,
					meta: {
						roles: ["admin"]
					}
				},
				{
					name: 'teachers',
					path: 'teachers',
					component: Teacher,
					meta: {
						roles: ["admin"]
					}
				},
				{
					name: 'allcourse',
					path: 'allcourse',
					component: AllCourse,
					meta: {
						roles: ["admin"]
					}
				},
				{
					name: '/courselist',
					path: '/courselist',
					component: CourseList,
					meta: {
						roles: ["student", "teacher"]
					}
				},
				{
					name: '/mycourse',
					path: '/mycourse',
					component: MyCourse,
					meta: {
						roles: ["student"]
					}
				},
				{
					name: '/courseStatistics',
					path: '/courseStatistics',
					component: CourseStatistics,
					meta: {
						roles: ["student", "admin", "teacher"]
					}
				},
			]
		},
	]
})

// 路由守卫
router.beforeEach((to, from, next) => {
	const isLogin = localStorage.token
	const role = localStorage.identity
	if (to.path == '/login') {
		next()
	} else {
		if (isLogin) {
			if (to.meta.roles.includes(role)) {
				next();
			} else {
				// TODO 跳转到无权限页面
				alert('您没有权限访问该页面')
			}
		} else {
			next('/login')
		}
	}
})
export default router