import { useCustomContent } from '~/modules/custom-homepage/composables/useCustomContent/useCustomContent';
// import { mockNuxtImport } from '@nuxt/test-utils/runtime';

// Mock the SDK
// mockNuxtImport('useSdk', () => () => ({
//   plentysystems: {
//     getCustomContent: vi.fn().mockResolvedValue({
//       data: { id: 1, name: 'Test Custom Content' }
//     })
//   }
// }));

describe('useCustomContent', () => {
  it('should initialize with correct default state', () => {
    const { customImageTextBlock_himmiBombContent } = useCustomContent();
    expect(customImageTextBlock_himmiBombContent).not.toBe(null);
  });
});
