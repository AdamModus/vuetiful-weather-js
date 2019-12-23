import fetch from 'node-fetch';

const urlBase = 'http://api.openweathermap.org/data/2.5/forecast/daily';
const apiKey = '0316ba5cb8868612facee65c17e8f4a0';

function buildRequestUrl(city, countryCode = undefined) {
  const countryCodeFragment =
    typeof countryCode === 'string' ? ',' + countryCode : '';
  const numberOfDaysFragment = 'cnt=16';
  return `${urlBase}?appid=${apiKey}&q=${city}${countryCodeFragment}&${numberOfDaysFragment}`;
}

export function handler(event, context, callback) {
  const { city, countryCode } = event.queryStringParameters;

  if (city === undefined || city === '') {
    callback(null, {
      statusCode: 400,
      body: 'No city in query parameters!!',
    });
    return;
  }
  fetch(buildRequestUrl(city, countryCode))
    .then(response => response.json())
    .then(data => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(data),
      });
    });
}
