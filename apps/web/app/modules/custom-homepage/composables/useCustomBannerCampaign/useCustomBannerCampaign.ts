import type { BannerCampaign } from './types';

export const useCustomBannerCampaign = (): BannerCampaign | undefined => {
  const currentDate = new Date();

  // Find active campaigns that are not fallbacks
  const activeCampaigns = bannerCampaigns.filter((campaign) => {
    const isWithinDateRange = currentDate >= campaign.startDate && currentDate <= campaign.endDate;
    const isNotFallback = !campaign.id.includes('fallback');
    return isWithinDateRange && isNotFallback;
  });

  // If an active campaign is found, return the first one
  if (activeCampaigns.length > 0) {
    return activeCampaigns[0];
  }

  const fallbackCampaigns = bannerCampaigns.filter((campaign) => campaign.id.includes('fallback'));
  if (fallbackCampaigns.length > 0) {
    const startOfYear = new Date(currentDate.getFullYear(), 0, 0);
    const diff = currentDate.getTime() - startOfYear.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    const deterministicIndex = dayOfYear % fallbackCampaigns.length;
    return fallbackCampaigns[deterministicIndex];
  }

  return undefined;
};

const bannerCampaigns: BannerCampaign[] = [
  {
    id: 'fallback-01',
    image: {
      mobile:
        'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Bomb_trinken_Kornfetti_Hamburg.jpg',
      tablet:
        'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Bomb_trinken_Kornfetti_Hamburg.jpg',
      desktop:
        'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Bomb_trinken_Kornfetti_Hamburg.jpg',
      wideScreen:
        'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Bomb_trinken_Kornfetti_Hamburg.jpg',
      alt: 'Himmi Bomb',
      brightness: 0.85,
    },
    text: {
      pretitle: 'NEU',
      title: 'HIMMI BOMB',
      subtitle: 'Die Himmi Bomb ist da!',
      htmlDescription: 'Ein kleiner Kick..',
      color: '#FFFFFF',
      bgcolor: '#000000',
      bgopacity: 0.1,
      background: true,
      align: 'center',
      justify: 'bottom',
      textAlignment: 'center',
    },
    button: {
      label: 'Jetzt bestellen',
      link: '/produkte/himmi',
      variant: 'primary',
    },
    startDate: new Date('2024-01-01T00:00:00Z'),
    endDate: new Date('2025-12-31T23:59:59Z'),
  },
  {
    id: 'fallback-02',
    image: {
      mobile:
        'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Bomb_Gastro_Kornfetti.jpg',
      tablet:
        'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Bomb_Gastro_Kornfetti.jpg',
      desktop:
        'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Bomb_Gastro_Kornfetti.jpg',
      wideScreen:
        'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Bomb_Gastro_Kornfetti.jpg',
      alt: 'Bar frau',
      brightness: 0.85,
    },
    text: {
      pretitle: 'Next Slider',
      title: '20% Off',
      subtitle: 'Super Angebot',
      htmlDescription: '',
      color: '#FFFFFF',
      bgcolor: '#000000',
      bgopacity: 0.7,
      background: false,
      align: 'center',
      justify: 'center',
      textAlignment: 'center',
    },
    button: {
      label: 'Check it out',
      link: '/produkte/korn',
      variant: 'primary',
    },
    startDate: new Date('2024-01-01T00:00:00Z'),
    endDate: new Date('2025-12-31T23:59:59Z'),
  },
];
