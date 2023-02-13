import App from '@/App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from '~pages';
import { createI18n, useI18n } from 'vue-i18n';
import { createHead } from '@vueuse/head';
import pt_br from '@/locales/pt_br.json';

import '@/style.css';
import '@/assets/stylus/__colors.styl';
import '@/assets/stylus/__spacing.styl';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

generatedRoutes.push({ path: '/:catchAll(.*)', redirect: '404' });
const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(generatedRoutes),
});

const i18n = createI18n({
  legacy: true,
  allowComposition: true,
  locale: 'pt_br',
  messages: {
    pt_br: pt_br,
  },
});

export default i18n;

const pinia = createPinia();
const head = createHead();
const app = createApp(App);

app.use(i18n);
app.use(pinia);
app.use(head);
app.use(router);
app.use(vuetify);
app.mount('#app');
