<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div>
        <div>
          <h3>Signup</h3>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Already have an account?

            <router-link
              class="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="/login"
              >sign in here</router-link
            >
          </p>
          <hr />
        </div>

        <div class="alert alert-danger" v-if="error">
          {{ error }}
        </div>
        <form @submit.prevent="onSignup()">
          <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" v-model.trim="email" />
            <div class="error" v-if="errors.email">
              {{ errors.email }}
            </div>
          </div>
          <div class="form-group" style="position: relative;">
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
            </div>
            <div class="error" v-if="errors.password">
              {{ errors.password }}
            </div>
          </div>

          <div class="my-3">
            <button type="submit" class="btn btn-primary" style="display: flex">
              Signup
            </button>
            <button @click="googleSignup"> Google signu up </button>
            <!-- <GoogleLogin
              style="display: flex"
              :callback="callback"
              :params="params"
              :onSuccess="onSuccess"
              :onFailure="onFailure"
            /> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import SignupValidations from "../services/SignupValidation";
import { mapActions, mapMutations } from "vuex";
import {
  LOADING_SPINNER_SHOW_MUTATION,
  SIGNUP_ACTION,
} from "../store/storeconstants";
export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      error: "",
      showPassword: false,
    };
  },
  beforeRouteLeave() {
    console.log("rote leaving");
    console.log(this.$store);
  },
  beforeRouteEnter(_, _1, next) {
    next((vm) => {
      console.log("route entering");
      console.log(vm.$store.state.auth);
    });
  },
  methods: {
    //here the function to toggle visibility of showing password
    googleSignup(){
      window.open(
      "https://backend-scratchup.onrender.com/auth/google/callback",
      "_self"
    );
      // fetch('https://backend-scratchup.onrender.com/auth/google/callback',{
      //   method:"GET"
      // });

    },

    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      const passwordInput = this.$refs.password;

      if (this.showPassword) {
        passwordInput.type = "text";
      } else {
        passwordInput.type = "password";
      }
    },
    // onSuccess(googleUser) {
    //   console.log(googleUser);

    //   // This only gets the user information: id, name, imageUrl and email
    //   console.log(googleUser.getBasicProfile());
    // },
    ...mapActions("auth", {
      signup: SIGNUP_ACTION,
    }),

    ...mapMutations({
      showLoading: LOADING_SPINNER_SHOW_MUTATION,
    }),
    callback(response) {
      // This callback will be triggered when the user selects or logs in to
      // their Google account from the popup
      console.log("Handle the response", response);
    },
    async onSignup() {
      let validations = new SignupValidations(this.email, this.password);

      this.errors = validations.checkValidations();
      if ("email" in this.errors || "password" in this.errors) {
        return false;
      }
      //make spinner true
      this.showLoading(false);
      //signup registration
      try {
        await this.signup({
          email: this.email,
          password: this.password,
        });
      } catch (error) {
        this.error = error;
        this.showLoading(false);
      }
      this.showLoading(false);
      //make spinner false
    },
  },
};
</script>

<style scoped>
#password {
  padding-right: 30px; /* Add space for the show/hide toggle button */
}

#toggle-password {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>
