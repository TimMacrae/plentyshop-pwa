import type { UseShopBuilderContentState, UseShopBuilderContentReturn } from './types';

export const useShopBuilderContent = (contentId: string): UseShopBuilderContentReturn => {
  const state = useState<UseShopBuilderContentState>(`shop-builder-${contentId}`, () => ({
    loading: false,
    blocks: [],
    error: null,
  }));

  const fetchContent = async (): Promise<void> => {
    if (!contentId) {
      console.warn('No contentId provided to useShopBuilderContent');
      return;
    }

    state.value.loading = true;
    state.value.error = null;

    try {
      // TODO: Replace with actual PlentyONE API call when CMS content endpoint is available
      // The current @plentymarkets/shop-api SDK doesn't expose a shop builder content endpoint
      // Future implementation would look like:
      // const { data } = await useSdk().plentysystems.getCmsContent({ contentId });
      // state.value.blocks = data?.blocks || [];

      // Mock response structure
      const mockBlocks = [
        {
          type: 'CustomImageTextBlock',
          data: {
            image: {
              url: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi-Bomb-Kornfetti.jpg',
              alt: 'Himmi Bomb',
            },
            title: 'HIMMI BOMB',
            subtitle: 'Die Himmi Bomb ist da!',
            description:
              'Ein kleiner Kick für den Gaumen aus unserem Himmi und Prosecco, der dich genauso aus den Socken haut wie ein guter Shot, aber mit der Leichtigkeit eines richtig guten Drinks.',
            cta: {
              text: 'Mehr Infos',
              link: '/producktwelt/himmi',
            },
          },
        },
      ];

      state.value.blocks = mockBlocks;
    } catch (error: unknown) {
      // Convert to standard Error type
      const errorObj = error instanceof Error ? error : new Error('Failed to fetch shop builder content');
      console.error('CUSTOM useShopBuilderContent: Error fetching shop builder content:', error);
      state.value.error = errorObj;
      state.value.loading = false;
    } finally {
      state.value.loading = false;
    }
  };

  return {
    loading: toRef(state.value, 'loading'),
    blocks: toRef(state.value, 'blocks'),
    error: toRef(state.value, 'error'),
    fetchContent,
  };
};
