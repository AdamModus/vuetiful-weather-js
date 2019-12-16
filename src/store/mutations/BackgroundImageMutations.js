import MUTATION_TYPES from '../mutation-types';

export default {
  [MUTATION_TYPES.SET_BACKGROUND_IMAGE](state, bgImageUrl) {
    state.backgroundImageUrl = bgImageUrl;
  },
};
