<template>
  <v-card>
    <v-card-text>
      <v-col
        class="text-center weather-icon"
        v-bind:class="weatherIconId"
        cols="12"
      >
      </v-col>
      <p class="text-center weather-description">
        {{ forecast.description }}
      </p>

      <p class="text-center">
        Min temperature: {{ minTemperature }}° {{ tempUnit.charAt(0) }}
      </p>
      <p class="text-center">
        Max temperature: {{ maxTemperature }}° {{ tempUnit.charAt(0) }}
      </p>
      <p class="text-center">
        Average temperature: {{ avgTemperature }}° {{ tempUnit.charAt(0) }}
      </p>
      <p class="text-center">Humidity: {{ forecast.humidity }}</p>
      <p class="text-center">Pressure: {{ forecast.pressure }} mbar</p>
      <p class="text-center">Cloud coverage: {{ forecast.cloudiness }}%</p>
      <p class="text-center">Wind speed: {{ windSpeedKmph }} km/h</p>

      <p class="text-center">
        Wind direction: {{ forecast.windDirection }}° ({{
          this.cardinalDirection
        }})
        <v-icon :style="windRotationCSS">mdi-arrow-up</v-icon>
      </p>
    </v-card-text>
  </v-card>
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
  name: 'DayForecast',

  props: {
    forecast: Object,
  },

  computed: {
    ...mapState({
      tempUnit: state => state.temperatureUnit.unit,
    }),
    weatherIconId() {
      return services.mapOWMCodeToIconClass(this.forecast.iconId);
    },
    cardinalDirection() {
      return services.getWindCardinalDirection(this.forecast.windDirection);
    },
    windSpeedKmph() {
      return services.mpsTokmph(this.forecast.windSpeed);
    },
    minTemperature() {
      return services.convertTemperature(
        this.tempUnit,
        this.forecast.minTemperature
      );
    },
    maxTemperature() {
      return services.convertTemperature(
        this.tempUnit,
        this.forecast.maxTemperature
      );
    },
    avgTemperature() {
      return services.convertTemperature(
        this.tempUnit,
        this.forecast.avgTemperature
      );
    },
    windRotationCSS() {
      return services.getWindRotationCSS(this.forecast.windDirection);
    },
  },
};
</script>
