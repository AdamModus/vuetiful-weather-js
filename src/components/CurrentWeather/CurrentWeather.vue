<template>
  <v-container v-if="currentWeather">
    <v-row>
      <v-col cols="6">
        <v-card class="fill-height">
          <v-col class="text-center" cols="12">
            It is {{ this.temperature }}º {{ this.tempUnit.charAt(0) }}
          </v-col>
          <v-col
            class="text-center weather-icon"
            v-bind:class="weatherIconId"
            cols="12"
          >
          </v-col>
          <v-col class="weather-description text-center" cols="12">
            {{ this.currentWeather.description.toLowerCase() }}
          </v-col>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="fill-height">
          <v-card-text>
            <p>Humidity: {{ this.currentWeather.humidity }}</p>
            <p>Pressure: {{ this.currentWeather.pressure }} mbar</p>
            <p>Wind speed: {{ this.currentWeather.windSpeed }} m/s</p>
            <p>Cloud cover: {{ this.currentWeather.cloudiness }}%</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.fill-height {
  height: 100%;
}
.weather-icon {
  font-size: 10vh;
}
.weather-description {
  text-transform: capitalize;
}
</style>

<script>
import { mapState, mapGetters } from 'vuex';
import services from './../../services/index';

export default {
  name: 'CurrentWeather',

  computed: {
    ...mapState({
      currentWeather: state => state.forecast.currentWeatherForecast,
      tempUnit: state => state.temperatureUnit.unit,
      city: state => state.location.city,
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
