import MUTATION_TYPES from '../mutation-types';
import locationActions from './LocationActions';

jest.mock('@/store', () => {
  return {
    get state() {
      return mockedState;
    },
    get dispatch() {
      return mockedDispatch;
    },
  };
});

let mockedState = {};
let mockedDispatch = {};

describe('LocationActions', () => {
  let commit;

  beforeEach(() => {
    commit = jest.fn();
    mockedState = {
      location: { countryCode: 'defaultcc', city: 'defaultCity' },
    };
    mockedDispatch = jest.fn();
  });

  describe('setCity', () => {
    test('commits the city and fetches the forecast if state has a different city', () => {
      // Setup
      const city = 'Kebabs';

      // Execute
      locationActions.setCity({ commit }, city);

      // Assert
      expect(commit).toHaveBeenCalledWith(MUTATION_TYPES.USER_SET_CITY, city);
      expect(mockedDispatch).toHaveBeenCalledWith('fetchCurrentForecast', city);
    });

    test('does not commitor fetch if state has a different city', () => {
      // Setup
      const city = mockedState.location.city;

      // Execute
      locationActions.setCity({ commit }, city);

      // Assert
      expect(commit).not.toHaveBeenCalled();
      expect(mockedDispatch).not.toHaveBeenCalled();
    });
  });

  describe('setCountryCode', () => {
    test('commits the country code with lower case if state has a different country code', () => {
      // Setup
      const countryCode = 'Kebabs';

      // Execute
      locationActions.setCountryCode({ commit }, countryCode);

      // Assert
      expect(commit).toHaveBeenCalledWith(
        MUTATION_TYPES.SET_COUNTRY_CODE,
        countryCode.toLocaleLowerCase()
      );
    });

    test('does not commit if state has the exact same country code', () => {
      // Setup
      const countryCode = mockedState.location.countryCode;

      // Execute
      locationActions.setCountryCode({ commit }, countryCode);

      // Assert
      expect(commit).not.toHaveBeenCalled();
    });

    test('does not commit if state has the same country code with different casing', () => {
      // Setup
      const countryCode = 'defaultCC';

      // Execute
      locationActions.setCountryCode({ commit }, countryCode);

      // Assert
      expect(commit).not.toHaveBeenCalled();
    });
  });

  describe('setLocationValidity', () => {
    test('commits the validity', () => {
      // Setup
      const validity = 'valid';

      // Execute
      locationActions.setLocationValidity({ commit }, validity);

      // Assert
      expect(commit).toHaveBeenCalledWith(
        MUTATION_TYPES.SET_LOCATION_VALIDITY,
        validity
      );
    });
  });
});
