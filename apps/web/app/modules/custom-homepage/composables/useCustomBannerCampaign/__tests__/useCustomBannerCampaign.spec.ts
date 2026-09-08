import { useCustomBannerCampaign } from '~/modules/custom-homepage/composables/useCustomBannerCampaign/useCustomBannerCampaign';

// `bannerCampaigns` is a module-local const the composable closes over, so it cannot be
// swapped out from a test. These cases exercise the selection rules against the real
// campaign data instead, with the clock pinned so they stay deterministic.
describe('useCustomBannerCampaign', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('should return the campaign whose date range covers the current date', () => {
    vi.setSystemTime(new Date('2026-02-01T12:00:00Z'));

    expect(useCustomBannerCampaign('campaignOne')?.id).toBe('karneval-2026');
  });

  it('should pick the campaign matching the current date when several are configured', () => {
    vi.setSystemTime(new Date('2026-03-20T12:00:00Z'));

    expect(useCustomBannerCampaign('campaignOne')?.id).toBe('ostern-2026');
  });

  it('should fall back to the fallback campaign when no campaign is currently running', () => {
    vi.setSystemTime(new Date('2025-06-01T12:00:00Z'));

    expect(useCustomBannerCampaign('campaignOne')?.id).toBe('fallback-01');
  });

  it('should never treat a fallback as an active campaign', () => {
    // fallback-01 runs 2024-01-01 to 2024-12-31, so it is inside its own date range here.
    vi.setSystemTime(new Date('2024-06-01T12:00:00Z'));

    const result = useCustomBannerCampaign('campaignOne');

    expect(result?.id).toBe('fallback-01');
    expect(result?.startDate).toEqual(new Date('2024-01-01T00:00:00Z'));
  });

  it('should return the fallback belonging to the requested campaign key', () => {
    vi.setSystemTime(new Date('2025-06-01T12:00:00Z'));

    expect(useCustomBannerCampaign('bannerKrauti')?.id).toBe('fallback-krauti');
    expect(useCustomBannerCampaign('bannerCorni')?.id).toBe('fallback-corni');
    expect(useCustomBannerCampaign('bannerRezepte')?.id).toBe('fallback-rezepte');
  });

  it('should fall back to the first campaignOne entry for an unknown campaign key', () => {
    vi.setSystemTime(new Date('2025-06-01T12:00:00Z'));

    expect(useCustomBannerCampaign('does-not-exist')?.id).toBe('fallback-01');
  });

  it('should return a campaign carrying the image and button data the banner needs', () => {
    vi.setSystemTime(new Date('2026-02-01T12:00:00Z'));

    const result = useCustomBannerCampaign('campaignOne');

    expect(result?.image.mobile).toContain('banner_kornfetti_karneval_mobile');
    expect(result?.image.alt).toBe('Karneval');
    expect(result?.button.link).toBe('/produkte');
  });
});
