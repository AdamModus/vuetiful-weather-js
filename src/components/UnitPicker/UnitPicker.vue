<template>
  <v-btn-toggle dense mandatory>
    <v-btn text value="Celsius" @click="unitPicked('CELSIUS')"> C </v-btn>
    <v-btn text value="Fahrenheit" @click="unitPicked('FAHRENHEIT')"> F </v-btn>
  </v-btn-toggle>
</template>

<style scoped></style>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'UnitPicker',

  computed: {
    ...mapState({
      unit: state => state.temperatureUnit.unit,
    }),
  },

  methods: {
    ...mapActions(['setTemperatureUnit']),

    unitPicked(pickedUnit) {
      if (this.unit === pickedUnit) {
        return;
      }
      this.setTemperatureUnit(pickedUnit);
    },
  },
};
</script>
