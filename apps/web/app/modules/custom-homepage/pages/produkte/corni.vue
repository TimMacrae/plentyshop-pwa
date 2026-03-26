<template>
  <main class="produkte-corni-page">
    <div v-if="bannerCorni"><CustomHero :banner="bannerCorni" /></div>

    <!-- Bottom USP bar -->
    <CustomUSP
      :bgColor="'#FBB816'"
      :textColor="'#000000'"
      :gradiantFrom="'#FBB816'"
      :gradiantVia="'#FBB816'"
      :gradiantTo="'#ffffff'"
    />

    <!-- Products Section -->
    <section class="bg-black py-16 xs:py-16 md:py-32 xs:px-8">
      <div v-if="products92.length" class="custom-product-section">
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
          <ProductCard v-for="(product, index) in products92" :key="index" :product="product" />
        </div>
      </div>
    </section>

    <!-- Image text section -->
    <div v-if="customImageTextBlock_productCorni_corniBottleContent">
      <CustomImageTextBlockReverse :data="customImageTextBlock_productCorni_corniBottleContent" />
    </div>

    <!-- Image text section -->
    <div v-if="customImageTextBlock_productCorni02_corniBottleContent">
      <CustomImageTextBlock :data="customImageTextBlock_productCorni02_corniBottleContent" />
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
        style="font-size: clamp(4rem, 8vw, 5rem); line-height: 1; color: #fbb816"
      >
        Unsere super Shots!
      </h2>
      <div v-if="products83.length" class="custom-product-section">
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
          <ProductCard v-for="(product, index) in products83" :key="index" :product="product" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import ProductCard from '~/components/ui/ProductCard/ProductCard.vue';
import { useCustomContent } from '../../composables/useCustomContent';
import { useCustomBannerCampaign } from '../../composables/useCustomBannerCampaign/useCustomBannerCampaign';
const bannerCorni = useCustomBannerCampaign('bannerCorni');

// Fetch products from category 92
const { fetchProducts: fetch92, data: data92 } = useProducts('products-92');
await fetch92({ categoryId: '92' });
const products92 = computed(() => data92.value?.products.slice(0, 4) || []);

// Fetch products from category 83
const { fetchProducts: fetch83, data: data83 } = useProducts('products-83');
await fetch83({ categoryId: '83' });
const products83 = computed(() => data83.value?.products || []);

const { customImageTextBlock_productCorni_corniBottleContent, customImageTextBlock_productCorni02_corniBottleContent } =
  useCustomContent();

definePageMeta({
  layout: 'default',
  pageType: 'content',
});

const infoBoxItems = [
  {
    image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/corni_100_Natuerlich-1.png',
    imageAlt: '100% natürliche Zutaten',
    title: 'Alles natürlich!',
    description:
      'Ohne künstlichen Zusatzkram. Corni setzt auf ausgewählte, natürliche Zutaten und bringt den Geschmack von gerösteten Cornflakes klar und unverfälscht ins Glas. Sanft, leicht süß und genau die richtige Balance zwischen verspielt und erwachsen.',
  },
  {
    image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/corni_made_in_germany.png',
    imageAlt: 'Made in Germany',
    title: 'Regional hergestellt',
    description:
      'Von der Idee bis zur Flasche bleibt alles hier. Der Weizen für die Basis stammt vollständig aus deutschem Anbau, produziert, abgefüllt und verpackt wird ebenfalls regional. Kurze Wege, volle Kontrolle und echte Qualität.',
  },
  {
    image:
      'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/corni_30_euro_Icon-Kopie.png',
    imageAlt: 'Ab 30 € free',
    title: 'Versandkostenfrei',
    description:
      'Ab einem Bestellwert von 30 Euro übernehmen wir die Versandkosten. Perfekt, um direkt ein paar Flaschen mehr einzupacken oder zusammen mit Freundinnen und Freunden zu bestellen.',
  },
];
</script>

<style>
.produkte-corni-page {
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
      background-color: #fbb816;
      border-color: #fbb816;
      &:hover {
        background-color: #ffffff;
        border-color: #ffffff;
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
