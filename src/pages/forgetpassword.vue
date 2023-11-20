<template>
 <div class="row">
    <div class="col-md-6 offset-md-3">
          <div class="text-center">
            <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
             All Good. Enter your Account's Email Adress and we will send you a link to reset your password </p>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Remember your password?
              <a class="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="../examples/html/signin.html">
                Sign in here
              </a>
            </p>
          </div>

          <div class="mt-5">
            <!-- Form -->
            <form>
              <div class="grid gap-y-4 ">
                <!-- Form Group -->
                <div>
                  <label for="email" class="block text-sm mb-2 dark:text-white text-center">Email address</label>
                  <div class="relative">
                    <input type="email" id="email" name="email" class="width:300px">
                    
                  </div>
                
                </div>
                <!-- End Form Group -->

                <button type="submit" class="btn btn-primary">Send link</button>
              </div>
            </form>
            <!-- End Form -->
          </div>
        </div>
      </div>
   
</template>
<script>
export default {};
</script>