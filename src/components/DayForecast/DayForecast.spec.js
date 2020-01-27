import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import DayForecast from './DayForecast.vue';

describe('CurrentWeather.vue', () => {
  let localVue;
  let store;
  let state = {
    forecast: {
      currentWeatherForecast: undefined,
    },
    temperatureUnit: { unit: 'Celsius' },
  };
  let mutations = {};
  let actions = {};
  let getters = {};
  let modules = {};

  beforeAll(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
  });

  beforeEach(() => {
    store = new Vuex.Store({ state, mutations, actions, getters, modules });
  });

  it('renders props', () => {
    const component = shallowMount(DayForecast, {
      store,
      localVue,
      propsData: {
        forecast: { iconId: '801' },
      },
    });
    expect(component).toBeTruthy();
  });
});
