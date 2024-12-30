import { createRouter, createWebHistory } from "vue-router";
import Home from "../Page/User/Home/HomeUser.vue";
import UserTemplate from "../template/userTemplate/UserTemplate.vue";
import PageMore from "../Page/More/PageMore.vue";
import HomeAdmin from "../Page/Admin/HomeAdmin.vue";

const routes = [
  {
    path: "/",
    component: UserTemplate,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "trang-chu",
        component: Home,
      },
    ],
  },
  {
    path: "/admin",
    component: UserTemplate,
    children: [
      {
        path: "",
        component: HomeAdmin,
      },
      {
        path: "trang-chu-quan-tri",
        component: HomeAdmin,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: PageMore,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
