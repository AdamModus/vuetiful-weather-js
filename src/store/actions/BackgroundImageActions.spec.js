import MUTATION_TYPES from '../mutation-types';
import backgroundImageActions from './BackgroundImageActions';

describe('BackgroundImageActions', () => {
  let commit;

  beforeEach(() => {
    commit = jest.fn();
  });

  describe('fetchBackgroundImage', () => {
    test('commits the background image with a key that is contained by the given description', () => {
      // Setup
      const weatherDescription = 'light snow';
      const expectedKey = 'snow';

      // Execute
      backgroundImageActions.fetchBackgroundImage(
        { commit },
        weatherDescription
      );

      // Assert
      expect(commit).toHaveBeenCalledWith(
        MUTATION_TYPES.SET_BACKGROUND_IMAGE,
        expectedKey
      );
    });

    test('commits undefined if the description does not match any key', () => {
      // Setup
      const weatherDescription = 'bananas';
      const expectedKey = undefined;

      // Execute
      backgroundImageActions.fetchBackgroundImage(
        { commit },
        weatherDescription
      );

      // Assert
      expect(commit).toHaveBeenCalledWith(
        MUTATION_TYPES.SET_BACKGROUND_IMAGE,
        expectedKey
      );
    });
  });
});
