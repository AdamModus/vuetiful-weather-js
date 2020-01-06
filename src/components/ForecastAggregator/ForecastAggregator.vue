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
        <DayForecast :forecast="day"></DayForecast>
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
import DayForecast from '@/components/DayForecast/DayForecast';
import { mapState } from 'vuex';
import services from '@/services/index';

export default {
  name: 'ForecastAggregator',
  components: {
    DayForecast,
  },

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
  },
};
</script>
