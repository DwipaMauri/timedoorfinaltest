import HomePage from "./components/pages/HomePage.vue";
import LoginPage from "./components/pages/LoginPage.vue";
import SignupPage from "./components/pages/SignupPage.vue";
import UserPage from "./components/pages/UserPage.vue";
import AddSmartphone from "./components/user/AddSmartphone.vue";

export const routes = [
  { path: "/", name: "homePage", component: HomePage },
  { path: "/signup", name: "signup", component: SignupPage },
  { path: "/login", name: "login", component: LoginPage },
  {
    path: "/user/:component",
    name: "userPage",
    component: UserPage,
  },
  {
    path: "/user/my-smartphone/add",
    name: "addsmartphone",
    component: AddSmartphone,
  },
];
