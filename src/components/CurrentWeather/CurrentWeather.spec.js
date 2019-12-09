import { shallowMount } from '@vue/test-utils';
import CurrentWeather from './CurrentWeather.vue';

describe('CurrentWeather.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(CurrentWeather, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
