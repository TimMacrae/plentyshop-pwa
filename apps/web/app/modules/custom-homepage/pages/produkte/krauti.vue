<template>
  <div class="produkte-krauti-page">
    <div v-if="bannerKrauti"><CustomHero :banner="bannerKrauti" /></div>

    <!-- Bottom USP bar -->
    <CustomUSP
      :bgColor="'#009AA9'"
      :textColor="'#fff'"
      :gradiantFrom="'#009AA9'"
      :gradiantVia="'#009AA9'"
      :gradiantTo="'#49BDCD'"
    />

    <!-- Products Section -->
    <section class="bg-black py-16 xs:py-16 md:py-32 xs:px-8">
      <h2
        class="typography-headline-1 text-white pb-12 text-center"
        style="font-size: clamp(3rem, 8vw, 6rem); color: #009aa9"
      >
        Krauti Produkte
      </h2>
      <div v-if="productListReduced.length" class="custom-product-section">
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
          <ProductCard v-for="(product, index) in productListReduced" :key="index" :product="product" />
        </div>
      </div>
    </section>

    <!-- Image text section -->
    <div v-if="customImageTextBlock_productKrauti_krautiBottleContent">
      <CustomImageTextBlockReverse :data="customImageTextBlock_productKrauti_krautiBottleContent" />
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

    <!-- Products Section -->
    <section class="bg-black py-16 xs:py-16 md:py-32 xs:px-8">
      <h2
        class="typography-headline-1 text-white pb-12 text-center"
        style="font-size: clamp(3rem, 8vw, 6rem); color: #009aa9"
      >
        Unsere Produkte
      </h2>
      <div v-if="productListReduced.length" class="custom-product-section">
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
          <ProductCard v-for="(product, index) in productListReduced" :key="index" :product="product" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useCustomBannerCampaign } from '../../composables/useCustomBannerCampaign/useCustomBannerCampaign';
const bannerKrauti = useCustomBannerCampaign('bannerKrauti');

import ProductCard from '~/components/ui/ProductCard/ProductCard.vue';
import { useCustomContent } from '../../composables/useCustomContent';

// Fetch products from category 40
const { fetchProducts, data: productsData, loading: productsLoading } = useProducts('homepage-products');
await fetchProducts({ categoryId: '40' });
const productsList = computed(() => productsData.value?.products || []);
const productListReduced = computed(() => [
  ...productsList.value.slice(1, 2),
  ...productsList.value.slice(4, 6),
  ...productsList.value.slice(8, 9),
]);

const { customImageTextBlock_productKrauti_krautiBottleContent } = useCustomContent();

definePageMeta({
  layout: 'default',
  pageType: 'content',
});

const infoBoxItems = [
  {
    image:
      'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/100__Natu_rlich_Kopie_big.png',
    imageAlt: '100% natürliche Zutaten',
    title: 'Alles natürlich',
    description:
      'Keine Farbstoffe, keine Zusatzstoffe, kein Quatsch. Unser Kräuterlikör wird aus natürlichen Zutaten angesetzt und bekommt dadurch seinen ehrlichen, würzigen Geschmack ganz ohne künstlichen Schnickschnack.',
  },
  {
    image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/made_in_germany_Kopie.png',
    imageAlt: 'Made in Germany',
    title: 'Regional hergestellt',
    description:
      'Krauti ist ein echtes Zuhause-Kind. Der Likör entsteht komplett in Deutschland, und viele der enthaltenen Kräuter stammen aus regionalem Anbau. Auch der Alkohol basiert auf Weizen aus deutschem Ursprung. Vom Ansetzen über die Reifung bis zur Abfüllung passiert alles hierzulande – präzise, sauber und mit Liebe zum Detail.',
  },
  {
    image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/30_euro_Icon_Kopie_2.png',
    imageAlt: 'Ab 30 € free',
    title: 'Versandkostenfrei',
    description:
      'Ab 30 Euro schicken wir Krauti kostenlos zu euch nach Hause. Das klappt easy schon ab vier Flaschen – oder ihr macht eine kleine Sammelbestellung mit Freundinnen und Freunden. So oder so: Krauti kommt sicher an. Prost!',
  },
];
</script>

<style>
.produkte-krauti-page {
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
      background-color: #009aa9;
      border-color: #009aa9;
      &:hover {
        background-color: #49bdcd;
        border-color: #49bdcd;
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
