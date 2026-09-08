import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CustomUSP from '../CustomUSP.vue';
import type { CustomUSPProps } from '../types';

describe('CustomUSP', () => {
  const defaultProps: CustomUSPProps = {};

  it('should render the USP bar with all selling points', () => {
    const wrapper = mount(CustomUSP, { props: defaultProps });

    expect(wrapper.find('[data-testid="custom-usp"]').exists()).toBe(true);
    expect(wrapper.text()).toContain('100% natürliche Zutaten');
    expect(wrapper.text()).toContain('Regional hergestellt');
    expect(wrapper.text()).toContain('Versandkostenfrei ab 30 €');
  });

  it('should fall back to a black background and white text when no colors are given', () => {
    const wrapper = mount(CustomUSP, { props: defaultProps });

    const style = wrapper.find('[data-testid="custom-usp"]').attributes('style');
    expect(style).toContain('background-color: #000000');
    expect(style).toContain('color: #FFFFFF');
  });

  it('should apply the configured background and text color', () => {
    const wrapper = mount(CustomUSP, {
      props: { bgColor: '#E6007E', textColor: '#000000' },
    });

    const style = wrapper.find('[data-testid="custom-usp"]').attributes('style');
    expect(style).toContain('background-color: #E6007E');
    expect(style).toContain('color: #000000');
  });

  it('should render a gradient instead of a solid background when gradiantFrom is set', () => {
    const wrapper = mount(CustomUSP, {
      props: { gradiantFrom: '#000000', gradiantTo: '#E6007E' },
    });

    const style = wrapper.find('[data-testid="custom-usp"]').attributes('style');
    expect(style).toContain('radial-gradient');
    expect(style).not.toContain('background-color');
  });
});
