<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="text-center">
        <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
          Reset password
        </h1>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          enter new password
        </p>
        <p v-if="msg" class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {{ msg }} 
            </p>
      </div>

      <div class="mt-5">
        <!-- Form -->
        <form @submit.prevent="resetpassword()">
          <div class="grid gap-y-4">
            <!-- Form Group -->
            <div>
              <label
                for="password"
                class="block text-sm mb-2 dark:text-white text-center"
                >new password</label
              >
              <div class="relative">
                <input
                  type="text"
                  id="password"
                  name="password"
                  class="width:300px"
                  v-model="newpassword"
                />
              </div>
            </div>
            <div>
              <label
                for="confirm-password"
                class="block text-sm mb-2 dark:text-white text-center"
                >confirm password</label
              >
              <div class="relative">
                <input
                  type="text"
                  id="confirm-password"
                  name="confirm-password"
                  class="width:300px"
                  v-model="confirmpassword"
                />
              </div>
            </div>
            <!-- End Form Group -->

            <button type="submit" class="btn btn-primary">
              Reset Password
            </button>
          </div>
        </form>
        <!-- End Form -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      newpassword: "",
      confirmpassword: "",
      msg:''
    };
  },
  methods: {
    async resetpassword(){
      try{
     if( this.newpassword===this.confirmpassword){
      const {data}=await axios.post(`https://backend-scratchup.onrender.com/auth/reset-password/${this.$route.params.userId}/${this.$route.params.token}`,{
          password:this.newpassword
      });
       this.msg=data.message;
       this.$router.push('/login');
    }
    else{
      this.msg ="password must be same";
    }}
    catch (error) {
    // Handle the error here
    console.error('An error occurred during the password reset:', error);
    this.msg = 'An error occurred during the password reset. Please try again.';
  }
    }
  },
};
</script>
