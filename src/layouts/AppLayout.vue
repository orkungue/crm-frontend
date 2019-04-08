<template>
  <v-app light>
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app dark mobile-break-point=400>
    <v-list>
        <v-list-tile
          v-for="item in appItems"
          :key="item.title"
          :to="item.path">
            <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
    </v-list>
    </v-navigation-drawer>
    <v-toolbar app :clipped-left="clipped">
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
    <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field prepend-icon="search" hide-details single-line  label="Search..." loading=true></v-text-field>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat @click="open=true"><v-icon>chat</v-icon></v-btn>
        <v-btn flat @click="openFavorite=true"><v-icon>favorite</v-icon></v-btn>
        <v-btn flat><v-icon>notifications</v-icon></v-btn>
        <v-btn flat><v-icon>settings</v-icon></v-btn>
  <v-menu offset-y>
    <v-btn flat slot="activator"><v-icon>account_circle</v-icon></v-btn>
    <v-list
      v-for="item in faceItems"
      :key="item.title">
      <div flat left dark><a v-bind:href="''+ item.path +''"><v-icon style="float: left;">{{ item.icon }}</v-icon> {{ item.title }}</a></div>
    </v-list>
  </v-menu>
</v-toolbar-items>
    </v-toolbar>
    <v-content>
      <vue-modaltor  :visible="open" @hide="hideModal" :animation-panel="'modal-slide-right'" :bg-overlay="'white'">
         <chat/>
       </vue-modaltor>
       <vue-modaltor  :visible="openFavorite" @hide="hideModal" :animation-panel="'modal-slide-right'" :bg-overlay="'white'">
          <favorite/>
        </vue-modaltor>

      <div v-if="loading" class="page_progressbar">
        <v-progress-circular :size="180" :width="12" indeterminate color="primary">Loading</v-progress-circular>
      </div>

    <transition name="component-fade" mode="out-in" v-else>
      <router-view :key="this.$route.path"></router-view>
    </transition>
    </v-content>
    <v-footer :fixed="fixed" app>
      <v-flex xs12 py-10 text-xs-center style="">
      &copy;2018 — <strong>OG</strong>
    </v-flex>
    <v-flex xs0 py-10 text-xs-right >
    <v-menu open-on-hover top offset-y>
     <v-icon slot="activator" x-large>
       more_horiz
     </v-icon>
     <v-list>
       <v-list-tile
         v-for="action in this.$store.state.action_definitions"
         :key="action.uuid"
       >
         <v-list-tile-title>{{action.name}}</v-list-tile-title>
       </v-list-tile>

     </v-list>
    </v-menu>
       </v-flex>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      miniVariant: true,
      right: false,
      rightDrawer: false,
      title: 'Home',
      open: false,
      openFavorite: false,
      appItems: [
        { title: 'Home', path: '/home/show', icon: 'home' },
        { title: 'Bugs', path: '/redmine/edit', icon: 'bug_report' },
        { title: 'Customer', path: '/customer/list', icon: 'assignment_ind' },
        { title: 'Documents', path: '/document/list', icon: 'insert_drive_file' },
        { title: 'Mails', path: '/mail/list', icon: 'email' }
      ],
      menuItems: [
        { title: 'Chat', path: '/chat', icon: 'chat' },
        { title: 'Notifications', path: '/notifications', icon: 'notifications' },
        { title: 'Settings', path: '/settings', icon: 'settings' }
      ],
      faceItems: [
        { title: 'Settings', path: '/custom_settings', icon: 'build' },
        { title: 'Logout', path: '/', icon: 'power_settings_new' }
      ]
    }
  },
  computed: {
    appTitle () {
      return this.$store.state.appTitle
    }
  },
  methods: {
    hideModal() {
      this.open = false;
      this.openFavorite = false;
    },
    logout() {
      Store.user.isAuth = false
      localStorage.removeItem('access-token')
      localStorage.removeItem('client')
      localStorage.removeItem('uid')
      localStorage.removeItem('token-type')
      router.push({ name: 'Home' })
    }
  },
  name: 'App'
}
</script>
<style>
  .component-fade-enter-active,
  .component-fade-leave-active {
    transition: all 0.3s ease;
  }

  .component-fade-enter,
  .component-fade-leave-to {
    opacity: 0;
    /*transform: translate(500px);*/
    transform: translateX(100px) translateY(1px);
    /*transform: perspective(17px);*/
  }
  .page_progressbar{
    margin: 0 auto;
    vertical-align: middle;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  html, body {margin: 0; height: 100%;}
  </style>
