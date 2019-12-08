import locationGetters from './LocationGetters';
import temperatureUnitGetters from './TemperatureUnitGetters';
import themeGetters from './ThemeGetters';

export default {
  ...locationGetters,
  ...themeGetters,
  ...temperatureUnitGetters,
};
