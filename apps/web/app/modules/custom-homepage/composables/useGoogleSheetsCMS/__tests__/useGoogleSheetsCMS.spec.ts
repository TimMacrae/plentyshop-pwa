import { useGoogleSheetsCMS } from '~/modules/custom-homepage/composables/useGoogleSheetsCMS/useGoogleSheetsCMS';
import { mockNuxtImport } from '@nuxt/test-utils/runtime';

// Mock the SDK
mockNuxtImport('useSdk', () => () => ({
  plentysystems: {
    getGoogleSheetsCMS: vi.fn().mockResolvedValue({
      data: { id: 1, name: 'Test Google Sheets CMS' },
    }),
  },
}));

describe('useGoogleSheetsCMS', () => {
  it('should initialize with correct default state', () => {
    const { data, loading, error } = useGoogleSheetsCMS('test-id', 'test-sheet');

    expect(data.value).toBe(null);
    expect(loading.value).toBe(false);
    expect(error.value).toBe(null);
  });

  it('should fetch Google Sheets CMS data successfully', async () => {
    const { fetchContent, data, loading } = useGoogleSheetsCMS('test-id', 'test-sheet');

    expect(loading.value).toBe(false);

    await fetchContent();

    expect(data.value).toEqual({ id: 1, name: 'Test Google Sheets CMS' });
    expect(loading.value).toBe(false);
  });

  it('should fetch Google Sheets CMS data on server', async () => {
    const { fetchContent, data, loading } = useGoogleSheetsCMS('test-id', 'test-sheet');

    expect(loading.value).toBe(false);

    await fetchContent();

    expect(data.value).toEqual({ id: 1, name: 'Test Google Sheets CMS' });
    expect(loading.value).toBe(false);
  });

  it('should handle errors properly', async () => {
    const { fetchContent, error } = useGoogleSheetsCMS('test-id', 'test-sheet');

    await fetchContent();

    expect(error.value).toBeTruthy();
  });
});
