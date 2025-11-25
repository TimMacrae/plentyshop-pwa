<template>
  <div class="produkte-korn-page">
    <div v-if="bannerKorn"><CustomHero :banner="bannerKorn" /></div>

    <!-- Bottom USP bar -->
    <CustomUSP
      :bgColor="'#f3b26d'"
      :textColor="'#fff'"
      :gradiantFrom="'#f3b26d'"
      :gradiantVia="'#f3b26d'"
      :gradiantTo="'#ffdbb4'"
    />

    <!-- Products Section -->
    <section class="bg-black py-16 xs:py-16 md:py-32 xs:px-8">
      <div v-if="products53.length" class="custom-product-section">
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
          <ProductCard v-for="(product, index) in products53" :key="index" :product="product" />
        </div>
      </div>
    </section>

    <!-- Image text section -->
    <div v-if="customImageTextBlock_productKorn_kornBottleContent">
      <CustomImageTextBlockReverse :data="customImageTextBlock_productKorn_kornBottleContent" />
    </div>

    <!-- Box section -->
    <section class="bg-black py-16 xs:py-16 md:py-32 xs:px-8">
      <div class="max-w-[1400px] mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 text-center">
          <article v-for="(item, index) in infoBoxItems" :key="index" class="flex flex-col items-center">
            <!-- Icon / illustration -->
            <NuxtImg
              v-if="item.image"
              :src="item.image"
              :alt="item.imageAlt || item.title"
              class="mb-6 max-h-32 w-auto"
              loading="lazy"
            />

            <!-- Title -->
            <h3 class="mb-4 text-xl md:text-2xl font-bold tracking-[0.18em] uppercase typography-headline-2 text-white">
              {{ item.title }}
            </h3>

            <!-- Description -->
            <p class="max-w-xs mx-auto text-sm md:text-base leading-relaxed text-white tracking-[0.08em]">
              {{ item.description }}
            </p>
          </article>
        </div>
      </div>
    </section>
    <!-- Image text section -->
    <div v-if="customImageTextBlockproductKorn_herstellungContent">
      <CustomImageTextBlock :data="customImageTextBlockproductKorn_herstellungContent" />
    </div>
    <!-- Image text section -->
    <div v-if="customImageTextBlockproductKorn_ausgezeichnetContent">
      <CustomImageTextBlockReverse :data="customImageTextBlockproductKorn_ausgezeichnetContent" />
    </div>

    <!-- Products Section -->
    <section class="bg-black py-16 xs:py-16 md:py-32 xs:px-8">
      <h2
        class="typography-headline-1 text-white pb-12 text-center"
        style="font-size: clamp(3rem, 8vw, 6rem); color: #f3b26d"
      >
        Unsere super Shots!
      </h2>
      <div v-if="products83.length" class="custom-product-section">
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
          <ProductCard v-for="(product, index) in products83" :key="index" :product="product" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useCustomBannerCampaign } from '../../composables/useCustomBannerCampaign/useCustomBannerCampaign';
const bannerKorn = useCustomBannerCampaign('bannerKorn');

import ProductCard from '~/components/ui/ProductCard/ProductCard.vue';
import { useCustomContent } from '../../composables/useCustomContent';

// Fetch products from category 53
const { fetchProducts: fetch53, data: data53 } = useProducts('products-53');
await fetch53({ categoryId: '53' });
const products53 = computed(() => data53.value?.products.slice(0, 4) || []);

// Fetch products from category 83
const { fetchProducts: fetch83, data: data83 } = useProducts('products-83');
await fetch83({ categoryId: '83' });
const products83 = computed(() => data83.value?.products || []);

const {
  customImageTextBlock_productKorn_kornBottleContent,
  customImageTextBlockproductKorn_ausgezeichnetContent,
  customImageTextBlockproductKorn_herstellungContent,
} = useCustomContent();

definePageMeta({
  layout: 'default',
  pageType: 'content',
});

const infoBoxItems = [
  {
    image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/100__Natu_rlich_korn.png',
    imageAlt: '100% natürliche Zutaten',
    title: 'Alles natürlich',
    description:
      'Unser Korn braucht keine Showeffekte. Nur sauber gebrannter Alkohol aus bestem Weizen und Wasser – fertig. Das Ergebnis: ein klarer, ehrlicher Korn, der genauso schmeckt, wie Korn schmecken soll. Pur, mild, schnörkellos und richtig gut.',
  },
  {
    image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/made-in-germany-korn.png',
    imageAlt: 'Made in Germany',
    title: 'Regional hergestellt',
    description:
      'Kornfetti Korn ist zu 100 Prozent ein Kind der Heimat. Der Weizen kommt komplett aus deutschem Anbau, die Verarbeitung, das Brennen und die Abfüllung passieren ebenfalls hierzulande. Kurze Wege, volle Transparenz und Qualität, die man nicht erklären muss – man schmeckt sie.',
  },
  {
    image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/ab-30-euro-korn.png',
    imageAlt: 'Ab 30 € free',
    title: 'Versandkostenfrei',
    description:
      'Ab 30 Euro landet Kornfetti kostenlos bei euch zu Hause. Vier Flaschen reichen schon – oder ihr bestellt direkt als Clique und teilt euch die Freude. In jedem Fall: Korn kommt. Prost!',
  },
];
</script>

<style>
.produkte-korn-page {
  [data-testid='product-card'] {
    background-color: #000;
    border: 1px solid #000;
    a,
    span,
    div {
      color: #fff;
      border-top: none;
    }
    button {
      background-color: #f3b26d;
      border-color: #f3b26d;
      &:hover {
        background-color: #f3b26d;
        border-color: #f3b26d;
      }
    }
  }
  .custom-product-section {
    [data-testid='product-card'] {
      div {
        align-items: center;
      }
    }
  }
}
</style>
