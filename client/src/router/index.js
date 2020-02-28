import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Register from '../views/Register'
import Landing from '../views/Landing'
import Dashboard from '../views/Dashboard'
import CreateProfile from '../views/CreateProfile'
import EditProfile from '../views/EditProfile'
import Profiles from '../views/Profiles'
import Profile from '../views/Profile'
import AddEducation from '../views/AddEducation'
import AddExperience from '../views/AddExperience'
import Feed from '../views/Feed'
import Post from '../components/post/Post'
Vue.use(VueRouter)

const routes = [
  {
    path:'*',
    redirect:'/'
  },{
    path: '/',
    name: 'landing',
    component: Landing
  },{
    path: '/login',
    name: 'login',
    component: Login
  },{
    path: '/register',
    name: 'register',
    component: Register
  },{
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },{
    path: '/create-profile',
    name: 'create-profile',
    component: CreateProfile
  },{
    path: '/edit-profile',
    name: 'edit-profile',
    component: EditProfile
  },{
    path: '/profiles',
    name: 'profiles',
    component: Profiles
  },{
    path: '/profile/:handle',
    name: 'profile',
    component: Profile
  },{
    path: '/add-experience',
    name: 'add-experience',
    component: AddExperience
  },{
    path: '/add-education',
    name: 'add-education',
    component: AddEducation
  },{
    path: '/feed',
    name: 'feed',
    component: Feed
  },{
    path: '/post/:id',
    name: 'post',
    component: Post
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  const isLogin=localStorage.getItem('ele_login')?true:false
  if(to.path=='/login'||to.path=='/register'){
    next()
  }else{
    isLogin?next():next('/login')
  }
})
export default router
