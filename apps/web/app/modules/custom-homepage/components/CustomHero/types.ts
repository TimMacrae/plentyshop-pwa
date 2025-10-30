export interface CustomHeroContent {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
}

export interface CustomHeroProps {
  content?: CustomHeroContent;
}
