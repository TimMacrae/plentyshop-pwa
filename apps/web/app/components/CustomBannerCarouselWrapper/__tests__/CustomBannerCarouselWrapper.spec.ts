import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CustomBannerCarouselWrapper from '../CustomBannerCarouselWrapper.vue';
import type { CustomBannerCarouselWrapperProps } from '../types';

describe('CustomBannerCarouselWrapper', () => {
  const defaultProps: CustomBannerCarouselWrapperProps = {
    // Add default props for testing
    banners: [
      {
        id: 'banner1',
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
        startDate: new Date('2023-01-01T00:00:00Z'),
        endDate: new Date('2023-12-31T23:59:59Z'),
      },
    ],
    autoplay: true,
    loop: true,
    autoplayDelay: 3000,
  };

  it('renders correctly', () => {
    const wrapper = mount(CustomBannerCarouselWrapper, {
      props: defaultProps,
    });

    expect(wrapper.find('[data-testid="custombannercarouselwrapper"]').exists()).toBe(true);
  });

  it('accepts props correctly', () => {
    const wrapper = mount(CustomBannerCarouselWrapper, {
      props: defaultProps,
    });

    // Test that props are handled correctly
    expect(wrapper.props()).toEqual(defaultProps);
  });
});
