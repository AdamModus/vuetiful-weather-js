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
      <v-col cols="12" md="6">
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

<style scoped></style>

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
