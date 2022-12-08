<template>
    <auth-cmp v-if="!$store.getters.GET_AUTH_STATE" />
    <user-cmp v-if="$store.getters.GET_AUTH_STATE" />
</template>

<script>

import AuthCmp from './components/pages/AuthCmp.vue'
import UserCmp from './components/pages/UserCmp.vue';

export default {
  name: 'App',
  components: {
    AuthCmp,
    UserCmp
  },

  setup() {

    return {

    }
  }
}
</script>

<style lang="scss">
@import '~/src/assets/styles/custom.scss';
body {
  margin: 0;
}

</style>
