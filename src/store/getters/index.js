import locationGetters from './LocationGetters';
import temperatureUnitGetters from './TemperatureUnitGetters';
import themeGetters from './ThemeGetters';
import forecastGetters from './ForecastGetters';

export default {
  ...locationGetters,
  ...themeGetters,
  ...temperatureUnitGetters,
  ...forecastGetters,
};
