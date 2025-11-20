import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CustomAgeVerificationOverlay from '../CustomAgeVerificationOverlay.vue';
import type { CustomAgeVerificationOverlayProps } from '../types';

describe('CustomAgeVerificationOverlay', () => {
  const defaultProps: CustomAgeVerificationOverlayProps = {
    // Add default props for testing
  };

  it('renders correctly', () => {
    const wrapper = mount(CustomAgeVerificationOverlay, {
      props: defaultProps
    });
    
    expect(wrapper.find('[data-testid="customageverificationoverlay"]').exists()).toBe(true);
  });

  it('accepts props correctly', () => {
    const wrapper = mount(CustomAgeVerificationOverlay, {
      props: defaultProps
    });
    
    // Test that props are handled correctly
    expect(wrapper.props()).toEqual(defaultProps);
  });
});
