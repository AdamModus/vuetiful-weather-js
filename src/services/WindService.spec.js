import windService from './WindService';

describe('WindService', () => {
  test('gets the correct cardinal direction', () => {
    // Setup
    const expectedResult = 'South';

    // Execute
    const result = windService.getWindCardinalDirection(180);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  test('converts miles per hour to kms per hour', () => {
    // Setup
    const expectedResultZero = 0;
    const expectedResult = 180;

    // Execute
    const resultZero = windService.mpsTokmph(0);
    const result = windService.mpsTokmph(50);

    // Assert
    expect(resultZero).toEqual(expectedResultZero);
    expect(result).toEqual(expectedResult);
  });

  test('returns the correct css string, given a numeric parameter', () => {
    // Setup
    const param = 180;
    const expectedResult = `transform: rotate(${param}deg);`;

    // Execute
    const result = windService.getWindRotationCSS(param);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
