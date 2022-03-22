import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LayoutMain from "../layouts/LayoutMain.vue";
import TodoPage from "../views/TodoPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "LayoutMain",
    component: LayoutMain,
    children: [
      {
        path: ":id",
        name: "TodoPage",
        component: TodoPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
