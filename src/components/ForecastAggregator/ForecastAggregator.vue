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
          <v-card-text>{{ day }}</v-card-text>
          <v-card-text
            ><p>Humidity: {{ day.humidity }}</p>
            <p>Pressure: {{ day.pressure }} mbar</p>
            <p>Cloud cover: {{ day.cloudiness }}%</p>
            <p>Wind speed: {{ getWindSpeedKmph(day.windSpeed) }} km/h</p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<style scoped></style>

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
    }),
  },
  methods: {
    getClass(icon) {
      return services.mapOWMCodeToIconClass(icon);
    },
    getWindSpeedKmph(windSpeed) {
      return services.mpsTokmph(windSpeed);
    },
  },
};
</script>
