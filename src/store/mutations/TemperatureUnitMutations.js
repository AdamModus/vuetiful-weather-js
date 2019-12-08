import MUTATION_TYPES from '../mutation-types';

export default {
  [MUTATION_TYPES.SWITCH_TEMPERATURE_UNIT](state, unit) {
    state.temperatureUnit.unit = unit;
  },
};
