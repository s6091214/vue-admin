import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
      redirect: "/dashboard",
      children: [
        {
          path: "dashboard",
          name: "Dashboard",
          component: () => import("@/views/Dashboard.vue"),
          meta: { title: "Dashboard", breadcrumb: ["home"] },
        },
        {
          path: "documentation",
          name: "Documentation",
          component: () => import("@/views/Documentation.vue"),
          meta: {
            title: "Documentation",
            breadcrumb: ["home", "documentation"],
          },
        },
        {
          path: "backendReference",
          name: "BackendReference",
          component: () => import("@/views/BackendReference.vue"),
          meta: {
            title: "Backend Reference",
            breadcrumb: ["home", "backendReference"],
          },
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/404.vue"),
    },
  ],
});

export default router;
