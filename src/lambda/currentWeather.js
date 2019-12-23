import fetch from 'node-fetch';

const currentWeatherUrlBase = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '0316ba5cb8868612facee65c17e8f4a0';

function buildCurrentWeatherForecastUrl(
  city = 'Lisbon',
  countryCode = undefined
) {
  const countryCodeFragment =
    typeof countryCode === 'string' ? ',' + countryCode : '';
  return `${currentWeatherUrlBase}?appid=${apiKey}&q=${city}${countryCodeFragment}`;
}

export function handler(event, context, callback) {
  fetch(
    buildCurrentWeatherForecastUrl(
      event.queryStringParameters.city,
      event.queryStringParameters.countryCode
    )
  )
    .then(response => response.json())
    .then(data => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(data),
      });
    });
}
