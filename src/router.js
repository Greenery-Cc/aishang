import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/home',
        name: 'home',
        component: () =>
            import ('./views/home/')
    }, {
        path: '/cart',
        name: 'cart',
        component: () =>
            import ('./views/buyCart/')
    }, {
        path: '*',
        redirect: '/home'
    }]
})