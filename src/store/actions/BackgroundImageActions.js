import MUTATION_TYPES from '../mutation-types';

const keys = [
  'thunderstorm',
  'drizzle',
  'rain',
  'snow',
  'clear',
  'clouds',
  'mist',
  'smoke',
  'haze',
  'dust',
  'fog',
  'sand',
  'dust',
  'ash',
  'squall',
  'tornado',
];

export default {
  fetchBackgroundImage({ commit }, weatherDescription) {
    commit(MUTATION_TYPES.SET_BACKGROUND_IMAGE, findKey(weatherDescription));
  },
};

function findKey(description) {
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const found = description.includes(key);
    if (found) {
      return key;
    }
  }
}
