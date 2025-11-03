<template>
  <div class="custom-homepage">
    <div class="custom-banner-carousel-section">
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
      <!-- Fallback: Use BannerCarousel component -->
      <!-- <component v-else :is="bannerComponent" :data="bannerData" /> -->
    </div>
    <!-- Featured Products Section -->
    <div class="max-w-7xl mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold text-gray-900 mb-8">Producktwelt Kornfetti</h2>

      <div v-if="loading" class="flex justify-center">
        <SfLoaderCircular size="xl" />
      </div>

      <ProductSlider v-if="productsList?.length" :items="productsList" />
    </div>

    <section v-if="productImage" class="himmi-bomb-section bg-black text-white overflow-hidden">
      <div class="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
        <!-- Left side - Full Cover Image -->
        <div class="relative h-full min-h-[400px] lg:min-h-[700px]">
          <NuxtImg
            v-if="productImage"
            :src="addModernImageExtension(productImage)"
            alt="Himmi Bomb Glass"
            width="1200"
            height="1400"
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 lg:to-black/30" />
        </div>

        <!-- Right side - Content -->
        <div class="relative flex items-center px-8 py-16 lg:px-16 lg:py-24">
          <div class="space-y-6 max-w-2xl">
            <h2
              class="font-bold text-pink-500 uppercase tracking-wider"
              style="font-size: clamp(2.5rem, 8vw, 5rem); line-height: 1"
            >
              HIMMI BOMB
            </h2>

            <h3 class="text-2xl lg:text-4xl font-bold">Die Himmi Bomb ist da!</h3>

            <p class="text-gray-300 text-lg lg:text-xl leading-relaxed">
              Ein kleiner Kick für den Gaumen aus unserem Himmi und Prosecco, der dich genauso aus den Socken haut wie
              ein guter Shot, aber mit der Leichtigkeit eines richtig guten Drinks.
            </p>

            <div class="pt-4">
              <SfButton
                to="/producktwelt/himmi"
                class="!bg-pink-500 hover:!bg-pink-600 text-white font-bold px-8 py-4 text-lg transition-colors"
              >
                Mehr Infos
              </SfButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- </NuxtLayout> -->
</template>

<script setup lang="ts">
import { SfLoaderCircular, SfButton } from '@storefront-ui/vue';
import type { HimmiBombSectionProps } from './types';
import { productGetters } from '@plentymarkets/shop-api';
import type { Product } from '@plentymarkets/shop-api';
// Imports for BannerCarousal
import { defineAsyncComponent } from 'vue';
import { getBlockLoader } from '~/utils/blocks-imports';

const props = withDefaults(defineProps<HimmiBombSectionProps>(), {
  productImage:
    'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi-Bomb-Kornfetti.jpg',
});

// Fetch products from category 40
const { fetchProducts, data: productsData, loading: productsLoading } = useProducts('homepage-products');
await fetchProducts({ categoryId: '40' });

// Extract products array from the facet data structure
const productsList = computed(() => productsData.value?.products || []);

// Fetch gallery images and other homepage data
const { fetchHomepageData, loading } = useCustomHomepage();

// Import useModernImage composable
const { addModernImageExtension } = useModernImage();

// Fetch Shop Builder content
const { blocks, loading: builderLoading, fetchContent } = useShopBuilderContent('homepage');

// Banner data matching BannerCarousel component structure
const bannerData = {
  banners: [
    {
      image: {
        mobile:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi-Bomb-Kornfetti.jpg',
        tablet:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi-Bomb-Kornfetti.jpg',
        desktop:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi-Bomb-Kornfetti.jpg',
        wideScreen:
          'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi-Bomb-Kornfetti.jpg',
        alt: 'Himmi Bomb',
        brightness: 0.8, // Darken image for better text visibility
      },
      text: {
        pretitle: 'NEU',
        title: '##HIMMI BOMB##',
        subtitle: 'Die Himmi Bomb ist da!',
        htmlDescription:
          '<p>Ein kleiner Kick für den Gaumen aus unserem Himmi und Prosecco, der dich genauso aus den Socken haut wie ein guter Shot, aber mit der Leichtigkeit eines richtig guten Drinks.</p>',
        color: '#FFFFFF', // White text
        bgcolor: '#000000', // Black background
        bgopacity: 0.7, // Semi-transparent background
        background: true, // Enable background
        align: 'center', // Horizontal alignment: left, center, right
        justify: 'center', // Vertical alignment: start, center, end
        textAlignment: 'center', // Text alignment: left, center, right
      },
      button: {
        label: 'Jetzt bestellen',
        link: '/producktwelt/himmi',
        variant: 'primary', // or 'secondary', 'tertiary'
      },
    },
  ],
  autoplay: false, // Disable autoplay for single banner
  loop: false,
};

// Load BannerCarousel dynamically
// const bannerComponent = defineAsyncComponent(() => getBlockLoader('BannerCarousel')());

// Helper to resolve dynamic blocks as async components
// const resolveBlockComponent = (blockType: string) => {
//   const loader = getBlockLoader(blockType);
//   return defineAsyncComponent(() => loader);
// };

// Empty fallback component for when block loader fails
const EmptyBlock: Component = {
  template: '<div class="text-center p-4 text-red-500">Banner component not found</div>',
};

// Helper to safely resolve dynamic blocks as async components
const resolveBlockComponent = (blockType: string) => {
  const loader = getBlockLoader(blockType);

  if (!loader) {
    console.warn(`Block loader not found for type: ${blockType}`);
    return defineAsyncComponent(() => Promise.resolve(EmptyBlock));
  }

  return defineAsyncComponent(() => {
    try {
      const result = loader();
      return result && typeof (result as any).then === 'function' ? result : Promise.resolve(result);
    } catch (error) {
      console.error(`Error loading block ${blockType}:`, error);
      return Promise.resolve(EmptyBlock);
    }
  });
};
// Load BannerCarousel dynamically with null safety
const bannerComponent = (() => {
  const loader = getBlockLoader('BannerCarousel');

  if (!loader) {
    console.warn('BannerCarousel block not found');
    return defineAsyncComponent(() => Promise.resolve(EmptyBlock));
  }

  return defineAsyncComponent(() => {
    try {
      const result = loader();
      return result && typeof (result as any).then === 'function' ? result : Promise.resolve(result);
    } catch (error) {
      console.error('Error loading BannerCarousel:', error);
      return Promise.resolve(EmptyBlock);
    }
  });
})();

definePageMeta({
  layout: 'default',
  pageType: 'content',
});

onMounted(async () => {
  fetchHomepageData();
  await fetchContent();
  console.log('Shop Builder Blocks:', blocks.value);
});
</script>

<style scoped>
.himmi-bomb-section {
  position: relative;
}
</style>
