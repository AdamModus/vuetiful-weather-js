import MUTATION_TYPES from '../mutation-types';

export default {
  [MUTATION_TYPES.SET_CURRENT_WEATHER_FORECAST](state, forecast) {
    state.forecast.currentWeatherForecast = forecast;
  },
  [MUTATION_TYPES.SET_SIXTEEN_DAY_WEATHER_FORECAST](state, forecast) {
    state.forecast.sixteenDayWeatherForecast = forecast;
  },
};
