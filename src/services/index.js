import iconService from './IconService';
import temperatureService from './TemperatureService';
import windService from './WindService';

export default {
  ...iconService,
  ...windService,
  ...temperatureService,
};
