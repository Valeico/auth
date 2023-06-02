import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vueCookies from 'vue-cookies';
import VueApexCharts from "vue3-apexcharts";
import './assets/main.css';
import './assets/main.css';
import './assets/n1Style.css';
// import VueSession from 'vue-session';

const app = createApp(App);

app.use(router);

app.use(vueCookies, {
    expires: '1d',
    // path: '/',
    // domain: '',
    // secure: '',
    // sameSite: ''
});

app.use(VueApexCharts);

// app.use(VueSession);

app.mount('#app');