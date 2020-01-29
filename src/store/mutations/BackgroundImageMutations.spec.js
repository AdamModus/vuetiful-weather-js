import backgroundImageMutations from './BackgroundImageMutations';

const { SET_BACKGROUND_IMAGE } = backgroundImageMutations;

describe('BackgroundImageMutations', () => {
  test('sets the background image in the state', () => {
    // Setup
    const state = { backgroundImageUrl: 'initial' };
    const changedVal = 'changed';

    // Execute
    SET_BACKGROUND_IMAGE(state, changedVal);

    // Assert
    expect(state.backgroundImageUrl).toEqual(changedVal);
  });
});
