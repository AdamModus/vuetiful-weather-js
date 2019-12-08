import MUTATION_TYPES from '../mutation-types';

export default {
  switchTheme({ commit }, oldTheme) {
    commit(MUTATION_TYPES.SWITCH_THEME, !oldTheme);
  },
};
