export default {
  convertedCurrentTemperature(state) {
    if (state.temperatureUnit.unit === 'CELSIUS') {
      return kelvinToCelsius(state.forecast.currentWeatherForecast.temperature);
    }
    return kelvinToFahrenheit(
      state.forecast.currentWeatherForecast.temperature
    );
  },
};

function kelvinToCelsius(tempK) {
  return Math.round(tempK - 273.15);
}

function kelvinToFahrenheit(tempK) {
  return Math.round(tempK * (9 / 5) - 459.67);
}
