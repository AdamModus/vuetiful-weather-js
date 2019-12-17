function kelvinToCelsius(tempK) {
  return Math.round(tempK - 273.15);
}

function kelvinToFahrenheit(tempK) {
  return Math.round(tempK * (9 / 5) - 459.67);
}

export default {
  convertTemperature(unit, tempK) {
    if (unit === 'CELSIUS') {
      return kelvinToCelsius(tempK);
    }
    return kelvinToFahrenheit(tempK);
  },
};
