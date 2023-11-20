import { createApp } from 'vue';
// main.js or main.ts
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add the Font Awesome icons you want to use to the library
library.add(faEye, faEyeSlash);

// Register the Font Awesome component globally
import './assets/styles/main.css';
import vue3GoogleLogin from 'vue3-google-login'
import App from './App.vue';
import router from'./router';
import store from './store/store';
const app=createApp(App);
app.use(router);
app.use(store);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(vue3GoogleLogin, {
    clientId: '324239998425-glcr0dva0la8fu5hjgtqc31e2v2o21kb.apps.googleusercontent.com'
  })
app.mount('#app');

