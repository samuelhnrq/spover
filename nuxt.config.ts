import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import type { ModuleOptions } from "nuxt-vuefire";

const nuxtConfig: ModuleOptions = {
  config: {
    apiKey: "AIzaSyCfzdOKMXKf_JDp3TviVY7uxHTFTteTT5A",
    authDomain: "spover-slva.firebaseapp.com",
    projectId: "spover-slva",
    storageBucket: "spover-slva.appspot.com",
    messagingSenderId: "487480971580",
    appId: "1:487480971580:web:00a5bcf20110f1b1b50e39",
    measurementId: "G-S4SB8EFJL0",
  },
  auth: {
    enabled: true,
    sessionCookie: true,
  },
  appCheck: {
    // Allows you to use a debug token in development
    debug: process.env.NODE_ENV !== "production",
    isTokenAutoRefreshEnabled: true,
    provider: "ReCaptchaEnterprise",
    // Find the instructions in the Firebase documentation, link above
    key: "6LdvJBUqAAAAADeDDHRzWIZbUALhiAb4IUvl9nKT",
  },
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    firebase: {
      gen: 2,
      nodeVersion: "20",
      httpsOptions: {
        region: "europe-west1",
        maxInstances: 3,
      },
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    ["nuxt-vuefire", nuxtConfig],
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  app: {
    head: {
      title: "Spover",
    },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
