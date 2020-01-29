import forecastMutation from './ForecastMutations';

const {
  SET_CURRENT_WEATHER_FORECAST,
  SET_SIXTEEN_DAY_WEATHER_FORECAST,
} = forecastMutation;

describe('ForecastMutations', () => {
  test('sets the current weather forecast in the state', () => {
    // Setup
    const state = { forecast: { currentWeatherForecast: 'initial' } };
    const changedVal = 'changed';

    // Execute
    SET_CURRENT_WEATHER_FORECAST(state, changedVal);

    // Assert
    expect(state.forecast.currentWeatherForecast).toEqual(changedVal);
  });

  test('sets the sixteen day weather forecast in the state', () => {
    // Setup
    const state = { forecast: { sixteenDayWeatherForecast: 'initial' } };
    const changedVal = 'changed';

    // Execute
    SET_SIXTEEN_DAY_WEATHER_FORECAST(state, changedVal);

    // Assert
    expect(state.forecast.sixteenDayWeatherForecast).toEqual(changedVal);
  });
});
