import MUTATION_TYPES from '../mutation-types';
import themeActions from './ThemeActions';

describe('ThemeActions', () => {
  let commit;

  beforeEach(() => {
    commit = jest.fn();
  });

  describe('switchTheme', () => {
    test('commits the switch theme mutations with true if given a falsy value', () => {
      // Execute
      themeActions.switchTheme({ commit });

      // Assert
      expect(commit).toHaveBeenCalledWith(MUTATION_TYPES.SWITCH_THEME, true);
    });

    test('commits the switch theme mutations with true if given false', () => {
      // Execute
      themeActions.switchTheme({ commit }, false);

      // Assert
      expect(commit).toHaveBeenCalledWith(MUTATION_TYPES.SWITCH_THEME, true);
    });

    test('commits the switch theme mutations with false if given a truthy value', () => {
      // Execute
      themeActions.switchTheme({ commit }, {});

      // Assert
      expect(commit).toHaveBeenCalledWith(MUTATION_TYPES.SWITCH_THEME, false);
    });

    test('commits the switch theme mutations with false if given true', () => {
      // Execute
      themeActions.switchTheme({ commit }, true);

      // Assert
      expect(commit).toHaveBeenCalledWith(MUTATION_TYPES.SWITCH_THEME, false);
    });
  });
});
