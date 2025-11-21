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

const bannerCampaigns: Record<string, BannerCampaign[]> = {
  campaignOne: [
    {
      id: 'fallback-01',
      image: {
        mobile: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_BF_mobile.png',
        tablet: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_BF_web2.png',
        desktop: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_BF_web2.png',
        wideScreen: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_BF_web2.png',
        alt: 'Black friday',
        brightness: 1,
      },
      text: {
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
      },
      button: {
        label: '',
        link: '/produkte?categoryId=41',
        variant: 'primary',
      },
      startDate: new Date('2024-01-01T00:00:00Z'),
      endDate: new Date('2025-12-31T23:59:59Z'),
    },
  ],
  campaignTwo: [
    {
      id: 'fallback-01',
      image: {
        mobile: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Spliti_web.png',
        tablet: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Spliti_web.png',
        desktop: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Spliti_web.png',
        wideScreen:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Spliti_web.png',
        alt: 'Splitti',
        brightness: 1,
      },
      text: {
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
      },
      button: {
        label: '',
        link: '/produkte/splitti',
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
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Himmi_mobile.png',
        tablet: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_himmi_web.png',
        desktop: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_himmi_web.png',
        wideScreen:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_himmi_web.png',
        alt: 'Himmi',
        brightness: 1,
      },
      text: {
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
      },
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
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Himmi_mobile.png',
        tablet: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_himmi_web.png',
        desktop: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_himmi_web.png',
        wideScreen:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_himmi_web.png',
        alt: 'Krauti Flasche',
        brightness: 1,
      },
      text: {
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
      },
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
      text: {
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
      },
      button: {
        label: '',
        link: '/krauti-0-7-liter_212_1169',
        variant: 'primary',
      },
      startDate: new Date('2024-01-01T00:00:00Z'),
      endDate: new Date('2025-12-31T23:59:59Z'),
    },
  ],
  bannerSplitti: [
    {
      id: 'fallback-splitti',
      image: {
        mobile:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Spliti_mobile.png',
        tablet: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Spliti_web.png',
        desktop: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Spliti_web.png',
        wideScreen:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Spliti_web.png',
        alt: 'Krauti Flasche',
        brightness: 1,
      },
      text: {
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
      },
      button: {
        label: '',
        link: '/spliti-0-7-liter_252_1211',
        variant: 'primary',
      },
      startDate: new Date('2024-01-01T00:00:00Z'),
      endDate: new Date('2025-12-31T23:59:59Z'),
    },
  ],
  bannerKorn: [
    {
      id: 'fallback-splitti',
      image: {
        mobile: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Korn_mobile.png',
        tablet: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Korn_web.png',
        desktop: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Korn_web.png',
        wideScreen:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Banner_Korn_web.png',
        alt: 'Korn Flasche',
        brightness: 1,
      },
      text: {
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
      },
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
      text: {
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
      },
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
