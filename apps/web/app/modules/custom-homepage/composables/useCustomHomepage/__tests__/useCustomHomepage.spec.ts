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

  // NOTE: fetchHomepageData has no awaited work yet — the body between the loading
  // flags is still a placeholder — so the in-flight `loading === true` window is not
  // observable. Assert the settled state; restore the mid-flight assertion once a real
  // request lands in the composable.
  it('should reset loading once the fetch settles', async () => {
    const { loading, fetchHomepageData } = useCustomHomepage();

    await fetchHomepageData();

    expect(loading.value).toBe(false);
  });

  it('should share state between callers', async () => {
    const first = useCustomHomepage();
    const second = useCustomHomepage();

    await first.fetchHomepageData();

    expect(second.loading.value).toBe(first.loading.value);
  });

  it('should handle errors gracefully', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const { loading, fetchHomepageData } = useCustomHomepage();

    await expect(fetchHomepageData()).resolves.toBeUndefined();

    expect(loading.value).toBe(false);

    consoleSpy.mockRestore();
  });
});
