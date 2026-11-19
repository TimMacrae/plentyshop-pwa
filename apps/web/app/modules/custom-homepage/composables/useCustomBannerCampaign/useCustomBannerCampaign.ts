import type { BannerCampaign } from './types';

export const useCustomBannerCampaign = (campaignKey: keyof typeof bannerCampaigns): BannerCampaign | undefined => {
  const currentDate = new Date();

  // Find active campaigns that are not fallbacks
  const activeCampaigns = bannerCampaigns[campaignKey]?.filter((campaign) => {
    const isWithinDateRange = currentDate >= campaign.startDate && currentDate <= campaign.endDate;
    const isNotFallback = !campaign.id.includes('fallback');
    return isWithinDateRange && isNotFallback;
  });

  // If an active campaign is found, return the first one
  if (activeCampaigns && activeCampaigns.length > 0) {
    return activeCampaigns[0];
  }

  // If no active campaign is found, find all fallbacks
  const fallbackCampaigns = bannerCampaigns[campaignKey]?.filter((campaign) => campaign.id.includes('fallback'));
  if (fallbackCampaigns && fallbackCampaigns.length > 0) {
    return fallbackCampaigns[0];
  }
  return bannerCampaigns.campaignOne?.[0]; // Default to first campaign of campaignOne if nothing found
};

/** Overlay text settings shared by every banner (all banners are image-only, no text overlay). */
const DEFAULT_BANNER_TEXT: BannerCampaign['text'] = {
  pretitle: '',
  title: '',
  subtitle: '',
  htmlDescription: '',
  color: '#FFFFFF',
  bgcolor: '#000000',
  bgopacity: 0.1,
  background: true,
  align: 'center',
  justify: 'bottom',
  textAlignment: 'center',
};

const bannerCampaigns: Record<string, BannerCampaign[]> = {
  campaignOne: [
    {
      id: 'fallback-01',
      image: {
        mobile:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/banner_kornfetti_fallback_mobile.png',
        tablet:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/banner_kornfetti_fallback_web.png',
        desktop:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/banner_kornfetti_fallback_web.png',
        wideScreen:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/banner_kornfetti_fallback_web.png',
        alt: 'Kornfetti Banner',
        brightness: 1,
      },
      text: { ...DEFAULT_BANNER_TEXT },
      button: {
        label: '',
        link: '/produkte',
        variant: 'primary',
      },
      startDate: new Date('2024-01-01T00:00:00Z'),
      endDate: new Date('2024-12-31T23:59:59Z'),
    },
    {
      id: 'karneval-2026',
      image: {
        mobile:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/banner_kornfetti_karneval_mobile.png',
        tablet:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/banner_kornfetti_karneval_web.png',
        desktop:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/banner_kornfetti_karneval_web.png',
        wideScreen:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/banner_kornfetti_karneval_web.png',
        alt: 'Karneval',
        brightness: 1,
      },
      text: { ...DEFAULT_BANNER_TEXT },
      button: {
        label: '',
        link: '/produkte',
        variant: 'primary',
      },
      startDate: new Date('2026-01-12T00:00:00Z'),
      endDate: new Date('2026-02-18T23:59:59Z'),
    },
    {
      id: 'black-week-2026',
      image: {
        mobile:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/BlackWeek_banner_2026_mobile.jpg',
        tablet:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/BlackWeek_banner_2026_desktop.jpeg',
        desktop:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/BlackWeek_banner_2026_desktop.jpeg',
        wideScreen:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/BlackWeek_banner_2026_desktop.jpeg',
        alt: 'Black Week',
        brightness: 1,
      },
      text: { ...DEFAULT_BANNER_TEXT },
      button: {
        label: '',
        link: '/produkte',
        variant: 'primary',
      },
      // German local time (CET, UTC+1) — runs 20.11. to 29.11. inclusive.
      startDate: new Date('2026-11-20T00:00:00+01:00'),
      endDate: new Date('2026-11-29T23:59:59+01:00'),
    },
    {
      id: 'corni',
      image: {
        mobile:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Corni_Banner_final_mobile.png',
        tablet:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Corni_Banner_final_web.png',
        desktop:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Corni_Banner_final_web.png',
        wideScreen:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Corni_Banner_final_web.png',
        alt: 'corni',
        brightness: 1,
      },
      text: { ...DEFAULT_BANNER_TEXT },
      button: {
        label: '',
        link: '/produkte?categoryId=92',
        variant: 'primary',
      },
      startDate: new Date('2026-03-27T00:00:00Z'),
      endDate: new Date('2026-12-12T23:59:59Z'),
    },
    {
      id: 'ostern-2026',
      image: {
        mobile:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/banner_kornfetti_ostern_mobile.png',
        tablet:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/banner_kornfetti_ostern_web.png',
        desktop:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/banner_kornfetti_ostern_web.png',
        wideScreen:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/banner_kornfetti_ostern_web.png',
        alt: 'ostern',
        brightness: 1,
      },
      text: { ...DEFAULT_BANNER_TEXT },
      button: {
        label: '',
        link: '/produkte?categoryId=87',
        variant: 'primary',
      },
      startDate: new Date('2026-03-13T00:00:00Z'),
      endDate: new Date('2026-03-26T23:59:59Z'),
    },
  ],
  campaignTwo: [
    {
      id: 'fallback-01',
      image: {
        mobile:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Splitti_banner_2026_mobile2.jpg',
        tablet:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Splitti_banner_2026_desktop2.jpeg',
        desktop:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Splitti_banner_2026_desktop2.jpeg',
        wideScreen:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Splitti_banner_2026_desktop2.jpeg',
        alt: 'Spliti',
        brightness: 1,
      },
      text: { ...DEFAULT_BANNER_TEXT },
      button: {
        label: '',
        link: '/produkte/spliti',
        variant: 'primary',
      },
      startDate: new Date('2024-01-01T00:00:00Z'),
      endDate: new Date('2025-12-31T23:59:59Z'),
    },
  ],
  campaignThree: [
    {
      id: 'fallback-01',
      image: {
        mobile:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Splitti_banner_2026_mobile.jpg',
        tablet:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Splitti_banner_2026_desktop.jpeg',
        desktop:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Splitti_banner_2026_desktop.jpeg',
        wideScreen:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Splitti_banner_2026_desktop.jpeg',
        alt: 'Himmi',
        brightness: 1,
      },
      text: { ...DEFAULT_BANNER_TEXT },
      button: {
        label: '',
        link: '/produkte/himmi',
        variant: 'primary',
      },
      startDate: new Date('2024-01-01T00:00:00Z'),
      endDate: new Date('2025-12-31T23:59:59Z'),
    },
  ],
  bannerHimmi: [
    {
      id: 'fallback-himmi',
      image: {
        mobile:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Splitti_banner_2026_mobile.jpg',
        tablet:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Splitti_banner_2026_desktop.jpeg',
        desktop:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Splitti_banner_2026_desktop.jpeg',
        wideScreen:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Splitti_banner_2026_desktop.jpeg',
        alt: 'Himmi',
        brightness: 1,
      },
      text: { ...DEFAULT_BANNER_TEXT },
      button: {
        label: '',
        link: '/himmi-0-7-liter_209_1166',
        variant: 'primary',
      },
      startDate: new Date('2024-01-01T00:00:00Z'),
      endDate: new Date('2025-12-31T23:59:59Z'),
    },
  ],
  bannerKrauti: [
    {
      id: 'fallback-krauti',
      image: {
        mobile:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Krauti_mobile_klein.png',
        tablet:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Krauti_web_klein.png',
        desktop:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Krauti_web_klein.png',
        wideScreen:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Krauti_web_klein.png',
        alt: 'Krauti Flasche',
        brightness: 1,
      },
      text: { ...DEFAULT_BANNER_TEXT },
      button: {
        label: '',
        link: '/krauti-0-7-liter_212_1169',
        variant: 'primary',
      },
      startDate: new Date('2024-01-01T00:00:00Z'),
      endDate: new Date('2025-12-31T23:59:59Z'),
    },
  ],
  bannerSpliti: [
    {
      id: 'fallback-spliti',
      image: {
        mobile:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Splitti_banner_2026_mobile2.jpg',
        tablet:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Splitti_banner_2026_desktop2.jpeg',
        desktop:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Splitti_banner_2026_desktop2.jpeg',
        wideScreen:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Splitti_banner_2026_desktop2.jpeg',
        alt: 'Spliti',
        brightness: 1,
      },
      text: { ...DEFAULT_BANNER_TEXT },
      button: {
        label: '',
        link: '/spliti-0-7-liter_252_1211',
        variant: 'primary',
      },
      startDate: new Date('2024-01-01T00:00:00Z'),
      endDate: new Date('2025-12-31T23:59:59Z'),
    },
  ],
  bannerCorni: [
    {
      id: 'fallback-corni',
      image: {
        mobile:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Corni_Banner_final_mobile.png',
        tablet:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Corni_Banner_final_web.png',
        desktop:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Corni_Banner_final_web.png',
        wideScreen:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Corni_Banner_final_web.png',
        alt: 'Corni Flasche',
        brightness: 1,
      },
      text: { ...DEFAULT_BANNER_TEXT },
      button: {
        label: '',
        link: '/spirituosen/corni-16x20ml-glas_273_1232',
        variant: 'primary',
      },
      startDate: new Date('2024-01-01T00:00:00Z'),
      endDate: new Date('2025-12-31T23:59:59Z'),
    },
  ],
  bannerKorn: [
    {
      id: 'fallback-spliti',
      image: {
        mobile: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Korn_mobile.png',
        tablet: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Korn_web.png',
        desktop: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Korn_web.png',
        wideScreen:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Korn_web.png',
        alt: 'Korn Flasche',
        brightness: 1,
      },
      text: { ...DEFAULT_BANNER_TEXT },
      button: {
        label: '',
        link: '/kornfetti-0-7l_139_1074',
        variant: 'primary',
      },
      startDate: new Date('2024-01-01T00:00:00Z'),
      endDate: new Date('2025-12-31T23:59:59Z'),
    },
  ],
  bannerRezepte: [
    {
      id: 'fallback-rezepte',
      image: {
        mobile:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_rezept_mobile.png',
        tablet: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Rezept_web.png',
        desktop: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Rezept_web.png',
        wideScreen:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Rezept_web.png',
        alt: 'Rezept Banner',
        brightness: 1,
      },
      text: { ...DEFAULT_BANNER_TEXT },
      button: {
        label: '',
        link: '',
        variant: 'primary',
      },
      startDate: new Date('2024-01-01T00:00:00Z'),
      endDate: new Date('2025-12-31T23:59:59Z'),
    },
  ],
  bannerBombs: [
    {
      id: 'fallback-bombs',
      image: {
        mobile: 'https://cdn02.plentyone.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Bombs_Titelbild.png',
        tablet: 'https://cdn02.plentyone.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Bombs_Titelbild.png',
        desktop: 'https://cdn02.plentyone.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Bombs_Titelbild.png',
        wideScreen: 'https://cdn02.plentyone.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Bombs_Titelbild.png',
        alt: 'Kornfetti Bombs Banner',
        brightness: 1,
      },
      text: { ...DEFAULT_BANNER_TEXT },
      button: {
        label: '',
        link: '',
        variant: 'primary',
      },
      startDate: new Date('2024-01-01T00:00:00Z'),
      endDate: new Date('2025-12-31T23:59:59Z'),
    },
  ],
};
