import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";

Vue.use(VueRouter);

const routes = [
  {path: "/", redirect: { name: "home"}},
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      title: "Home",
    }
  },
  {
    path: "/blogs",
    name: "blogs",
    component: Blogs,
    meta: {
      title: "Blogs",
    }
  },{
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "Login",
    }
  },{
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      title: "Register",
    }
  },{
    path: "/forgot-password",
    name: "forgotPassword",
    component: ForgotPassword,
    meta: {
      title: "Forgot Password",
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | FutaBlogs`;
  next();
})

export default router;
