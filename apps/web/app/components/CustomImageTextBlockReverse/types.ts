export interface CustomImageTextBlockReverseData {
  image?: {
    url: string;
    mobileUrl?: string;
    alt?: string;
  };
  title?: { text: string; color?: string };
  subtitle?: { text: string; color?: string };
  description?: { text: string; color?: string };
  cta?: {
    text: string;
    color?: string;
    bgColor?: string;
    link: string;
  };
  bgColor?: string;
  useGradient?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
  gradientPosition?: string | undefined;
}

export interface CustomImageTextBlockReverseProps {
  data: CustomImageTextBlockReverseData;
}
