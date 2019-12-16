import * as forecastMutationTypes from './ForecastMutationTypes';
import * as locationMutationTypes from './LocationMutationTypes';
import * as temperatureUnitMutationTypes from './TemperatureUnitMutationTypes';
import * as themeMutationTypes from './ThemeMutationTypes';
import * as backgroundMutationTypes from './BackgroundImageMutationTypes';

export default {
  ...themeMutationTypes,
  ...temperatureUnitMutationTypes,
  ...locationMutationTypes,
  ...forecastMutationTypes,
  ...backgroundMutationTypes,
};
