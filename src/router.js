import { createRouter, createWebHistory } from "vue-router";
import login from './pages/SignIn.vue';
import signup from './pages/signup.vue';
import home from './pages/home.vue';
import forgetpassword from './pages/forgetpassword.vue';
import resetpassword from './pages/resetpassword.vue'
const routes=[
        { path: '', component: home },
        { path: '/login', component: login, meta: { auth: false } },
        { path: '/signup', component: signup, meta: { auth: false } },
        { path: '/forgetpassword', component: forgetpassword, meta: { auth: false } },
        { path: '/reset-password/:userId/:token', component: resetpassword, meta: { auth: false } },
    ]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router;