import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import LoginView from './components/LoginView.vue'
import router from './router';

// import "./assets/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css'
const app = createApp(App);
app.use(createPinia());
app.use(router);

app.component('Login',LoginView)
app.mount('#app');

// const app1 = createApp(LoginView);
// app1.mount('#global')