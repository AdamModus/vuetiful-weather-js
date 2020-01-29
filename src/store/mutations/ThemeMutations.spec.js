import themeMutations from './ThemeMutations';

const { SWITCH_THEME } = themeMutations;

describe('ThemeMutations', () => {
  test('sets the theme in the state', () => {
    // Setup
    const state = { theme: { isDark: 'initial' } };
    const changedVal = 'changed';

    // Execute
    SWITCH_THEME(state, changedVal);

    // Assert
    expect(state.theme.isDark).toEqual(changedVal);
  });
});
