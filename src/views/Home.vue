<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="10">
              <LocationInput></LocationInput>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="10">
              <UnitPicker></UnitPicker>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </v-card>
      </v-col>
      <v-col v-if="hasForecast" cols="12" md="6">
        <CurrentWeather></CurrentWeather>
      </v-col>
    </v-row>
    <v-row v-if="hasForecast">
      <v-col>
        <ForecastAggregator></ForecastAggregator>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>

<script>
import UnitPicker from '@/components/UnitPicker/UnitPicker';
import LocationInput from '@/components/LocationInput/LocationInput';
import ForecastAggregator from '@/components/ForecastAggregator/ForecastAggregator';
import CurrentWeather from '@/components/CurrentWeather/CurrentWeather';
import router from '@/router';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'home',
  components: {
    LocationInput,
    UnitPicker,
    CurrentWeather,
    ForecastAggregator,
  },
  computed: {
    ...mapState({
      hasForecast: state => state.forecast.currentWeatherForecast !== undefined,
    }),
  },

  methods: {
    ...mapActions(['setCity']),
  },

  mounted: function() {
    this.$nextTick(function() {
      // Code that will run only after the entire view has been rendered
      if (Object.keys(router.currentRoute.params).length !== 0) {
        const bookmarkedCity = router.currentRoute.params['id'];
        this.setCity(bookmarkedCity);
      }
    });
  },
};
</script>
