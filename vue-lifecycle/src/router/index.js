import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/hook",
      name: "LifecycleHook",
      component: () => import("../views/LifecycleHook.vue"),
    },
    {
      path: "/watch",
      name: "WatchTest",
      component: () => import("../views/WatchTest.vue"),
    },
    {
      path: "/multi",
      name: "MultiComponentApp",
      component: () => import("../views/MultiComponentApp.vue"),
    },
    {
      path: "/one",
      name: "OneComponentApp",
      component: () => import("../views/OneComponentApp.vue"),
    },
  ],
});

export default router;
