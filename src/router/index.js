import Vue from 'vue';
import Router from 'vue-router';

import ContinuousActivity from '@/components/ContinuousActivity';
import Home from '@/components/Home';
import Login from '@/components/Login';
import Register from '@/components/Register';
import Project from '@/components/Project';
import Sprint from '@/components/Sprint';
import Task from '@/components/Task';

import store from '@/core'

Vue.use(Router)



function requireAuth (to, from, next) {
  if (store.state.token == null || store.state.toke == '') {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    { path: '/logout',
        beforeEnter (to, from, next) {
          auth.logout()
          next('/login')
        }
    },
    {
	    path: '/continuous_activity',
      name: ContinuousActivity,
	    component: ContinuousActivity,
      beforeEnter: requireAuth
    },
    {
      path: '/project',
      name: 'Project',
      component: Project,
      beforeEnter: requireAuth
    },
    {
      path: '/sprint',
      name: 'Sprint',
      component: Sprint,
      beforeEnter: requireAuth
    },
    {
      path: '/task',
      name: 'Task',
      component: Task,
      beforeEnter: requireAuth
    },    
    {
      path: '*',
      redirect: '/',
    }
  ]
})
