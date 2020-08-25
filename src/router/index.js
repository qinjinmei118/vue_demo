import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('@/components/login/Login')
const Home=()=>import('@/views/home/Home')
import WelCome from '../components/WelCome'
import Main from '../components/Main'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login'
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/welcome',
    component:WelCome
  },
  {
   path:'/home',
    component:Home,
    redirect:'/main',
    children:[
      {
        path:'/main',
        component:Main,

      }
    ]
  }

]

const router = new VueRouter({
  mode:'history',
  routes
})
//挂载导航守卫，判断用户是否登录，并赋予权限
router.beforeEach((to,from,next)=>{
  if(to.path==='/login'){
    //放行
    return next();
  }
  const token=window.sessionStorage.getItem('token')
  if(token){
    next();
  }else{
    //强制跳转
    return next('/login')
  }
})
export default router
