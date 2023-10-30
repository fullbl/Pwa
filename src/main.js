import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Application from "@/layouts/Application.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Dashboard from "@/views/application/Dashboard.vue";
import AddEntry from "@/views/application/AddEntry.vue";
import MyPlannedEntries from "@/views/application/MyPlannedEntries.vue";
import AddPlannedEntry from "@/views/application/AddPlannedEntry.vue";
import PayeeList from "@/views/application/PayeeList.vue";
import MyEntries from "@/views/application/MyEntries.vue";
import ImportEntries from "@/views/application/ImportEntries.vue";
import SearchEntries from "@/views/application/SearchEntries.vue";
import EntriesResume from "@/views/application/EntriesResume.vue";

// settings layout

import Profile from "@/views/settings/Profile.vue";
import Settings from "@/views/settings/Settings.vue";
import Wallet from "@/views/settings/Wallet.vue";
import Category from "@/views/settings/Category.vue";

// views for Auth layout
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
import RecoveryPassword from "@/views/auth/RecoveryPassword.vue";
import ResetPassword from "@/views/auth/ResetPassword.vue";
import AuthConfirm from "@/views/auth/Confirm.vue";

// views without layouts

import Landing from "@/views/Landing.vue";
// import Index from "@/views/Index.vue";

// routes

const routes = [
  {
    path: "/app",
    redirect: "/app/dashboard",
    name: 'app',
    component: Application,
    children: [
      {
        path: "/app/dashboard",
        component: Dashboard,
      },
      {
        path: "/app/add_entry",
        name: 'add_entry',
        component: AddEntry,
      },
      {
        path: "/app/add_planned_entry",
        name: 'add_planned_entry',
        component: AddPlannedEntry,
      },
      {
        path: "/app/planned-entries",
        name: 'planned-entries',
        component: MyPlannedEntries,
      },
      {
        path: "/app/payee",
        name: 'payee',
        component: PayeeList,
      },

      {
        path: "/app/entries",
        component: MyEntries,
      },
      {
        path: "/app/import",
        component: ImportEntries,
      },
      {
        path: "/app/search",
        component: SearchEntries,
      },

      {
        path: "/app/see_all/:type",
        component: EntriesResume,
      },
    ],
  },

  {
    path: "/app/settings",
    component: Admin,
    children: [
      {
        path: "/app/settings",
        component: Settings,
      },
      {
        path: "/app/settings/wallet",
        component: Wallet,
      },
      {
        path: "/app/settings/category",
        component: Category,
      },
      {
        path: "/app/settings/profile",
        component: Profile,
      },
    ]
  },

  {
    path: "/auth",
    name: "auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
      {
        path: "/auth/recovery-password",
        component: RecoveryPassword,
      },
      {
        path: "/auth/reset-password/:token",
        component: ResetPassword,
      },
      {
        path: "/auth/confirm/:token",
        component: AuthConfirm,
      }
    ],
  },
  {
    path: "/landing",
    component: Landing,
  },
  {
    path: "/",
    redirect: "/app/dashboard",
  },
  { path: "/:pathMatch(.*)*", redirect: "/app" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router)
app.mount("#app")