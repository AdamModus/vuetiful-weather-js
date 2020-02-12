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
    <v-content class="main-content" v-bind:style="bgStyle">
      <router-view />
    </v-content>
    <!-- End of actual app content -->
  </v-app>
</template>

<style scoped>
.main-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-image: var(--bg-image);
  filter: blur(8px);
}
</style>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState({
      isDarkTheme: state => state.theme.isDark,
      currentWeather: state => state.forecast.currentWeatherForecast,
    }),
    ...mapGetters({
      bgStyle: 'backgroundStyle',
    }),
  },
  data: () => ({
    drawer: false, // Hide mobile side menu by default
  }),
  watch: {
    isDarkTheme() {
      this.$vuetify.theme.dark = this.isDarkTheme;
    },
    currentWeather() {
      this.fetchBackgroundImage(this.currentWeather.description);
    },
  },
  methods: {
    ...mapActions(['switchTheme', 'fetchBackgroundImage']),
    themeButtonClicked() {
      this.switchTheme(this.isDarkTheme);
    },
  },
};
</script>
