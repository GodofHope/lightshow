/*
 * @Author: Mr.Hope
 * @Description: 路由配置文件
 * @Date: 2019-03-25 12:27:33
 */
import Home from "@/views/Home.vue";
import Page404 from "@/views/Page404.vue";
import Vue, { VueConstructor } from "vue";

const route = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/HD",
    name: "HDVideio",
    props: { base: process.env.BASE_URL },
    /*
     * 路由级别的代码分割
     * this generates a separate chunk (about.[hash].js) for this route
     * which is lazy-loaded when the route is visited.
     */
    component: () => import("@/views/HD.vue"),
  },
  {
    path: "*",
    name: "404",
    meta: { title: "未找到界面" },
    component: Page404,
  },
];

export default route;
