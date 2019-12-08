import MUTATION_TYPES from '../mutation-types';

export default {
  setTemperatureUnit({ commit }, unit) {
    commit(MUTATION_TYPES.SWITCH_TEMPERATURE_UNIT, unit);
  },
};
