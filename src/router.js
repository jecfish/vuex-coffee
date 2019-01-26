
import Vue from 'vue'
import VueRouter from 'vue-router'
import AppCartPage from './components/pages/CartPage.vue'
import AppListPage from './components/pages/ListPage.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/menu',
            component: AppListPage
        },
        {
            path: '/cart',
            component: AppCartPage
        },
        {
            path: '/',
            redirect: '/menu'
        }
    ]
});