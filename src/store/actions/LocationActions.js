import store from '..';
import MUTATION_TYPES from '../mutation-types';

export default {
  setCity({ commit }, city) {
    if (store.state.location.city === city) {
      return;
    }
    commit(MUTATION_TYPES.USER_SET_CITY, city);
    store.dispatch('fetchCurrentForecast', city);
  },
  setCountryCode({ commit }, countryCode) {
    if (store.state.location.countryCode === countryCode.toLowerCase()) {
      return;
    }
    commit(MUTATION_TYPES.SET_COUNTRY_CODE, countryCode);
  },
};
