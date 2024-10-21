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
          meta: { breadcrumb: [{ title: "home", path: "/" }] },
        },
        {
          path: "documentation",
          name: "Documentation",
          component: () => import("@/views/Documentation.vue"),
          meta: {
            breadcrumb: [
              { title: "home", path: "/" },
              { title: "documentation", path: "/documentation" },
            ],
          },
        },
        {
          path: "backendReference",
          name: "BackendReference",
          component: () => import("@/views/BackendReference.vue"),
          meta: {
            breadcrumb: [
              { title: "home", path: "/" },
              { title: "backendReference", path: "/backendReference" },
            ],
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
