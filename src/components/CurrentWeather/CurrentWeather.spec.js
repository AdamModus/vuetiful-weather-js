import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import CurrentWeather from './CurrentWeather.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('CurrentWeather.vue', () => {
  let store;
  let state = {
    forecast: {
      currentWeatherForecast: undefined,
    },
  };
  let mutations = {};
  let actions = {};
  let getters = {};
  let modules = {};

  beforeEach(() => {
    store = new Vuex.Store({ state, mutations, actions, getters, modules });
  });

  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(CurrentWeather, { store, localVue });
    expect(wrapper).toBeTruthy();
  });
});
