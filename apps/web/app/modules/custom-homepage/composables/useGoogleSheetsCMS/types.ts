/**
 * Banner data structure matching Banner.vue component expectations
 */
export interface Banner {
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
    wideScreen: string;
    alt: string;
    brightness: number;
  };
  text: {
    pretitle: string;
    title: string;
    subtitle: string;
    htmlDescription: string;
    color: string;
    bgcolor: string;
    bgopacity: number;
    background: boolean;
    align: 'left' | 'center' | 'right'; // Horizontal alignment
    justify: 'top' | 'center' | 'bottom'; // Vertical alignment (matches Banner.vue)
    textAlignment: 'left' | 'center' | 'right'; // Text alignment
  };
  button: {
    label: string;
    link: string;
    variant: 'primary' | 'secondary';
  };
}

/**
 * Carousel data structure returned by composable
 */
export interface BannerCarouselData {
  banners: Banner[];
  autoplay?: boolean;
  loop?: boolean;
}

/**
 * Return type for useGoogleSheetsCMS composable
 */
export interface UseGoogleSheetsCMSReturn {
  loading: Ref<boolean>;
  data: Ref<Banner | null>;
  error: Ref<Error | null>;
  fetchContent: () => Promise<void>;
}
