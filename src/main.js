import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import Frame from "./pages/Frame.vue";
import Desktop from "./pages/Desktop.vue";
import Desktop1 from "./pages/Desktop1.vue";
import Contact from "./pages/Contact.vue";
import Services from "./pages/Services.vue";
import Desktop2 from "./pages/Desktop2.vue";
import Desktop3 from "./pages/Desktop3.vue";
import Desktop4 from "./pages/Desktop4.vue";
import Desktop5 from "./pages/Desktop5.vue";
import "./global.css";

const routes = [
  {
    path: "/",
    name: "Frame",
    component: Frame,
  },
  {
    path: "/desktop-2",
    name: "Desktop",
    component: Desktop,
  },
  {
    path: "/desktop-6",
    name: "Desktop1",
    component: Desktop1,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/desktop-4",
    name: "Desktop2",
    component: Desktop2,
  },
  {
    path: "/desktop-9",
    name: "Desktop3",
    component: Desktop3,
  },
  {
    path: "/desktop-10",
    name: "Desktop4",
    component: Desktop4,
  },
  {
    path: "/desktop-5",
    name: "Desktop5",
    component: Desktop5,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, _, next) => {
  const metaTitle = toRoute?.meta?.title;
  const metaDesc = toRoute?.meta?.description;

  window.document.title = metaTitle || "Portfolio";
  if (metaDesc) {
    addMetaTag(metaDesc);
  }
  next();
});

const addMetaTag = (value) => {
  const element = document.querySelector(`meta[name='description']`);
  if (element) {
    element.setAttribute("content", value);
  }
};

createApp(App).use(router).mount("#app");

export default router;
