import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CustomHero from '../CustomHero.vue';
import type { Banner } from '../types';

const buildBanner = (overrides: Partial<Banner> = {}): Banner => ({
  image: {
    mobile: 'https://example.com/banner-mobile.jpg',
    tablet: 'https://example.com/banner-tablet.jpg',
    desktop: 'https://example.com/banner-desktop.jpg',
    wideScreen: 'https://example.com/banner-wide.jpg',
    alt: 'Kornfetti banner',
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
  ...overrides,
});

describe('CustomHero', () => {
  it('should render the banner copy', () => {
    const wrapper = mount(CustomHero, { props: { banner: buildBanner() } });

    expect(wrapper.text()).toContain('Pretitle 1');
    expect(wrapper.text()).toContain('Title 1');
    expect(wrapper.text()).toContain('Subtitle 1');
    expect(wrapper.html()).toContain('<p>Description 1</p>');
  });

  it('should render the hero image with its alt text', () => {
    const wrapper = mount(CustomHero, { props: { banner: buildBanner() } });

    const img = wrapper.find('img');
    expect(img.attributes('src')).toContain('banner-mobile.jpg');
    expect(img.attributes('alt')).toBe('Kornfetti banner');
  });

  it('should render the CTA button when the banner carries a label', () => {
    const wrapper = mount(CustomHero, { props: { banner: buildBanner() } });

    const button = wrapper.find('button');
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe('Shop Now');
  });

  it('should link the hero to the button target', () => {
    const wrapper = mount(CustomHero, { props: { banner: buildBanner() } });

    expect(wrapper.find('a').attributes('href')).toBe('/shop');
  });

  it('should not render the CTA button when the label is empty', () => {
    const banner = buildBanner({ button: { label: '', link: '/produkte', variant: 'primary' } });

    const wrapper = mount(CustomHero, { props: { banner } });

    expect(wrapper.find('button').exists()).toBe(false);
  });

  it('should fall back to a placeholder link when the banner has no button', () => {
    const banner = buildBanner();
    delete banner.button;

    const wrapper = mount(CustomHero, { props: { banner } });

    expect(wrapper.find('button').exists()).toBe(false);
    expect(wrapper.find('a').attributes('href')).toBe('#');
  });
});
