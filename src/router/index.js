import { createRouter, createWebHistory } from "vue-router";
import index from "../pages/index.vue";
import home from "../pages/home.vue";
import slug from "../pages/slug.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: index },
    { path: "/home", component: home },
    { path: "/detail/:slug", component: slug },
  ],
});
