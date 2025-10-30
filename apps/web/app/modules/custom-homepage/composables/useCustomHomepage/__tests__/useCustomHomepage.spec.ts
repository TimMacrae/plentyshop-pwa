import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useCustomHomepage } from '../useCustomHomepage';

describe('useCustomHomepage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should initialize with default state', () => {
    const { loading } = useCustomHomepage();

    expect(loading.value).toBe(false);
  });

  it('should set loading state during fetch', async () => {
    const { loading, fetchHomepageData } = useCustomHomepage();

    expect(loading.value).toBe(false);

    const fetchPromise = fetchHomepageData();

    // Loading should be true during fetch
    expect(loading.value).toBe(true);

    await fetchPromise;

    // Loading should be false after fetch
    expect(loading.value).toBe(false);
  });

  it('should handle errors gracefully', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const { loading, fetchHomepageData } = useCustomHomepage();

    // Force an error by mocking the fetch
    vi.spyOn(global, 'setTimeout').mockImplementationOnce(() => {
      throw new Error('API Error');
    });

    await fetchHomepageData();

    expect(loading.value).toBe(false);

    consoleSpy.mockRestore();
  });
});
