import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CustomImageTextBlock from '../CustomImageTextBlockReverse.vue';
import type { CustomImageTextBlockReverseData } from '../types';

describe('CustomImageTextBlockReverse', () => {
  const mockData: CustomImageTextBlockReverseData = {
    image: {
      url: 'https://example.com/image.jpg',
      mobileUrl: 'https://example.com/image-mobile.jpg',
      alt: 'Test Image',
    },
    title: { text: 'HIMMI BOMB', color: '#e60073' },
    subtitle: { text: 'Die Himmi Bomb ist da!', color: '#fff' },
    description: { text: 'Test description', color: '#fff' },
    cta: {
      text: 'Mehr Infos',
      color: '#ffffff',
      bgColor: '#e60073',
      link: '/producktwelt/himmi',
    },
  };

  it('renders correctly', () => {
    const wrapper = mount(CustomImageTextBlock, {
      props: {
        data: mockData,
      },
    });

    expect(wrapper.find('h2').text()).toBe('HIMMI BOMB');
    expect(wrapper.find('h3').text()).toBe('Die Himmi Bomb ist da!');
    expect(wrapper.find('p').text()).toBe('Test description');
  });

  it('accepts props correctly', () => {
    const wrapper = mount(CustomImageTextBlock, {
      props: { data: mockData },
    });
    expect(wrapper.props()).toEqual({ data: mockData });
  });
  it('renders image when provided', () => {
    const wrapper = mount(CustomImageTextBlock, {
      props: {
        data: mockData,
      },
    });

    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
  });
  it('renders mobile image when provided', () => {
    const wrapper = mount(CustomImageTextBlock, {
      props: {
        data: mockData,
      },
    });

    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
  });

  it('does not render when no data provided', () => {
    const wrapper = mount(CustomImageTextBlock, {
      props: {
        data: {},
      },
    });

    expect(wrapper.find('h2').exists()).toBe(false);
    expect(wrapper.find('h3').exists()).toBe(false);
  });
});
