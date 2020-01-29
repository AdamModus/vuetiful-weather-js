import iconService from './IconService';

describe('IconService', () => {
  test('maps OWM code to icon without day or night', () => {
    // Setup
    const expectedResult = 'wi wi-strong-wind';

    // Execute
    const result = iconService.mapOWMCodeToIconClass('957');

    // Assert
    expect(result).toEqual(expectedResult);
  });

  test('maps OWM code to icon with day specified', () => {
    // Setup
    const expectedResult = 'wi wi-day-fog';

    // Execute
    const result = iconService.mapOWMCodeToIconClass('741', 'day');

    // Assert
    expect(result).toEqual(expectedResult);
  });

  test('maps OWM code to icon with night specified', () => {
    // Setup
    const expectedResult = 'wi wi-night-fog';

    // Execute
    const result = iconService.mapOWMCodeToIconClass('741', 'night');

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
