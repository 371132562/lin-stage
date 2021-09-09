import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes = [{ path: '/', component: () => import(/* webpackChunkName: "Index" */ '@/views/Index') }]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { top: 0, behavior: 'smooth' }
    }
})

router.beforeEach((to, from, next) => {
    // if (1) next()
    // else next()
    console.log(to)
    next()
})

export default router
