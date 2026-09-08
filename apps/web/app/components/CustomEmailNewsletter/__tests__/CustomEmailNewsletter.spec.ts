import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CustomEmailNewsletter from '../CustomEmailNewsletter.vue';

describe('CustomEmailNewsletter', () => {
  it('should render the default heading and signup form', () => {
    const wrapper = mount(CustomEmailNewsletter);

    expect(wrapper.find('[data-testid="custom-email-newsletter"]').exists()).toBe(true);
    expect(wrapper.find('h2').text()).toBe('Join the Kornunity');
    expect(wrapper.find('iframe').attributes('src')).toContain('sibforms.com');
  });

  it('should render the subtitle as rich text', () => {
    const wrapper = mount(CustomEmailNewsletter);

    const subtitle = wrapper.find('p');
    expect(subtitle.text()).toContain('5 € Willkommens-Gutschein');
    expect(subtitle.html()).toContain('<br>');
  });

  it('should prefer the supplied title and subtitle over the defaults', () => {
    const wrapper = mount(CustomEmailNewsletter, {
      props: { title: 'Kornfetti News', subtitle: 'Nur das Beste' },
    });

    expect(wrapper.find('h2').text()).toBe('Kornfetti News');
    expect(wrapper.find('p').text()).toBe('Nur das Beste');
  });

  it('should apply the configured background and text color', () => {
    const wrapper = mount(CustomEmailNewsletter, {
      props: { bgColor: '#E6007E', textColor: '#000000' },
    });

    const style = wrapper.find('[data-testid="custom-email-newsletter"]').attributes('style');
    expect(style).toContain('background-color: #E6007E');
    expect(style).toContain('color: #000000');
  });

  it('should omit the heading when the title is empty', () => {
    const wrapper = mount(CustomEmailNewsletter, { props: { title: '' } });

    expect(wrapper.find('h2').exists()).toBe(false);
  });
});
