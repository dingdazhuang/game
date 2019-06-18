import VueRouter from 'vue-router'
import Vue from 'vue'
import Center from '../pages/Center'
import Draw from '../pages/Draw'

Vue.use(VueRouter)

const routes = [
  { path: '', component: Draw },
  { path: '/center', component: Center }
]

const router = new VueRouter({
  routes
})

export default router;