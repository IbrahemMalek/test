<template>
 <div class="row">
    <div class="col-md-6 offset-md-3">
          <div class="text-center">
            <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Reset password</h1>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
             enter new password </p>
           
          </div>

          <div class="mt-5">
            <!-- Form -->
            <form>
              <div class="grid gap-y-4 ">
                <!-- Form Group -->
                <div>
                  <label for="password" class="block text-sm mb-2 dark:text-white text-center">new password</label>
                  <div class="relative">
                    <input type="text" id="password" name="password" class="width:300px">
                    
                  </div>
                
                </div>
                <div>
                  <label for="confirm-password" class="block text-sm mb-2 dark:text-white text-center">confirm password</label>
                  <div class="relative">
                    <input type="text" id="confirm-password" name="confirm-password" class="width:300px">
                    
                  </div>
                
                </div>
                <!-- End Form Group -->

                <button type="submit" class="btn btn-primary">Reset Password</button>
              </div>
            </form>
            <!-- End Form -->
          </div>
        </div>
      </div>
   
</template>
<script>
export default {
  data(){
    return{
      password:''
    }
  }
};
</script>