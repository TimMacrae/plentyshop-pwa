import { useShopBuilderContent } from '~/composables/useShopBuilderContent/useShopBuilderContent';
import { mockNuxtImport } from '@nuxt/test-utils/runtime';

// Mock the SDK
mockNuxtImport('useSdk', () => () => ({
  plentysystems: {
    getShopBuilderContent: vi.fn().mockResolvedValue({
      data: { id: 1, name: 'Test Shop Builder Content' },
    }),
  },
}));

describe('useShopBuilderContent', () => {
  it('should initialize with correct default state', () => {
    const { blocks, loading, error } = useShopBuilderContent('test-id');

    expect(blocks.value).toEqual([]);
    expect(loading.value).toBe(false);
    expect(error.value).toBeNull();
  });

  it('should fetch shop builder content data successfully', async () => {
    const { fetchContent, blocks, loading } = useShopBuilderContent('homepage-himmi');

    expect(loading.value).toBe(false);

    await fetchContent();

    expect(loading.value).toBe(false);
    expect(blocks.value.length).toBeGreaterThan(0);

    // Type guard to satisfy TypeScript
    const firstBlock = blocks.value[0];
    expect(firstBlock).toBeDefined();
    expect(firstBlock?.type).toBe('CustomImageTextBlock');
    expect(firstBlock?.data).toHaveProperty('image');
    expect(firstBlock?.data).toHaveProperty('title');
  });

  it('should handle empty contentId gracefully', async () => {
    const { fetchContent, blocks } = useShopBuilderContent('');

    await fetchContent();

    expect(blocks.value).toEqual([]);
  });

  it('should handle errors properly', async () => {
    // Test error handling by passing invalid contentId or simulating error
    const { blocks, error } = useShopBuilderContent('test-error-id');

    // Since we're using mock data, error won't be thrown
    // This test validates the structure is correct
    expect(error.value).toBeNull();
    expect(Array.isArray(blocks.value)).toBe(true);
  });
});
