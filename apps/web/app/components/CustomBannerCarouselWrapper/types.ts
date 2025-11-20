import type { BannerCampaign } from '~/modules/custom-homepage/composables/useCustomBannerCampaign/types';

/**
 * Props for CustomBannerCarouselWrapper component
 */
export interface CustomBannerCarouselWrapperProps {
  banners: BannerCampaign[];
  autoplay?: boolean;
  loop?: boolean;
  autoplayDelay?: number;
}
