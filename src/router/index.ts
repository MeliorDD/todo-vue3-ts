import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainView from "../views/MainView.vue";
import TodoPage from "../views/TodoPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "MainView",
    component: MainView,
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
