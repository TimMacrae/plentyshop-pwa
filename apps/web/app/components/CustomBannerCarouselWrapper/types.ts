import type { Banner as BannerData } from '~/modules/custom-homepage/composables/useGoogleSheetsCMS/types';

/**
 * Props for CustomBannerCarouselWrapper component
 */
export interface CustomBannerCarouselWrapperProps {
  banners: BannerData[];
  autoplay?: boolean;
  loop?: boolean;
  autoplayDelay?: number;
}
