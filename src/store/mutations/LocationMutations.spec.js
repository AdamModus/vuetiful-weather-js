import locationMutations from './LocationMutations';

const {
  USER_SET_CITY,
  SET_COUNTRY_CODE,
  SET_LOCATION_VALIDITY,
} = locationMutations;

describe('LocationMutations', () => {
  test('sets the city in the state', () => {
    // Setup
    const state = { location: { city: 'initial' } };
    const changedVal = 'changed';

    // Execute
    USER_SET_CITY(state, changedVal);

    // Assert
    expect(state.location.city).toEqual(changedVal);
  });

  test('sets the country code in the state', () => {
    // Setup
    const state = { location: { countryCode: 'initial' } };
    const changedVal = 'changed';

    // Execute
    SET_COUNTRY_CODE(state, changedVal);

    // Assert
    expect(state.location.countryCode).toEqual(changedVal);
  });

  test('sets the location validity in the state', () => {
    // Setup
    const state = { location: { valid: 'initial' } };
    const changedVal = 'changed';

    // Execute
    SET_LOCATION_VALIDITY(state, changedVal);

    // Assert
    expect(state.location.valid).toEqual(changedVal);
  });
});
