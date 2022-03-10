import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: () => import('../views/Home.vue'),
      meta: { transition: 'haodai' }
    },
    {
      path: "/introduce",
      name: "introduce",
      component: () => import('../views/Introduce.vue'),
      meta: { transition: 'haodai' }
    },
    {
      path: "/process",
      name: "process",
      component: () => import('../views/Process.vue'),
      meta: { transition: 'haodai' }
    },
    {
      path: "/result",
      name: "result",
      component: () => import('../views/Result.vue'),
      meta: { transition: 'haodai' }
    },
    {
      path: "/*",
      redirect: "/home"
    },
  ]
})

export default router
