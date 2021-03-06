import router from '@/router';
import store from '@/store';
import { format } from 'date-fns';
import MUTATION_TYPES from '../mutation-types';

const lambdaFunctionUrlFragment = '.netlify/functions/';
const dateFormat = 'iii do';

function getBaseUrl() {
  const routerFullPath = router.currentRoute.fullPath;
  let base = window.location.href;

  if (routerFullPath !== '/') {
    base = base.replace(router.currentRoute.fullPath, '/');
  }

  return base;
}

function buildCountryCodeUrlFragment(countryCode) {
  if (typeof countryCode !== 'string' || countryCode === '') {
    return '';
  }
  return '&countryCode=' + countryCode;
}

function extractCurrentForecastFromResponse(response) {
  const forecast = {
    description: response.weather[0].description,
    iconId: response.weather[0].id,
    temperature: response.main.temp,
    feelsTemperature: response.main.feels_like,
    minTemperature: response.main.temp_min,
    maxTemperature: response.main.temp_max,
    humidity: response.main.humidity,
    pressure: response.main.pressure,
    windSpeed: response.wind.speed,
    windDirection: response.wind.deg,
    cloudiness: response.clouds.all,
  };
  return forecast;
}

function extractSixteenDayForecastFromResponse(response) {
  const forecast = [];
  for (let i = 1; i < response.list.length; i++) {
    const iDay = response.list[i];
    const date = new Date(iDay.dt * 1000);
    const dateString = format(date, dateFormat);
    const extracted = {
      date,
      dateString,
      maxTemperature: iDay.temp.max,
      minTemperature: iDay.temp.min,
      avgTemperature: (iDay.temp.max + iDay.temp.min) / 2,
      feelsTemperature: iDay.feels_like.day,
      pressure: iDay.pressure,
      humidity: iDay.humidity,
      windSpeed: iDay.speed,
      windDirection: iDay.deg,
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

export default {
  fetchCurrentForecast({ commit }, city, countryCode = undefined) {
    if (city === undefined || city === '') {
      return;
    }
    const countryCodeFragment = buildCountryCodeUrlFragment(countryCode);
    const base = getBaseUrl();
    const reqUrl = `${base}${lambdaFunctionUrlFragment}currentWeather?city=${city}${countryCodeFragment}`;

    fetch(reqUrl)
      .then(response => response.json())
      .then(data => {
        if (data.cod === '404' || data.cod === '400') {
          store.dispatch('setLocationValidity', false);
          return;
        }

        store.dispatch('setLocationValidity', true);
        store.dispatch('setCountryCode', data.sys.country);
        const forecast = extractCurrentForecastFromResponse(data);
        commit(MUTATION_TYPES.SET_CURRENT_WEATHER_FORECAST, forecast);
        store.dispatch('fetchSixteenDaysForecast', city, countryCode);
      })
      .catch(() => {
        console.log('Well, fetching this failed... ' + reqUrl);
      });
  },

  fetchSixteenDaysForecast({ commit }, city, countryCode = undefined) {
    if (city === undefined || city === '') {
      return;
    }
    const countryCodeFragment = buildCountryCodeUrlFragment(countryCode);
    const base = getBaseUrl();
    const reqUrl = `${base}${lambdaFunctionUrlFragment}sixteenDayForecast?city=${city}${countryCodeFragment}`;

    fetch(reqUrl)
      .then(response => response.json())
      .then(result => {
        const forecast = extractSixteenDayForecastFromResponse(result);
        commit(MUTATION_TYPES.SET_SIXTEEN_DAY_WEATHER_FORECAST, forecast);
      })
      .catch(() => {
        console.log('Well, fetching this failed... ' + reqUrl);
      });
  },
};
