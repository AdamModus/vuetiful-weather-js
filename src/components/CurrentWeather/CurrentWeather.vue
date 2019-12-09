<template>
  <v-container v-if="currentWeather.temperature">
    <v-row>
      <v-col cols="12">
        <h3>Current weather</h3>
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-col cols="6">
            <div class="owf owf-5x" v-bind:class="weatherIconId"></div>
            <div>{{ this.currentWeather.description.toLowerCase() }}</div>
          </v-col>
          <v-col cols="3">
            <div>
              {{ this.temperature + ' ' + this.tempUnit.charAt(0) }}
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <p>Humidity: {{ this.currentWeather.humidity }}</p>
        <p>Pressure: {{ this.currentWeather.pressure }} mbar</p>
        <p>Wind speed: {{ this.currentWeather.windSpeed }} m/s</p>
        <p>Cloud cover: {{ this.currentWeather.cloudiness }}%</p>
      </v-col>

      <div class="tempelement">
        <h1>JSON</h1>
        <p>{{ currentWeather }}</p>
      </div>
    </v-row>
  </v-container>
</template>

<style scoped>
.tempelement {
  position: absolute;
  bottom: 50px;
}
</style>

<script>
import Vue from 'vue';
import { mapState, mapGetters } from 'vuex';
import store from '../../store';

export default {
  name: 'CurrentWeather',

  computed: {
    ...mapState({
      currentWeather: state => state.forecast.currentWeatherForecast,
      tempUnit: state => state.temperatureUnit.unit,
    }),
    ...mapGetters({
      temperature: 'convertedCurrentTemperature',
    }),
    weatherIconId() {
      if (this.currentWeather.iconId) {
        return 'owf-' + this.currentWeather.iconId;
      }
      return '';
    },
  },
};
</script>
