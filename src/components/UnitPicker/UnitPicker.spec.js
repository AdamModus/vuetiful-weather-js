import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import UnitPicker from './UnitPicker.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('UnitPicker.vue', () => {
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
      setTemperatureUnit: jest.fn(),
    };
    getters = {};
    modules = {};
    state = {
      temperatureUnit: {
        unit: 'Celsius',
      },
    };
    store = new Vuex.Store({ state, mutations, actions, getters, modules });
    component = shallowMount(UnitPicker, { store, localVue });
  });

  test('renders with right default props', () => {
    // Test
    expect(component).toBeTruthy();
    expect(component.vm.unit).toEqual(state.temperatureUnit.unit);
  });

  describe('unitPicked method', () => {
    test('triggering unitPicked with current unit value does not call mapped action', () => {
      // Execute
      component.vm.unitPicked(state.temperatureUnit.unit);

      // Test
      expect(actions.setTemperatureUnit).not.toHaveBeenCalled();
    });

    test('triggering unitPicked with different unit value does calls mapped action', () => {
      // Execute
      component.vm.unitPicked('something different than Celsius');

      // Test
      expect(actions.setTemperatureUnit).toHaveBeenCalled();
    });
  });
});
