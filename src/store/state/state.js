export default {
  theme: {
    isDark: true,
  },
  temperatureUnit: { unit: 'CELSIUS' },
  location: {
    coordinates: {
      latitude: undefined,
      longitude: undefined,
    },
    city: undefined,
    countryCode: undefined,
  },
  forecast: {
    currentWeatherForecast: {
      description: undefined, // string - main type of weather
      iconId: undefined, // number - id of weather icon (used for owfont)
      temperature: undefined, // number - Temperature in Kelvin
      minTemperature: undefined, // number - Min temperature in Kelvin
      maxTemperature: undefined, // number - Max temperature in Kelvin
      humidity: undefined, // mumber - Humidity percentage
      pressure: undefined, // number - Atmospheric pressure in hPa (hectoPascal units)
      windSpeed: undefined, // number - Wind speed in meter/sec
      cloudiness: undefined, // number - Percentage of cloudiness
    },
    sixteenDayWeatherForecast: undefined,
    fiveDayHourlyForecast: undefined,
  },
};

// export interface ISixteenDayWeatherForecast {
// city
// city.id City ID
// city.name City name
// city.coord
// city.coord.lat City geo location, latitude
// city.coord.lon City geo location, longitude
// country Country code (GB, JP etc.)
// timezone Shift in seconds from UTC
// cod Internal parameter
// message Internal parameter
// cnt Number of lines returned by this API call
// list
// list.dt Time of data forecasted
// list.temp
// list.temp.day Day temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// list.temp.min Min daily temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// list.temp.max Max daily temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// list.temp.night Night temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// list.temp.eve Evening temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// list.temp.morn Morning temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// list.pressure Atmospheric pressure on the sea level, hPa
// list.humidity Humidity, %
// list.weather (more info Weather condition codes)
// list.weather.id Weather condition id
// list.weather.main Group of weather parameters (Rain, Snow, Extreme etc.)
// list.weather.description Weather condition within the group
// list.weather.icon Weather icon id
// list.speed Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
// list.deg Wind direction, degrees (meteorological)
// list.clouds Cloudiness, %
// list.rain Precipitation volume, mm
// list.snow Snow volume, mm
// }

// export interface IFiveDayHourlyForecast {
// code Internal parameter
// message Internal parameter
// city
// city.id City ID
// city.name City name
// city.coord
// city.coord.lat City geo location, latitude
// city.coord.lon City geo location, longitude
// city.country Country code (GB, JP etc.)
// city.timezone Shift in seconds from UTC
// cnt Number of lines returned by this API call
// list
// list.dt Time of data forecasted, unix, UTC
// list.main
// list.main.temp Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// list.main.temp_min Minimum temperature at the moment of calculation. This is deviation from 'temp' that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// list.main.temp_max Maximum temperature at the moment of calculation. This is deviation from 'temp' that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// list.main.pressure Atmospheric pressure on the sea level by default, hPa
// list.main.sea_level Atmospheric pressure on the sea level, hPa
// list.main.grnd_level Atmospheric pressure on the ground level, hPa
// list.main.humidity Humidity, %
// list.main.temp_kf Internal parameter
// list.weather (more info Weather condition codes)
// list.weather.id Weather condition id
// list.weather.main Group of weather parameters (Rain, Snow, Extreme etc.)
// list.weather.description Weather condition within the group
// list.weather.icon Weather icon id
// list.clouds
// list.clouds.all Cloudiness, %
// list.wind
// list.wind.speed Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
// list.wind.deg Wind direction, degrees (meteorological)
// list.rain
// list.rain.3h Rain volume for last 3 hours, mm
// list.snow
// list.snow.3h Snow volume for last 3 hours
// list.dt_txt Data/time of calculation, UTC
// }
