import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CustomBannerCarouselWrapper from '../CustomBannerCarouselWrapper.vue';
import type { CustomBannerCarouselWrapperProps } from '../types';
import type { BannerCampaign } from '~/modules/custom-homepage/composables/useCustomBannerCampaign/types';

const buildBanner = (id: string): BannerCampaign => ({
  id,
  image: {
    mobile: `https://example.com/${id}.jpg`,
    tablet: `https://example.com/${id}.jpg`,
    desktop: `https://example.com/${id}.jpg`,
    wideScreen: `https://example.com/${id}.jpg`,
    alt: id,
    brightness: 1,
  },
  text: {
    pretitle: '',
    title: id,
    subtitle: '',
    htmlDescription: '',
    color: '#FFFFFF',
    bgcolor: '#000000',
    bgopacity: 0.5,
    background: true,
    align: 'center',
    justify: 'center',
    textAlignment: 'center',
  },
  button: { label: 'Shop Now', link: '/shop', variant: 'primary' },
  startDate: new Date('2023-01-01T00:00:00Z'),
  endDate: new Date('2023-12-31T23:59:59Z'),
});

const mountWrapper = (props: CustomBannerCarouselWrapperProps) =>
  mount(CustomBannerCarouselWrapper, {
    props,
    global: {
      stubs: {
        Banner: { template: '<div data-testid="banner-slide" />' },
        SfScrollable: { template: '<div><slot name="previous" /><slot /><slot name="next" /></div>' },
      },
    },
  });

describe('CustomBannerCarouselWrapper', () => {
  it('should render a single banner without carousel controls', () => {
    const wrapper = mountWrapper({ banners: [buildBanner('banner1')], autoplay: false });

    expect(wrapper.find('[data-testid="custom-banner-carousel-wrapper"]').exists()).toBe(true);
    expect(wrapper.findAll('[data-testid="banner-slide"]')).toHaveLength(1);
    expect(wrapper.findAll('[aria-label^="Go to slide"]')).toHaveLength(0);
  });

  it('should render one pagination dot per banner when there are several', () => {
    const wrapper = mountWrapper({
      banners: [buildBanner('banner1'), buildBanner('banner2'), buildBanner('banner3')],
      autoplay: false,
    });

    expect(wrapper.findAll('[data-testid="banner-slide"]')).toHaveLength(3);
    expect(wrapper.findAll('[aria-label^="Go to slide"]')).toHaveLength(3);
  });

  it('should show the empty state when no banners are given', () => {
    const wrapper = mountWrapper({ banners: [], autoplay: false });

    expect(wrapper.text()).toContain('No banners available');
    expect(wrapper.findAll('[data-testid="banner-slide"]')).toHaveLength(0);
  });

  it('should mark the dot of the slide the visitor selects as active', async () => {
    const wrapper = mountWrapper({
      banners: [buildBanner('banner1'), buildBanner('banner2')],
      autoplay: false,
    });

    const dots = wrapper.findAll('[aria-label^="Go to slide"]');
    expect(dots[0]?.classes()).toContain('bg-white');

    await dots[1]?.trigger('click');

    expect(dots[1]?.classes()).toContain('bg-white');
    expect(dots[0]?.classes()).not.toContain('bg-white');
  });
});
