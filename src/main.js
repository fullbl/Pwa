process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app
import App from "@/App.vue";

// translations
import { createI18n } from 'vue-i18n'
import translations from "@/i18n/translations.vue"

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
import Budgets from "@/views/application/Budgets.vue";
import AddBudgets from "@/components/Cards/Settings/CardAddBudget.vue";

// settings layout

import Profile from "@/views/settings/Profile.vue";
import Settings from "@/views/settings/Settings.vue";
import Wallet from "@/views/settings/Wallet.vue";
import WalletCard from "@/views/settings/Cards/WalletCard.vue";
import Category from "@/views/settings/Category.vue";
import CategoryCard from "@/views/settings/Cards/CategoryCard.vue";
import Label from "@/views/settings/Label.vue";
import LabelCard from "@/views/settings/Cards/LabelCard.vue";
import Currency from "@/views/settings/Currency.vue";
import Model from "@/views/settings/Model.vue";
import ModelCard from "@/views/settings/Cards/ModelCard.vue";
import Assistance from "@/views/settings/Assistance.vue";
import AboutUs from "@/views/settings/AboutUs.vue";

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
        path: "/app/entry/:entry_id",
        name: 'edit_entry',
        component: AddEntry,
      },

      {
        path: "/app/entry",
        name: 'entry',
        component: AddEntry,
      },
      {
        path: "/app/planned_entry/:entry_id",
        name: 'planned_entry',
        component: AddPlannedEntry,
      },
      {
        path: "/app/planned_entry",
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
        path: "/app/budgets",
        component: Budgets,
      },

      {
        path: "/app/budgets/new",
        component: AddBudgets,
      },


      {
        path: "/app/budgets/edit/:id",
        component: AddBudgets,
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
        path: "/app/settings/wallet/edit/:id",
        component: WalletCard,
      },
      {
        path: "/app/settings/wallet/edit/",
        component: WalletCard,
      },
      {
        path: "/app/settings/category",
        component: Category,
      },
      {
        path: "/app/settings/category/edit/:id/:subId",
        component: CategoryCard,
      },

      {
        path: "/app/settings/label",
        component: Label,
      },
      {
        path: "/app/settings/label/edit/:id",
        component: LabelCard,
      },
      {
        path: "/app/settings/category/edit/",
        component: CategoryCard,
      },
      {
        path: "/app/settings/currency/",
        component: Currency,
      },
      {
        path: "/app/settings/currency/add",
        component: Currency,
      },
      {
        path: "/app/model/:entry_id",
        component: ModelCard,
      },
      {
        path: "/app/settings/model/add",
        component: ModelCard,
      },
      {
        path: "/app/settings/model/",
        component: Model,
      },
      {
        path: "/app/settings/profile",
        component: Profile,
      },
      {
        path: "/app/settings/assistance",
        component: Assistance,
      },
      {
        path: "/app/settings/about-us",
        component: AboutUs,
      },
    ]
  },

  {
    path: "/app/auth",
    name: "auth",
    redirect: "/app/auth/login",
    component: Auth,
    children: [
      {
        path: "/app/auth/login",
        component: Login,
      },
      {
        path: "/app/auth/register",
        component: Register,
      },
      {
        path: "/app/auth/recovery-password",
        component: RecoveryPassword,
      },
      {
        path: "/app/auth/reset-password/:token",
        component: ResetPassword,
      },
      {
        path: "/app/auth/confirm/:token",
        component: AuthConfirm,
      }
    ],
  },
  {
    path: "/app/landing",
    component: Landing,
  },
  { path: "/:pathMatch(.*)*", redirect: "/app" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


console.debug(translations)
// language settings
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'it',
  messages: translations,
})

const app = createApp(App);
// languages
app.use(i18n)
app.use(router)
app.mount("#app")