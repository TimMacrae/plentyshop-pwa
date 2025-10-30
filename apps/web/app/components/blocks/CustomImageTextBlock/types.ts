export interface CustomImageTextBlockData {
  image?: {
    url: string;
    alt?: string;
  };
  title?: string;
  subtitle?: string;
  description?: string;
  cta?: {
    text: string;
    link: string;
  };
}

export interface CustomImageTextBlockProps {
  data: CustomImageTextBlockData;
}
