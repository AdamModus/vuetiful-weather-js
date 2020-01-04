<template>
  <v-container v-if="currentWeather">
    <v-row>
      <v-col cols="12" sm="6">
        <v-card class="fill-height">
          <v-col class="text-center" cols="12">
            It is {{ this.temperature }}° {{ this.tempUnit.charAt(0) }}
            <br />
            and it feels like {{ this.feelsTemperature }}°
            {{ this.tempUnit.charAt(0) }}
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
      <v-col cols="12" sm="6">
        <v-card class="fill-height d-flex align-center text-center">
          <v-card-text>
            <p>Humidity: {{ this.currentWeather.humidity }}</p>
            <p>Pressure: {{ this.currentWeather.pressure }} mbar</p>
            <p>Cloud coverage: {{ this.currentWeather.cloudiness }}%</p>
            <p>Wind speed: {{ this.windSpeedKmph }} km/h</p>
            <p>
              Wind direction: {{ this.currentWeather.windDirection }}° ({{
                this.cardinalDirection
              }})
              <v-icon :style="windRotationCSS">mdi-arrow-up</v-icon>
            </p>
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
  font-size: 5rem;
}
.weather-description {
  text-transform: capitalize;
}
</style>

<script>
import { mapState } from 'vuex';
import services from '@/services/index';

export default {
  name: 'CurrentWeather',

  computed: {
    ...mapState({
      currentWeather: state => state.forecast.currentWeatherForecast,
      tempUnit: state => state.temperatureUnit.unit,
      city: state => state.location.city,
    }),
    weatherIconId() {
      return services.mapOWMCodeToIconClass(this.currentWeather.iconId);
    },
    cardinalDirection() {
      return services.getWindCardinalDirection(
        this.currentWeather.windDirection
      );
    },
    windSpeedKmph() {
      return services.mpsTokmph(this.currentWeather.windSpeed);
    },
    temperature() {
      return services.convertTemperature(
        this.tempUnit,
        this.currentWeather.temperature
      );
    },
    feelsTemperature() {
      return services.convertTemperature(
        this.tempUnit,
        this.currentWeather.feelsTemperature
      );
    },
    windRotationCSS() {
      return services.getWindRotationCSS(this.currentWeather.windDirection);
    },
  },
};
</script>
