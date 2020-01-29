import temperatureUnitMutations from './TemperatureUnitMutations';

const { SWITCH_TEMPERATURE_UNIT } = temperatureUnitMutations;

describe('TemperatureUnitMutations', () => {
  test('sets the temperature unit in the state', () => {
    // Setup
    const state = { temperatureUnit: { unit: 'initial' } };
    const changedVal = 'changed';

    // Execute
    SWITCH_TEMPERATURE_UNIT(state, changedVal);

    // Assert
    expect(state.temperatureUnit.unit).toEqual(changedVal);
  });
});
