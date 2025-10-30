import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CustomHero from '../CustomHero.vue';
import type { CustomHeroProps } from '../types';

describe('CustomHero', () => {
  const defaultProps: CustomHeroProps = {
    content: {
      title: 'Test Title',
      subtitle: 'Test Subtitle',
      ctaText: 'Click Me',
    },
  };

  it('renders hero title correctly', () => {
    const wrapper = mount(CustomHero, {
      props: defaultProps,
    });

    expect(wrapper.text()).toContain('Test Title');
    expect(wrapper.text()).toContain('Test Subtitle');
  });

  it('renders CTA button when ctaText provided', () => {
    const wrapper = mount(CustomHero, {
      props: defaultProps,
    });

    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button').text()).toBe('Click Me');
  });

  it('does not render CTA button when ctaText is missing', () => {
    const wrapper = mount(CustomHero, {
      props: {
        content: {
          title: 'Test',
        },
      },
    });

    expect(wrapper.find('button').exists()).toBe(false);
  });
});
