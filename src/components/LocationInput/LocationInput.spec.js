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

  const mockedCity = 'city of Mocks';
  const defaultRules = ['This location was not found'];
  const validRules = [];

  beforeEach(() => {
    mutations = {};
    actions = {
      setCity: jest.fn(),
    };
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

  test('renders properly with right default props', () => {
    // Setup
    const component = shallowMount(LocationInput, { store, localVue });

    // Test
    expect(component).toBeTruthy();
    expect(component.vm.rules).toEqual(defaultRules);
  });

  test('calls setCity after submit is called', async () => {
    // Setup
    const component = shallowMount(LocationInput, { store, localVue });
    component.vm.inputCity = mockedCity;

    // Execute
    component.vm.submit();
    await component.vm.$nextTick();

    // Test
    expect(actions.setCity).toHaveBeenCalled();
  });

  test('watch sets inputCity', async () => {
    // Setup
    const component = shallowMount(LocationInput, { store, localVue });
    component.vm.inputCity = mockedCity;

    // Execute
    component.vm.submit();
    await component.vm.$nextTick();

    // Test
    expect(component.vm.inputCity).toEqual(mockedCity);
  });

  test('computed prop rules is correctly set', () => {
    // Setup
    store.state.location.valid = true;
    const component = shallowMount(LocationInput, { store, localVue });

    // Test
    expect(component.vm.locationValid).toBeTruthy();
    expect(component.vm.rules).toEqual(validRules);
  });
});
