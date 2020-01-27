import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import LocationInput from './LocationInput.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('LocationInput.vue', () => {
  let store;
  let state;
  let mutations;
  let actions;
  let getters;
  let modules;

  beforeEach(() => {
    mutations = {};
    actions = {};
    getters = {};
    modules = {};
    state = {
      temperatureUnit: {
        unit: 'Celsius',
      },
      location: {
        city: 'mocked city',
      },
    };
    store = new Vuex.Store({ state, mutations, actions, getters, modules });
  });

  it('renders props.msg when passed', () => {
    const component = shallowMount(LocationInput, { store, localVue });
    expect(component).toBeTruthy();
  });
});
