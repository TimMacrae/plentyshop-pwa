// export interface CustomHeroContent {
//   title: string;
//   subtitle?: string;
//   description?: string;
//   ctaText?: string;
//   ctaLink?: string;
//   image?: string;
// }

export interface CustomHeroProps {
  banner: Banner;
}

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
