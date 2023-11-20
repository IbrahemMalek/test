<template>
     <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="text-left">
        <h3 class="text-xl font-semibold mb-4">Sign In</h3>
        <div class="relative">
          <hr class="my-2 w-1/3 mx-5 border-t-2 border-gray-300" />
        </div>
      </div>
      <div class="alert alert-danger" v-if="error">
        {{ error }}
      </div>
      <form @submit.prevent="onLogin()">
        <div class="form-group mx-5">
          <label>Email</label>
          <input type="text" class="form-control  " v-model.trim="email" />
          <div class="error" v-if="errors.email">{{ errors.email }}</div>
        </div>
        <div class="form-group mx-5" style="position: relative;">
            <label>Password</label>
            <div  >
              <input
                type="password"
                id="password"
                name="password"
                ref="password"
                class="form-control"
                v-model.trim="password"
                style="flex:1"
              />
              <span
                class="eye-icon"
                @click="togglePasswordVisibility"
                style="
                float: right;
                       margin-left: -25px;
                       margin-top: -25px;
                       position: relative;
                      cursor: pointer;
                      color: #4a5568;"
                       >
                <font-awesome-icon :icon="showPassword ? 'eye' : 'eye-slash'" />
              </span>
         
            <div class="error" v-if="errors.password">
              {{ errors.password }}
            </div>
          </div>
          <router-link style="float:right" to="/forgetpassword">forgot password</router-link>
          
        </div>
        <div class=" my-3 mx-5 ">
          <button type="submit" class="btn btn-primary w-full">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>


import { mapActions, mapMutations } from 'vuex';
import SignupValidations from '../services/SignupValidation';
import {
    LOADING_SPINNER_SHOW_MUTATION,
    LOGIN_ACTION,
} from '../store/storeconstants';
export default {
   
    data() {
        return {
            email: '',
            password: '',
            errors: [],
            error: '',
            showPassword:false
        };
    },
    methods: {
      togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      const passwordInput = this.$refs.password;

      if (this.showPassword) {
        passwordInput.type = "text";
      } else {
        passwordInput.type = "password";
      }
    },
        ...mapActions('auth', {
            login: LOGIN_ACTION,
        }),
        ...mapMutations({
            showLoading: LOADING_SPINNER_SHOW_MUTATION,
        }),
        async onLogin() {
            let validations = new SignupValidations(
                this.email,
                this.password,
            );

            this.errors = validations.checkValidations();
            if (this.errors.length) {
                return false;
            }
            this.error = '';

            this.showLoading(true);
            //Login check
            try {
                await this.login({
                    email: this.email,
                    password: this.password,
                });
            } catch (e) {
                this.error = e;
                this.showLoading(false);
            }

            this.showLoading(false);
            this.$router.push('/posts');
        },
    },
};
</script>
