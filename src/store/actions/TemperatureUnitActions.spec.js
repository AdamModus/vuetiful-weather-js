import MUTATION_TYPES from '../mutation-types';
import temperatureUnitActions from './TemperatureUnitActions';

describe('TemperatureUnitActions', () => {
  let commit;

  beforeEach(() => {
    commit = jest.fn();
  });

  describe('setTemperatureUnit', () => {
    test('commits the given unit', () => {
      // Setup
      const tempUnit = 'Kebabs';

      // Execute
      temperatureUnitActions.setTemperatureUnit({ commit }, tempUnit);

      // Assert
      expect(commit).toHaveBeenCalledWith(
        MUTATION_TYPES.SWITCH_TEMPERATURE_UNIT,
        tempUnit
      );
    });
  });
});
