import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import App from './App.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('App.vue', () => {
  let store;
  let state;
  let mutations;
  let actions;
  let getters;
  let modules;
  let component;
  const stubs = ['router-view'];

  beforeEach(() => {
    mutations = {};
    actions = {
      switchTheme: jest.fn(),
      fetchBackgroundImage: jest.fn(),
    };
    getters = {
      backgroundStyle: jest.fn(),
    };
    modules = {};
    state = {
      forecast: {
        currentWeatherForecast: undefined,
      },
      theme: { isDark: true },
    };
    store = new Vuex.Store({ state, mutations, actions, getters, modules });
    component = shallowMount(App, {
      store,
      localVue,
      stubs,
    });
    component.vm.$vuetify = { theme: { dark: true } };
  });

  test('renders properly with right default props', () => {
    // Assert
    expect(component).toBeTruthy();
    expect(component.vm.drawer).toBeFalsy();
  });

  test('method themeButtonClicked triggers switchTheme actions', () => {
    //Execute
    component.vm.themeButtonClicked();

    // Assert
    expect(actions.switchTheme).toHaveBeenCalled();
  });

  describe('watchers', () => {
    test('it maps the theme in state to isDarkTheme prop', () => {
      //Execute
      state.theme.isDark = false;

      // Assert
      expect(component.vm.isDarkTheme).toEqual(state.theme.isDark);
    });

    test('it calls fetchBackgroundImage when state.forecast.currentWeatherForecast changes', () => {
      //Execute
      state.forecast.currentWeatherForecast = {
        description: 'defaultDescription',
      };

      // Assert
      expect(actions.fetchBackgroundImage).toHaveBeenCalled();
    });
  });

  describe('method themeButtonClicked triggers switchTheme actions with isDarkTheme prop', () => {
    test('if isDark is true (default)', () => {
      //Execute
      component.vm.themeButtonClicked();

      // Assert
      expect(actions.switchTheme).toHaveBeenCalledWith(expect.anything(), true);
    });

    test('if isDark is false', () => {
      // Setup
      state.theme.isDark = false;
      store = new Vuex.Store({ state, mutations, actions, getters, modules });
      component = shallowMount(App, {
        store,
        localVue,
        stubs,
      });

      //Execute
      component.vm.themeButtonClicked();

      // Assert
      expect(actions.switchTheme).toHaveBeenCalledWith(
        expect.anything(),
        false
      );
    });
  });
});
