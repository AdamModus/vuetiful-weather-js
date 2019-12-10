<template>
  <div>
    <h1 class="owf owf-800"></h1>
    <v-tabs center-active v-if="this.sixteenDayForecast">
      <v-tab v-for="(day, index) in this.sixteenDayForecast" v-bind:key="index">
        {{ day.dateString }}
      </v-tab>
    </v-tabs>
  </div>
</template>

<style scoped></style>

<script>
import { mapState } from 'vuex';
import store from '../../store';

export default {
  name: 'ForecastAggregator',
  computed: {
    ...mapState({
      sixteenDayForecast: state => state.forecast.sixteenDayWeatherForecast,
    }),
  },
};
</script>
