import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CustomFilters from '../CustomFilters.vue';

describe('CustomFilters', () => {
  it('should render every filter group heading', () => {
    const wrapper = mount(CustomFilters);

    expect(wrapper.find('[data-testid="custom-filters"]').exists()).toBe(true);
    expect(wrapper.text()).toContain('Sorten');
    expect(wrapper.text()).toContain('Größe');
    expect(wrapper.text()).toContain('Bundles');
  });

  it('should render the standalone filters outside the accordion groups', () => {
    const wrapper = mount(CustomFilters);

    expect(wrapper.text()).toContain('Sale %');
    expect(wrapper.text()).toContain('Geschenke');
  });

  it('should emit the selected category id when a filter is picked', async () => {
    const wrapper = mount(CustomFilters);

    await wrapper.find('input#54').setValue('54');

    expect(wrapper.emitted('update:filters')).toEqual([[{ categoryId: '54' }]]);
  });

  it('should not emit before the visitor changes the selection', () => {
    const wrapper = mount(CustomFilters);

    expect(wrapper.emitted('update:filters')).toBeUndefined();
  });
});
