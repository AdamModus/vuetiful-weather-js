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
  let component;

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
    component = shallowMount(LocationInput, { store, localVue });
    component.vm.inputCity = mockedCity;
  });

  test('renders properly with right default props', () => {
    // Assert
    expect(component).toBeTruthy();
    expect(component.vm.rules).toEqual(defaultRules);
  });

  test('calls setCity after submit is called', async () => {
    // Execute
    component.vm.submit();
    await component.vm.$nextTick();

    // Assert
    expect(actions.setCity).toHaveBeenCalled();
  });

  test('watch sets inputCity', async () => {
    // Execute
    component.vm.submit();
    await component.vm.$nextTick();

    // Assert
    expect(component.vm.inputCity).toEqual(mockedCity);
  });

  test('computed prop rules is correctly set', () => {
    // Setup
    store.state.location.valid = true;
    const myComponent = shallowMount(LocationInput, { store, localVue });

    // Assert
    expect(myComponent.vm.locationValid).toBeTruthy();
    expect(myComponent.vm.rules).toEqual(validRules);
  });
});
