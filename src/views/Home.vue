<template>
  <v-container>
    <v-row>
      <v-col align-self="center">
        <LocationInput></LocationInput>
        <UnitPicker></UnitPicker>
      </v-col>
      <v-col>
        <CurrentWeather></CurrentWeather>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <ForecastAggregator></ForecastAggregator>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
@import '../assets/owfont/css/owfont-regular.min.css';
</style>

<script>
import UnitPicker from '@/components/UnitPicker/UnitPicker';
import LocationInput from '@/components/LocationInput/LocationInput';
import ForecastAggregator from '@/components/ForecastAggregator/ForecastAggregator';
import CurrentWeather from '@/components/CurrentWeather/CurrentWeather';

export default {
  name: 'home',
  components: {
    LocationInput,
    UnitPicker,
    CurrentWeather,
    ForecastAggregator,
  },
};
</script>
