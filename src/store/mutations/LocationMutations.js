import MUTATION_TYPES from '../mutation-types';

export default {
  [MUTATION_TYPES.USER_SET_CITY](state, city) {
    state.location.city = city;
  },
  [MUTATION_TYPES.SET_COUNTRY_CODE](state, countryCode) {
    state.location.countryCode = countryCode;
  },
};
