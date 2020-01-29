import temperatureService from './TemperatureService';

describe('TemperatureService', () => {
  const fahrenheit = 'Fahrenheit';
  const celsius = 'CELSIUS';

  test('converts Kelvin to Celsius', () => {
    // Setup
    const expectedResult = -273;

    // Execute
    const result = temperatureService.convertTemperature(celsius, 0);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  test('converts Kelvin to Fahrenheit', () => {
    // Setup
    const expectedResult = -460;

    // Execute
    const result = temperatureService.convertTemperature(fahrenheit, 0);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
