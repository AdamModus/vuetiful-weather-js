import MUTATION_TYPES from '../mutation-types';

export default {
  [MUTATION_TYPES.SWITCH_THEME](state, isDark) {
    state.theme.isDark = isDark;
  },
};
