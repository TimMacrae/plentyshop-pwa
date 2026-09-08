import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CustomAgeVerificationOverlay from '../CustomAgeVerificationOverlay.vue';

describe('CustomAgeVerificationOverlay', () => {
  it('should render the age prompt with both choices', () => {
    const wrapper = mount(CustomAgeVerificationOverlay);

    expect(wrapper.find('[data-testid="age-verification-overlay"]').exists()).toBe(true);
    expect(wrapper.text()).toContain('Altersüberprüfung');
    expect(wrapper.findAll('button')).toHaveLength(2);
  });

  it('should emit verified when the visitor confirms they are of age', async () => {
    const wrapper = mount(CustomAgeVerificationOverlay);

    await wrapper.findAll('button')[0]?.trigger('click');

    expect(wrapper.emitted('verified')).toHaveLength(1);
  });

  it('should show the blocked message and emit nothing when the visitor declines', async () => {
    const wrapper = mount(CustomAgeVerificationOverlay);

    await wrapper.findAll('button')[1]?.trigger('click');

    expect(wrapper.text()).toContain('Zugriff verweigert');
    expect(wrapper.emitted('verified')).toBeUndefined();
  });
});
