import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CustomFooter from '../CustomFooter.vue';
import type { CustomFooterProps } from '../types';

describe('CustomFooter', () => {
  const defaultProps: CustomFooterProps = {};

  it('should render the footer landmark', () => {
    const wrapper = mount(CustomFooter, { props: defaultProps });

    expect(wrapper.find('[data-testid="custom-footer"]').exists()).toBe(true);
  });

  it('should render every link column heading', () => {
    const wrapper = mount(CustomFooter, { props: defaultProps });

    expect(wrapper.text()).toContain('Lass uns Freunde sein');
    expect(wrapper.text()).toContain('Kornfetti');
    expect(wrapper.text()).toContain('Support');
    expect(wrapper.text()).toContain('Rechtliches');
  });

  it('should render the social links with their external targets', () => {
    const wrapper = mount(CustomFooter, { props: defaultProps });

    const socialLinks = wrapper.findAll('a[target="_blank"]');
    const hrefs = socialLinks.map((link) => link.attributes('href'));

    expect(hrefs).toContain('https://www.facebook.com/Kornfetti/');
    expect(hrefs).toContain('https://www.youtube.com/channel/UCMJ4iKjINOUAz6svI4RUJkA');
    expect(hrefs).toContain('https://www.instagram.com/kornfetti.korn/?hl=de/');
    socialLinks.forEach((link) => {
      expect(link.attributes('rel')).toBe('noopener noreferrer');
    });
  });
});
