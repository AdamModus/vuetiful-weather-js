import services from '@/services/index';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import CurrentWeather from './CurrentWeather.vue';
jest.mock('@/services/index');

const localVue = createLocalVue();
localVue.use(Vuex);

describe('CurrentWeather.vue', () => {
  let store;
  let state;
  let mutations;
  let actions;
  let getters;
  let modules;

  const mockedServiceReturns = {
    mapOWMCodeToIconClass: 'mockedIconClass',
    getWindCardinalDirection: 'mockCardinalDirection',
    mpsTokmph: 'mocked MpS to KMpH',
    convertTemperature: 'mcokedConvertedTemperature',
    getWindRotationCSS: 'mockedWindRotationCSS',
  };

  beforeEach(() => {
    services.mapOWMCodeToIconClass.mockImplementation(
      () => mockedServiceReturns.mapOWMCodeToIconClass
    );
    services.getWindCardinalDirection.mockImplementation(
      () => mockedServiceReturns.getWindCardinalDirection
    );
    services.mpsTokmph.mockImplementation(() => mockedServiceReturns.mpsTokmph);
    services.convertTemperature.mockImplementation(
      () => mockedServiceReturns.convertTemperature
    );
    services.getWindRotationCSS.mockImplementation(
      () => mockedServiceReturns.getWindRotationCSS
    );

    mutations = {};
    actions = {};
    getters = {};
    modules = {};
    state = {
      temperatureUnit: {
        unit: 'Celsius',
      },
      forecast: {
        currentWeatherForecast: {
          description: 'scattered clouds',
          iconId: 802,
          temperature: 282.92,
          feelsTemperature: 277.7,
          minTemperature: 282.04,
          maxTemperature: 283.71,
          humidity: 87,
          pressure: 1012,
          windSpeed: 6.7,
          windDirection: 220,
          cloudiness: 40,
        },
      },
      location: {
        city: 'mocked city',
      },
    };
    store = new Vuex.Store({ state, mutations, actions, getters, modules });
  });

  test('Does not render content when currentWeatherForecast in Vuex is not set', () => {
    // Setup
    const emptyState = {
      forecast: {
        currentWeatherForecast: undefined,
      },
    };
    const store = new Vuex.Store({
      state: emptyState,
      mutations,
      actions,
      getters,
      modules,
    });
    const component = shallowMount(CurrentWeather, { store, localVue });

    // Test
    expect(component.find('v-row').exists()).toBeFalsy();
  });

  test('Computes properties properly using imported services', () => {
    // Setup
    const component = shallowMount(CurrentWeather, { store, localVue });

    // Test
    expect(component.vm.weatherIconId).toEqual(
      mockedServiceReturns.mapOWMCodeToIconClass
    );
    expect(component.vm.cardinalDirection).toEqual(
      mockedServiceReturns.getWindCardinalDirection
    );
    expect(component.vm.windSpeedKmph).toEqual(mockedServiceReturns.mpsTokmph);
    expect(component.vm.temperature).toEqual(
      mockedServiceReturns.convertTemperature
    );
    expect(component.vm.feelsTemperature).toEqual(
      mockedServiceReturns.convertTemperature
    );
    expect(component.vm.windRotationCSS).toEqual(
      mockedServiceReturns.getWindRotationCSS
    );
  });
});
