<template>
  <thenavigation />
  <TheLoader v-if="showLoading"/>
  <div class="container preline-ui">
      <div class="row">
          <div class="col-md-12">
              <div>
                  <router-view></router-view>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import thenavigation from './components/thenavigation.vue';
import { mapState } from 'vuex';
import { AUTO_LOGIN_ACTION } from './store/storeconstants';
import { defineAsyncComponent } from 'vue';

const TheLoader = defineAsyncComponent(() =>
  import( './components/TheLoader.vue'),
);
export default {
  name: 'App',
  computed: {
      ...mapState({
          showLoading: (state) => state.showLoading,
          autoLogout: (state) => state.auth.autoLogout,
      }),
  },

  watch: {
      autoLogout(curValue, oldValue) {
          if (curValue && curValue != oldValue) {
              this.$router.replace('/login');
          }
      },
  },
  components: {
      thenavigation,
      TheLoader
  },
  created() {
      this.$store.dispatch(`auth/${AUTO_LOGIN_ACTION}`);
  },
};
</script>