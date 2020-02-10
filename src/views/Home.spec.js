import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Home from './Home.vue';
jest.mock('@/router', () => {
  return {
    currentRoute: {
      params: { id: 'defaultID' },
    },
  };
});

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Home.vue', () => {
  let store;
  let state;
  let mutations;
  let actions;
  let getters;
  let modules;
  let component;

  beforeEach(() => {
    mutations = {};
    actions = {
      setCity: jest.fn(),
    };
    getters = {};
    modules = {};
    state = {
      forecast: {
        currentWeatherForecast: undefined,
      },
    };
    store = new Vuex.Store({ state, mutations, actions, getters, modules });
    component = shallowMount(Home, {
      store,
      localVue,
    });
  });

  test('renders properly with right default props', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  test('method setCity calls Action setCity', () => {
    // Setup
    const param = 'some city';

    // Execute
    component.vm.setCity(param);

    // Assert
    expect(actions.setCity).toHaveBeenCalled();
  });

  test('upon mounting calls setCity if router params have an ID', () => {
    // Assert
    expect(actions.setCity).toHaveBeenCalled();
  });
});
