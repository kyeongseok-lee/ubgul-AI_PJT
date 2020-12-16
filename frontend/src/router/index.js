import Vue from "vue";
import VueRouter from "vue-router";

import Main from "@/views/Main.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import ChatRoom from "@/views/ChatRoom.vue";
import Profile from "@/views/Profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/chatroom/:id",
    name: "ChatRoom",
    component: ChatRoom,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
