import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CustomImageTextBlockReverse from '../CustomImageTextBlockReverse.vue';
import type { CustomImageTextBlockReverseData } from '../types';

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

// NuxtImg is stubbed globally as `true` in vitest.config.setup.ts, which renders a
// <nuxt-img-stub> rather than an <img>. Swap in a real <img> so image assertions work.
const mountBlock = (data: CustomImageTextBlockReverseData) =>
  mount(CustomImageTextBlockReverse, {
    props: { data },
    global: {
      stubs: {
        NuxtImg: { template: '<img data-testid="image-text-block-image" v-bind="$attrs" />' },
        NuxtLink: {
          template: '<a data-testid="image-text-block-cta" :href="to"><slot /></a>',
          props: ['to'],
        },
      },
    },
  });

describe('CustomImageTextBlockReverse', () => {
  it('should render the title, subtitle and description', () => {
    const wrapper = mountBlock(mockData);

    expect(wrapper.find('h2').text()).toBe('HIMMI BOMB');
    expect(wrapper.find('h3').text()).toBe('Die Himmi Bomb ist da!');
    expect(wrapper.find('p').text()).toBe('Test description');
  });

  it('should render the desktop image with its alt text', () => {
    const wrapper = mountBlock(mockData);

    const img = wrapper.find('[data-testid="image-text-block-image"]');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe('https://example.com/image.jpg');
    expect(img.attributes('alt')).toBe('Test Image');
  });

  it('should register a mobile source when a mobile url is provided', () => {
    const wrapper = mountBlock(mockData);

    const source = wrapper.find('source');
    expect(source.exists()).toBe(true);
    expect(source.attributes('srcset')).toContain('image-mobile');
    expect(source.attributes('media')).toBe('(max-width: 639px)');
  });

  it('should omit the mobile source when no mobile url is provided', () => {
    const wrapper = mountBlock({ ...mockData, image: { url: 'https://example.com/image.jpg', alt: 'Test Image' } });

    expect(wrapper.find('source').exists()).toBe(false);
    expect(wrapper.find('[data-testid="image-text-block-image"]').exists()).toBe(true);
  });

  it('should render the CTA pointing at the configured link', () => {
    const wrapper = mountBlock(mockData);

    const cta = wrapper.find('[data-testid="image-text-block-cta"]');
    expect(cta.text()).toBe('Mehr Infos');
    expect(cta.attributes('href')).toBe('/producktwelt/himmi');
  });

  it('should render no copy when no data is provided', () => {
    const wrapper = mountBlock({});

    expect(wrapper.find('h2').exists()).toBe(false);
    expect(wrapper.find('h3').exists()).toBe(false);
    expect(wrapper.find('p').exists()).toBe(false);
  });
});
