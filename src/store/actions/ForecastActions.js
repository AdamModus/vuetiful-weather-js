import store from '..';
import MUTATION_TYPES from '../mutation-types';

const currentWeatherUrlBase = 'http://api.openweathermap.org/data/2.5/weather';
const fiveDayHourlyUrlBase = 'http://api.openweathermap.org/data/2.5/forecast';
const sixteenDaysForecastUrlBase =
  'http://api.openweathermap.org/data/2.5/forecast/daily';
const apiKey = '0316ba5cb8868612facee65c17e8f4a0';

function buildCurrentWeatherForecastUrl(city, countryCode = undefined) {
  const countryCodeFragment =
    typeof countryCode === 'string' ? ',' + countryCode : '';
  return `${currentWeatherUrlBase}?appid=${apiKey}&q=${city}${countryCodeFragment}`;
}

function buildFiveDayHourlyForecastURL(city, countryCode = undefined) {
  const countryCodeFragment =
    typeof countryCode === 'string' ? ',' + countryCode : '';
  return `${fiveDayHourlyUrlBase}?appid=${apiKey}&q=${city}${countryCodeFragment}`;
}

function buildSixteenDaysForecastURL(city, countryCode = undefined) {
  const countryCodeFragment =
    typeof countryCode === 'string' ? ',' + countryCode : '';
  const numberOfDaysFragment = 'cnt=16';
  return `${sixteenDaysForecastUrlBase}?appid=${apiKey}&q=${city}${countryCodeFragment}&${numberOfDaysFragment}`;
}

function extractCurrentForecastFromResponse(response) {
  const forecast = {
    description: response.weather[0].description,
    iconId: response.weather[0].id,
    temperature: response.main.temp,
    minTemperature: response.main.temp_min,
    maxTemperature: response.main.temp_max,
    humidity: response.main.humidity,
    pressure: response.main.pressure,
    windSpeed: response.wind.speed,
    cloudiness: response.clouds.all,
  };
  return forecast;
}

function extractSixteenDayForecastFromResponse(response) {
  const forecast = {};
  console.log(response);
  return forecast;
}

function extractFiveDayHourlyForecastFromResponse(response) {
  const forecast = {};
  console.log(response);
  return forecast;
}

export default {
  fetchCurrentForecast({ commit }, city, countryCode = undefined) {
    fetch(buildCurrentWeatherForecastUrl(city, countryCode))
      .then(response => response.json())
      .then(result => {
        store.dispatch('setCountryCode', result.sys.country);
        const forecast = extractCurrentForecastFromResponse(result);
        commit(MUTATION_TYPES.SET_CURRENT_WEATHER_FORECAST, forecast);
      });
  },

  fetchSixteenDaysForecast({ commit }, city, countryCode = undefined) {
    fetch(buildSixteenDaysForecastURL(city, countryCode))
      .then(response => response.json())
      .then(result => {
        store.dispatch('setCountryCode', result.country);
        const forecast = extractSixteenDayForecastFromResponse(result);
        commit(MUTATION_TYPES.SET_SIXTEEN_DAY_WEATHER_FORECAST, forecast);
      });
  },

  fetchFiveDayHourlyForecast({ commit }, city, countryCode = undefined) {
    fetch(buildFiveDayHourlyForecastURL(city, countryCode))
      .then(response => response.json())
      .then(result => {
        store.dispatch('setCountryCode', result.city.country);
        const forecast = extractFiveDayHourlyForecastFromResponse(result);
        commit(MUTATION_TYPES.SET_FIVE_DAY_HOURLY_WEATHER_FORECAST, forecast);
      });
  },
};
