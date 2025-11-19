import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CustomUSP from '../CustomUSP.vue';
import type { CustomUSPProps } from '../types';

describe('CustomUSP', () => {
  const defaultProps: CustomUSPProps = {
    // Add default props for testing
  };

  it('renders correctly', () => {
    const wrapper = mount(CustomUSP, {
      props: defaultProps
    });
    
    expect(wrapper.find('[data-testid="customusp"]').exists()).toBe(true);
  });

  it('accepts props correctly', () => {
    const wrapper = mount(CustomUSP, {
      props: defaultProps
    });
    
    // Test that props are handled correctly
    expect(wrapper.props()).toEqual(defaultProps);
  });
});
