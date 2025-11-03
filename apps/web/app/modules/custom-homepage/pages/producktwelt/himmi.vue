<template>
  <div class="himmi-page">
    <h1>Himmi Page</h1>
    <!-- Loading State -->
    <div v-if="builderLoading" class="flex justify-center py-16">
      <SfLoaderCircular size="xl" />
    </div>

    <!-- Dynamic Shop Builder Blocks -->
    <template v-else-if="blocks.length > 0">
      <component
        v-for="(block, index) in blocks"
        :key="`block-${index}`"
        :is="resolveBlockComponent(block.type)"
        :data="block.data"
      />
    </template>

    <component v-else :is="fallbackComponent" :data="fallbackData" />
  </div>
</template>

<script setup lang="ts">
import { SfLoaderCircular } from '@storefront-ui/vue';
import { getBlockLoader } from '~/utils/blocks-imports';
import { defineAsyncComponent, onMounted } from 'vue';

definePageMeta({
  layout: 'default',
  pageType: 'content',
});

// Fetch shop builder content
const { blocks, loading: builderLoading, fetchContent } = useShopBuilderContent('himmi-product-page');

// Fallback data if shop builder content not available
const fallbackData = {
  image: {
    url: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi-Bomb-Kornfetti.jpg',
    alt: 'Himmi Bomb',
  },
  title: 'HIMMI BOMB',
  subtitle: 'Die Himmi Bomb ist da!',
  description:
    'Ein kleiner Kick für den Gaumen aus unserem Himmi und Prosecco, der dich genauso aus den Socken haut wie ein guter Shot, aber mit der Leichtigkeit eines richtig guten Drinks.',
  cta: {
    text: '##Jetzt bestellen##',
    link: '/spirituosen',
  },
};

// Minimal empty block used as fallback component
const EmptyBlock = { template: '<div />' } as any;

// Helper to resolve dynamic blocks as async components (always returns a Promise/component)
const resolveBlockComponent = (blockType: string) => {
  const loader = getBlockLoader(blockType) as any;

  if (!loader) {
    // Return a resolved async component when no loader exists
    return defineAsyncComponent(() => Promise.resolve(EmptyBlock));
  }

  // Ensure the loader is wrapped into a Promise-returning function for defineAsyncComponent
  return defineAsyncComponent(() => {
    try {
      const result = loader();
      // If loader() returned a Promise, return it; otherwise wrap in Promise.resolve
      return result && typeof (result as any).then === 'function' ? result : Promise.resolve(result);
    } catch (err) {
      // On synchronous error, resolve to an empty component to avoid runtime crashes
      return Promise.resolve(EmptyBlock);
    }
  });
};

// Create fallback component using the same loader system
const fallbackComponent = resolveBlockComponent('CustomImageTextBlock');

// Fetch content on mount
onMounted(async () => {
  await fetchContent();
});
</script>
