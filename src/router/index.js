import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import( '../views/Home')
const Category = () => import( '../views/category/Category')
const Detail = () => import( '../views/detail/Detail')
const Profile = () => import( '../views/profile/Profile')
const ShopCart = () => import( '../views/shopcart/ShopCart')
const routes = [
  {
    path: '',
    name: 'DefaultHome',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
