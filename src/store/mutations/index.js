import forecastMutation from './ForecastMutations';
import locationMutations from './LocationMutations';
import temperatureUnitMutations from './TemperatureUnitMutations';
import themeMutations from './ThemeMutations';

export default {
  ...themeMutations,
  ...temperatureUnitMutations,
  ...locationMutations,
  ...forecastMutation,
};
