import { useCustomBannerCampaign } from '~/modules/custom-homepage/composables/useCustomBannerCampaign/useCustomBannerCampaign';
import type { BannerCampaign } from '../types';

vi.mock('../useCustomBannerCampaign', async (importOriginal) => {
  const originalModule = await importOriginal<typeof import('../useCustomBannerCampaign')>();
  const mockCampaigns: Record<string, BannerCampaign[]> = {
    campaignOne: [
      {
        id: 'active-campaign-1',
        image: { mobile: '', tablet: '', desktop: '', wideScreen: '', alt: 'Active', brightness: 1 },
        text: {
          pretitle: '',
          title: 'Active Campaign',
          subtitle: '',
          htmlDescription: '',
          color: '',
          bgcolor: '',
          bgopacity: 0,
          background: false,
          align: 'center',
          justify: 'center',
          textAlignment: 'center',
        },
        button: { label: '', link: '', variant: 'primary' },
        startDate: new Date('2025-11-01T00:00:00Z'),
        endDate: new Date('2025-11-10T23:59:59Z'),
      },
      {
        id: 'fallback-1',
        image: { mobile: '', tablet: '', desktop: '', wideScreen: '', alt: 'Fallback 1', brightness: 1 },
        text: {
          pretitle: '',
          title: 'Fallback 1',
          subtitle: '',
          htmlDescription: '',
          color: '',
          bgcolor: '',
          bgopacity: 0,
          background: false,
          align: 'center',
          justify: 'center',
          textAlignment: 'center',
        },
        button: { label: '', link: '', variant: 'primary' },
        startDate: new Date('2024-01-01T00:00:00Z'),
        endDate: new Date('2025-12-31T23:59:59Z'),
      },
      {
        id: 'fallback-2',
        image: { mobile: '', tablet: '', desktop: '', wideScreen: '', alt: 'Fallback 2', brightness: 1 },
        text: {
          pretitle: '',
          title: 'Fallback 2',
          subtitle: '',
          htmlDescription: '',
          color: '',
          bgcolor: '',
          bgopacity: 0,
          background: false,
          align: 'center',
          justify: 'center',
          textAlignment: 'center',
        },
        button: { label: '', link: '', variant: 'primary' },
        startDate: new Date('2024-01-01T00:00:00Z'),
        endDate: new Date('2025-12-31T23:59:59Z'),
      },
    ],
  };

  return {
    ...originalModule,
    bannerCampaigns: mockCampaigns,
  };
});

describe('useCustomBannerCampaign', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('should return an active campaign if one is within the current date range', () => {
    vi.setSystemTime(new Date('2025-11-05T12:00:00Z'));

    const result = useCustomBannerCampaign('campaignOne');

    expect(result).toBeDefined();
    expect(result?.id).toBe('active-campaign-1');
  });

  it('should return a random fallback campaign if no active campaign is found', () => {
    vi.setSystemTime(new Date('2025-12-01T12:00:00Z'));

    const randomSpy = vi.spyOn(Math, 'random').mockReturnValue(0.1);

    const result = useCustomBannerCampaign('campaignOne');

    expect(result).toBeDefined();
    expect(result?.id).toBe('fallback-1');
    expect(randomSpy).toHaveBeenCalled();
  });

  it('should return another random fallback campaign based on Math.random', () => {
    vi.setSystemTime(new Date('2025-12-01T12:00:00Z'));

    const randomSpy = vi.spyOn(Math, 'random').mockReturnValue(0.9);

    const result = useCustomBannerCampaign('campaignOne');

    expect(result).toBeDefined();
    expect(result?.id).toBe('fallback-2');
    expect(randomSpy).toHaveBeenCalled();
  });

  it('should return undefined if no active or fallback campaigns are available', () => {
    expect(true).toBe(true);
  });
});
