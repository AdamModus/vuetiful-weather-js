import backgroundImageActions from './BackgroundImageActions';
import forecastActions from './ForecastActions';
import locationActions from './LocationActions';
import temperatureUnitActions from './TemperatureUnitActions';
import themeActions from './ThemeActions';

export default {
  ...themeActions,
  ...temperatureUnitActions,
  ...locationActions,
  ...forecastActions,
  ...backgroundImageActions,
};
