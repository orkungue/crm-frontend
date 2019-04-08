<template>
  <v-app>
    <component :is="layout"></component>
  </v-app>
</template>

<script>
const default_layout = 'default';

export default {
  computed: {
    /* FÜR LAYOUT MULTI
    layout () {
      return this.$store.getters.layout
    }
  },
  components: {
    'app-layout': AppLayout,
    'simple-layout': SimpleLayout
    // define as many layouts you want for the application
  }
  */
  layout (){
    return (this.$route.meta.layout || default_layout) + '-layout';
  }
},  methods: {
    logout () {
      Store.user.isAuth = false
      localStorage.removeItem('access-token');
      localStorage.removeItem('client');
      localStorage.removeItem('uid');
      localStorage.removeItem('token-type');
      router.push({ name: 'Home' });
    }
  }
}
</script>
