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
    },
    {
      path: "/introduce",
      name: "introduce",
      component: () => import('../views/Introduce.vue'),
    },
    {
      path: "/process",
      name: "process",
      component: () => import('../views/Process.vue'),
    },
    {
      path: "/result",
      name: "result",
      component: () => import('../views/Result.vue'),
    },
    {
      path: "/*",
      redirect: "/home"
    },
  ]
})

export default router
