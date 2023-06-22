import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/contactView.vue";
import jordanDeatails from "../views/jordanDetails.vue";
import bagView from "../views/bagView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/:id",
      name: "jordanDeatils",
      component: jordanDeatails,
      props: true,
    },
    {
      path: "/bag",
      name: "bag",
      component: bagView,
    },
  ],
});

export default router;
