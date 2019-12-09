<template>
  <v-app>
    <!-- Start of toolbar -->
    <v-app-bar app>
      <v-btn icon @click="themeButtonClicked">
        <v-icon>mdi-invert-colors</v-icon>
      </v-btn>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetiful Weather</span>
        <span class="caption ml-2">Powered by Vue/tify</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/about">About</v-btn>
      </v-toolbar-items>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <!-- End of toolbar -->

    <!-- Start of mobile side menu -->
    <v-navigation-drawer app v-model="drawer" right>
      <v-list nav>
        <v-list-item-group>
          <v-list-item to="/">Home</v-list-item>
          <v-list-item to="/about">About</v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- End of mobile side menu -->

    <!-- Start of actual app content -->
    <v-content>
      <router-view />
    </v-content>
    <!-- End of actual app content -->
  </v-app>
</template>

<script>
import Vue from 'vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState({
      isDarkTheme: state => state.theme.isDark,
    }),
  },
  watch: {
    isDarkTheme() {
      this.$vuetify.theme.dark = this.isDarkTheme;
    },
  },
  methods: {
    ...mapActions(['switchTheme']),
    themeButtonClicked() {
      this.switchTheme(this.isDarkTheme);
    },
  },
  data: () => ({
    drawer: false, // Hide mobile side menu by default
  }),
};
</script>
