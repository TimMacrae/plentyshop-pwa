<!-- filepath: apps/web/app/modules/custom-homepage/pages/index.vue -->
<template>
  <!-- <NuxtLayout name="default"> -->
  <div class="custom-homepage">
    <!-- Custom Hero Component -->
    <CustomHero :content="heroData" />

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

const heroData = computed(() => {
  return {
    title: 'Willkommen in der Producktwelt Kornfetti',
    subtitle: 'Entdecke unsere einzigartigen Produkte',
    description:
      'Tauche ein in die bunte Welt von Kornfetti und entdecke unsere exklusiven Himmi-Sorten und vieles mehr!',
    ctaText: 'Zur Producktwelt',
    ctaLink: '/producktwelt',
  };
});

definePageMeta({
  layout: 'default',
  pageType: 'content',
});

onMounted(() => {
  fetchHomepageData();
});
</script>

<style scoped>
.himmi-bomb-section {
  position: relative;
}
</style>
