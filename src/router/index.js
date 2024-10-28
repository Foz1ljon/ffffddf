import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
      component: () => import("../pages/mainpage.vue"),

      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("../views/home.vue"),
        },

        {
          path: "/product/news",
          name: "product-news",
          component: () => import("../views/product-news.vue"),
        },
        {
          path: "/product/electricity",
          name: "product-electricity",
          component: () => import("../views/product-electricity.vue"),
        },
        // {
        //   path: "/product/green-energy",
        //   name: "product-green-energy",
        //   component: () => import("../views/product-electricity.vue"),
        // },
        // {
        //   path: "/product/water",
        //   name: "product-water",
        //   component: () => import("../views/product-electricity.vue"),
        // },
        // {
        //   path: "/product/gas",
        //   name: "product-electricity",
        //   component: () => import("../views/product-electricity.vue"),
        // },
        // {
        //   path: "/product/heat",
        //   name: "product-heat",
        //   component: () => import("../views/product-electricity.vue"),
        // },
        // {
        //   path: "/product/configpro",
        //   name: "product-electricity",
        //   component: () => import("../views/product-electricity.vue"),
        // },
        // {
        //   path: "/product/scada",
        //   name: "product-scada",
        //   component: () => import("../views/product-electricity.vue"),
        // },
        // {
        //   path: "/product/for-edu-Purpose",
        //   name: "product-for-edu-Purpose",
        //   component: () => import("../views/product-electricity.vue"),
        // },
        {
          path: "/products/:id",
          name: "single-product",
          component: () => import("../views/single-product.vue"),
        },
      ],
    },

    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "NotFound",
    //   component: () => import("../pages/notfound.vue"),
    // },
  ],
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
});

export default router;
