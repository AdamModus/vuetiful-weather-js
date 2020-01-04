<template>
  <div>
    <v-tabs center-active v-if="this.sixteenDayForecast" v-model="tab">
      <v-tab v-for="day in this.sixteenDayForecast" v-bind:key="day.dateString">
        <div>
          <div v-bind:class="getClass(day.iconId)"></div>
          <div>{{ day.dateString }}</div>
        </div>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="day in this.sixteenDayForecast"
        v-bind:key="day.dateString"
      >
        <v-card>
          <v-card-text>
            <v-col
              class="text-center weather-icon"
              v-bind:class="getWeatherIconId(day.iconId)"
              cols="12"
            >
            </v-col>
            <p class="text-center weather-description">
              {{ day.description }}
            </p>
            <p class="text-center">
              Min temperature: {{ convertTemperature(day.minTemperature) }}°
              {{ tempUnit.charAt(0) }}
            </p>
            <p class="text-center">
              Max temperature: {{ convertTemperature(day.maxTemperature) }}°
              {{ tempUnit.charAt(0) }}
            </p>
            <p class="text-center">
              Average temperature: {{ convertTemperature(day.avgTemperature) }}°
              {{ tempUnit.charAt(0) }}
            </p>
            <p class="text-center">Humidity: {{ day.humidity }}</p>
            <p class="text-center">Pressure: {{ day.pressure }} mbar</p>
            <p class="text-center">Cloud coverage: {{ day.cloudiness }}%</p>
            <p class="text-center">
              Wind speed: {{ getWindSpeedKmph(day.windSpeed) }} km/h
            </p>
            <p class="text-center">
              Wind direction: {{ day.windDirection }}° ({{
                getCardinalDirection(day.windDirection)
              }})
              <v-icon :style="getWindRotationCSS(day.windDirection)"
                >mdi-arrow-up</v-icon
              >
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<style scoped>
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
  name: 'ForecastAggregator',

  data() {
    return { tab: null };
  },
  computed: {
    ...mapState({
      sixteenDayForecast: state => state.forecast.sixteenDayWeatherForecast,
      tempUnit: state => state.temperatureUnit.unit,
    }),
  },
  methods: {
    getClass(icon) {
      return services.mapOWMCodeToIconClass(icon);
    },
    getWindSpeedKmph(windSpeed) {
      return services.mpsTokmph(windSpeed);
    },
    getCardinalDirection(windDegrees) {
      return services.getWindCardinalDirection(windDegrees);
    },
    getWindRotationCSS(degrees) {
      return services.getWindRotationCSS(degrees);
    },
    convertTemperature(tempK) {
      return services.convertTemperature(this.tempUnit, tempK);
    },
    getWeatherIconId(iconId) {
      return services.mapOWMCodeToIconClass(iconId);
    },
  },
};
</script>
