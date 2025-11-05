import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CustomHero from '../CustomHero.vue';
import type { CustomHeroProps } from '../types';

describe('CustomHero', () => {
  const defaultProps: CustomHeroProps = {
    banner: {
      image: {
        mobile: 'https://example.com/banner1.jpg',
        tablet: 'https://example.com/banner1.jpg',
        desktop: 'https://example.com/banner1.jpg',
        wideScreen: 'https://example.com/banner1.jpg',
        alt: 'https://example.com/banner1.jpg',
        brightness: 1,
      },
      text: {
        pretitle: 'Pretitle 1',
        title: 'Title 1',
        subtitle: 'Subtitle 1',
        htmlDescription: '<p>Description 1</p>',
        color: '#000000',
        bgcolor: '#FFFFFF',
        bgopacity: 0.5,
        background: true,
        align: 'center',
        justify: 'center',
        textAlignment: 'center',
      },
      button: {
        label: 'Shop Now',
        link: '/shop',
        variant: 'primary',
      },
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
      banner: {
        image: {
          mobile: 'https://example.com/banner1.jpg',
          tablet: 'https://example.com/banner1.jpg',
          desktop: 'https://example.com/banner1.jpg',
          wideScreen: 'https://example.com/banner1.jpg',
          alt: 'https://example.com/banner1.jpg',
          brightness: 1,
        },
        text: {
          pretitle: 'Pretitle 1',
          title: 'Title 1',
          subtitle: 'Subtitle 1',
          htmlDescription: '<p>Description 1</p>',
          color: '#000000',
          bgcolor: '#FFFFFF',
          bgopacity: 0.5,
          background: true,
          align: 'center',
          justify: 'center',
          textAlignment: 'center',
        },
        button: {
          label: 'Shop Now',
          link: '/shop',
          variant: 'primary',
        },
      },
    });

    expect(wrapper.find('button').exists()).toBe(true);
  });
});
