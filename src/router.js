import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/pages/Home.vue'
import ResumeExperience from './views/pages/ResumeExperience.vue'
import ResumeSkills from './views/pages/ResumeSkills.vue'
import ResumeEducation from './views/pages/ResumeEducation.vue'
import ResumeOthers from './views/pages/ResumeOthers.vue'


Vue.use(Router)

export default new Router({
  mode: 'history', //http://localhost:8080/contact, SEO friendly
  //mode: 'hash',    http://localhost:8080/#/contact 
  routes: [
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (projects.[hash].js) for this route
      // which is lazy-loaded when the route is visited.

      component: () => import('./views/pages/Home.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (projects.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "projects" */ './views/pages/Projects.vue')
      }
    },
    {
      path: '/resume',
      name: 'resume',
      // route level code-splitting
      // this generates a separate chunk (resume.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "resume" */ './views/pages/Resume.vue')
      },
      children: [
        {
          path: '/resume/experience',
          component: ResumeExperience
        },
        {
          path: '/resume/skills',
          component: ResumeSkills
        },
        {
          path: '/resume/education',
          component: ResumeEducation
        },
        {
          path: '/resume/others',
          component: ResumeOthers
        },
        {
          path: '',
          redirect: '/resume/experience'
        }
      ]
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (resume.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "contact" */ './views/pages/Contact.vue')
      }
    },
    {
      path: '/',
      redirect: '/contact' //将默认路径改为'/contact'
    }
  ]
})
