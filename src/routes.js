import HomePage from "./components/pages/HomePage.vue";
import LoginPage from "./components/pages/LoginPage.vue";
import SignupPage from "./components/pages/SignupPage.vue";
import UserPage from "./components/pages/UserPage.vue";
import AddSmartphone from "./components/user/AddSmartphone.vue";
import EditSmartphonePage from "./components/pages/EditSmartphonePage.vue";
import CardSmartphone from "../Card/CardSmartphone.vue";
import SmartphoneDetail from "./components/detail/SmartphoneDetail.vue";
import CheckoutSmartphone from "../Card/CheckoutSmartphone.vue";
import TransaksiUser from "./components/user/TransaksiUser.vue";

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
  {
    path: "/user/EditSmartphone/:id",
    name: "editsmartphone",
    component: EditSmartphonePage,
  },
  {
    path: "/user/CardSmartphone/card",
    name: "cardsmartphone",
    component: CardSmartphone,
  },
  {
    path: "/user/Smartphone/:id",
    name: "smartphonedetail",
    component: SmartphoneDetail,
  },
  {
    path: "/user/Smartphone",
    name: "checkoutsmartphone",
    component: CheckoutSmartphone,
  },
  {
    path: "/user/transaction-history",
    name: "transaksiuser",
    component: TransaksiUser,
  },

];
