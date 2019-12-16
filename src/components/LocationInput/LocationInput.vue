<template>
  <v-form @submit.prevent="submit">
    <v-text-field
      :rules="rules"
      label="Where are you?"
      v-model="inputCity"
    ></v-text-field>
  </v-form>
</template>

<style scoped></style>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'LocationInput',

  data: () => ({
    inputCity: '',
  }),

  computed: {
    ...mapState({
      storeCity: state => state.location.storeCity,
      locationValid: state => state.location.valid,
    }),
    rules() {
      if (this.locationValid) {
        return [];
      }
      return ['This location was not found'];
    },
  },

  watch: {
    storeCity: function() {
      this.inputCity = this.storeCity;
    },
  },

  methods: {
    ...mapActions(['setCity']),

    submit() {
      this.setCity(this.inputCity);
    },
  },
};
</script>
