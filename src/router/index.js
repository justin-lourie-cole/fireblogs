import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import CreatePost from "../views/CreatePost.vue";
import Admin from "../views/Admin.vue";
import Profile from "../views/Profile.vue";
import BlogPreview from "../components/BlogCoverPreview.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: { name: "home" } },
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
  }, {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "Login",
    }
  }, {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      title: "Register",
    }
  }, {
    path: "/forgot-password",
    name: "forgotPassword",
    component: ForgotPassword,
    meta: {
      title: "Forgot Password",
    }
  }, {
    path: "/createPost",
    name: "createPost",
    component: CreatePost,
    meta: {
      title: "Create Post",
    }
  }, {
    path: "/admin",
    name: "admin",
    component: Admin,
    meta: {
      title: "Admin",
    }
  }, {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      title: "Profile",
    }
  }, {
    path: "/create-post",
    name: "CreatePost",
    component: CreatePost,
    meta: {
      title: "Create Post",
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    path: "/post-preview",
    name: "BlogPreview",
    component: BlogPreview,
    meta: {
      title: "Preview Blog Post",
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  // {
  //   path: "/view-blog/:blogid",
  //   name: "ViewBlog",
  //   component: ViewBlog,
  //   meta: {
  //     title: "View Blog Post",
  //     requiresAuth: false,
  //   },
  // },
  // {
  //   path: "/edit-blog/:blogid",
  //   name: "EditBlog",
  //   component: EditBlog,
  //   meta: {
  //     title: "Edit Blog Post",
  //     requiresAuth: true,
  //     requiresAdmin: true,
  //   },
  // },
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
