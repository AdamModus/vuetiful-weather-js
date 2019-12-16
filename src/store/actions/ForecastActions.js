import { format } from 'date-fns';
import store from '@/store';
import MUTATION_TYPES from '../mutation-types';

const currentWeatherUrlBase = 'http://api.openweathermap.org/data/2.5/weather';
const fiveDayHourlyUrlBase = 'http://api.openweathermap.org/data/2.5/forecast';
const sixteenDaysForecastUrlBase =
  'http://api.openweathermap.org/data/2.5/forecast/daily';
const apiKey = '0316ba5cb8868612facee65c17e8f4a0';
const dateFormat = 'iii do';

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
  const forecast = [];
  for (let i = 0; i < response.list.length; i++) {
    const iDay = response.list[i];
    const date = new Date(iDay.dt * 1000);
    const dateString = format(date, dateFormat);
    const extracted = {
      date,
      dateString,
      maxTemperature: iDay.temp.max,
      minTemperature: iDay.temp.min,
      pressure: iDay.pressure,
      humidity: iDay.humidity,
      windSpeed: iDay.speed,
      cloudiness: iDay.clouds,
      rain: iDay.rain,
      snow: iDay.snow,
      description: iDay.weather[0].description,
      iconId: iDay.weather[0].id,
    };
    forecast.push(extracted);
  }
  return forecast;
}

function extractFiveDayHourlyForecastFromResponse(response) {
  const forecast = [];
  for (let i = 0; i < response.list.length; i++) {
    const curr = response.list[i];
    const date = new Date(curr.dt * 1000);
    const dateString = format(date, dateFormat);
    const extracted = {
      date,
      dateString,
      pressure: curr.main.pressure,
      humidity: curr.main.humidity,
      windSpeed: curr.wind.speed,
      cloudiness: curr.clouds.all,
      averageTemperature: curr.main.temp,
      maxTemperature: curr.main.temp_max,
      minTemperature: curr.main.temp_min,
      description: curr.weather[0].description,
      iconId: curr.weather[0].id,
      rain: curr.rain ? curr.rain['3h'] : undefined,
      snow: curr.snow ? curr.snow['3h'] : undefined,
    };
    forecast.push(extracted);
  }

  return forecast;
}

export default {
  fetchCurrentForecast({ commit }, city, countryCode = undefined) {
    fetch(buildCurrentWeatherForecastUrl(city, countryCode))
      .then(response => response.json())
      .then(result => {
        if (result.cod === '404' || result.cod === '400') {
          store.dispatch('setLocationValidity', false);
          return;
        }

        store.dispatch('setLocationValidity', true);
        store.dispatch('setCountryCode', result.sys.country);
        const forecast = extractCurrentForecastFromResponse(result);
        commit(MUTATION_TYPES.SET_CURRENT_WEATHER_FORECAST, forecast);
        store.dispatch('fetchSixteenDaysForecast', city, countryCode);
      });
  },

  fetchSixteenDaysForecast({ commit }, city, countryCode = undefined) {
    fetch(buildSixteenDaysForecastURL(city, countryCode))
      .then(response => response.json())
      .then(result => {
        const forecast = extractSixteenDayForecastFromResponse(result);
        commit(MUTATION_TYPES.SET_SIXTEEN_DAY_WEATHER_FORECAST, forecast);
        store.dispatch('fetchFiveDayHourlyForecast', city, countryCode);
      });
  },

  fetchFiveDayHourlyForecast({ commit }, city, countryCode = undefined) {
    fetch(buildFiveDayHourlyForecastURL(city, countryCode))
      .then(response => response.json())
      .then(result => {
        const forecast = extractFiveDayHourlyForecastFromResponse(result);
        commit(MUTATION_TYPES.SET_FIVE_DAY_HOURLY_WEATHER_FORECAST, forecast);
      });
  },
};
