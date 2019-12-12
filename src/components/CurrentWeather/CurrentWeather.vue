<template>
  <v-container v-if="currentWeather">
    <v-row>
      <v-col cols="12">
        <h3>Current weather</h3>
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-col cols="6">
            <div v-bind:class="weatherIconId"></div>
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
    </v-row>
  </v-container>
</template>

<style scoped></style>

<script>
import { mapState, mapGetters } from 'vuex';
import store from '../../store';
import services from './../../services/index';

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
      return services.mapOWMCodeToIconClass(this.currentWeather.iconId);
    },
  },
};
</script>
