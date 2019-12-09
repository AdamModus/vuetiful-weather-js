<template>
  <div>
    <h1>current weather json</h1>
    <h1 class="owf owf-800"></h1>
    {{ currentWeather }}
    <h1>Current Weather Visual</h1>
    <h1 class="owf" v-bind:class="weatherIconId"></h1>
  </div>
</template>

<style scoped></style>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import store from '../../store';

export default {
  name: 'CurrentWeather',

  computed: {
    ...mapState({
      currentWeather(state) {
        return state.forecast.currentWeatherForecast;
      },
    }),
    weatherIconId() {
      if (this.currentWeather && this.currentWeather.iconId) {
        return 'owf-' + this.currentWeather.iconId;
      }
      return '';
    },
  },
};
</script>
