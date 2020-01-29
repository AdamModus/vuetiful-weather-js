import services from '@/services/index';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import ForecastAggregator from './ForecastAggregator.vue';
jest.mock('@/services/index');

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ForecastAggregator.vue', () => {
  let store;
  let state;
  let mutations;
  let actions;
  let getters;
  let modules;

  const mockedServiceReturns = {
    mapOWMCodeToIconClass: 'mockedIconClass',
  };

  beforeEach(() => {
    services.mapOWMCodeToIconClass.mockImplementation(
      () => mockedServiceReturns.mapOWMCodeToIconClass
    );

    mutations = {};
    actions = {};
    getters = {};
    modules = {};
    state = {
      forecast: {
        sixteenDayWeatherForecast: [
          {
            date:
              '[native Date Thu Jan 30 2020 12:00:00 GMT+0100 (Central European Standard Time)]',
            dateString: 'Thu 30th',
            maxTemperature: 283.64,
            minTemperature: 280,
            avgTemperature: 281.82,
            feelsTemperature: 275.36,
            pressure: 1005,
            humidity: 86,
            windSpeed: 5.17,
            windDirection: 206,
            cloudiness: 100,
            rain: '',
            snow: '',
            description: 'overcast clouds',
            iconId: 804,
          },
          {
            date:
              '[native Date Fri Jan 31 2020 12:00:00 GMT+0100 (Central European Standard Time)]',
            dateString: 'Fri 31st',
            maxTemperature: 284.19,
            minTemperature: 280.33,
            avgTemperature: 282.26,
            feelsTemperature: 276.56,
            pressure: 1008,
            humidity: 83,
            windSpeed: 7.47,
            windDirection: 241,
            cloudiness: 97,
            rain: 1.82,
            snow: '',
            description: 'light rain',
            iconId: 500,
          },
        ],
      },
    };
    store = new Vuex.Store({ state, mutations, actions, getters, modules });
  });

  test('renders', () => {
    // Setup
    const component = shallowMount(ForecastAggregator, { store, localVue });

    // Test
    expect(component).toBeTruthy();
  });

  test('getClass method calls services.mapOWMCodeToIconClass', () => {
    // Setup
    const getClassPAram = 'test';
    const component = shallowMount(ForecastAggregator, { store, localVue });

    // Execute
    component.vm.getClass(getClassPAram);

    // Test
    expect(services.mapOWMCodeToIconClass).toHaveBeenCalledWith(getClassPAram);
  });
});
