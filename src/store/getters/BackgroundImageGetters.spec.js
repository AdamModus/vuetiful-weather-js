import backgroundImageGetters from './BackgroundImageGetters';

describe('BackgroundImageGetters', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('returns undefined if there is not background image url in state', () => {
    // Setup
    const state = {
      backgroundImageUrl: undefined,
    };

    // Execute
    const result = backgroundImageGetters.backgroundStyle(state);

    // Assert
    expect(result).toBeUndefined();
  });

  test('returns css variable string if state has background image url', () => {
    // Setup
    const state = { backgroundImageUrl: 'ash' };
    const mockedRequireResponse = 'mockedResponse';
    const expectedResult = `--bg-image: url(${mockedRequireResponse})`;
    jest.doMock(
      `./../../assets/bg-images/${state.backgroundImageUrl}.jpg`,
      () => {
        return mockedRequireResponse;
      }
    );

    // Execute
    const result = backgroundImageGetters.backgroundStyle(state);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
