<template>
  <main class="produkte-spliti-page">
    <div v-if="bannerSpliti"><CustomHero :banner="bannerSpliti" /></div>

    <!-- Bottom USP bar -->
    <CustomUSP
      :bgColor="'#F38F36'"
      :textColor="'#fff'"
      :gradiantFrom="'#F38F36'"
      :gradiantVia="'#F38F36'"
      :gradiantTo="'#FDE63D'"
    />

    <!-- Products Section -->
    <section class="bg-black py-16 xs:py-16 md:py-32 xs:px-8">
      <div v-if="products55.length" class="custom-product-section">
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
          <ProductCard v-for="(product, index) in products55" :key="index" :product="product" />
        </div>
      </div>
    </section>

    <!-- Image text section -->
    <div v-if="customImageTextBlock_productSpliti_splitiBottleContent">
      <CustomImageTextBlockReverse :data="customImageTextBlock_productSpliti_splitiBottleContent" />
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
        style="font-size: clamp(4rem, 8vw, 5rem); line-height: 1; color: #f38f36"
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
const bannerSpliti = useCustomBannerCampaign('bannerSpliti');

// Fetch products from category 55
const { fetchProducts: fetch55, data: data55 } = useProducts('products-55');
await fetch55({ categoryId: '55' });
const products55 = computed(() => data55.value?.products.slice(0, 4) || []);

// Fetch products from category 83
const { fetchProducts: fetch83, data: data83 } = useProducts('products-83');
await fetch83({ categoryId: '83' });
const products83 = computed(() => data83.value?.products || []);

const { customImageTextBlock_productSpliti_splitiBottleContent } = useCustomContent();

definePageMeta({
  layout: 'default',
  pageType: 'content',
});

const infoBoxItems = [
  {
    image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/100__Natu_rlich.png',
    imageAlt: '100% natürliche Zutaten',
    title: 'Alles natürlich!',
    description:
      'Keine Farbstoffe, keine Geschmacksverstärker, kein Schickimicki. Unser Spliti wird aus echten Zutaten gemacht – natürlich, frisch und ohne Gedöns. So entsteht ein Geschmack, der nicht künstlich knallt, sondern richtig gut ist. Einfach probieren und Fruchtlikör mal so erleben, wie er eigentlich schmecken sollte.',
  },
  {
    image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/made_in_germany_splitti.png',
    imageAlt: 'Made in Germany',
    title: 'Regional hergestellt',
    description:
      'Unser Maracuja-Vanille Likör entsteht komplett in Deutschland – mit viel Liebe, Sorgfalt und kurzen Wegen. Die Zutaten kommen aus der Region. Der Weizen im Alkohol? Zu 100 % aus deutschem Anbau. Produktion, Abfüllung und Verpackung finden hier im Land statt. Ehrlich, nachvollziehbar und ohne großen Klimabimbam.',
  },
  {
    image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/30_euro_Icon_Kopie.png',
    imageAlt: 'Ab 30 € free',
    title: 'Versandkostenfrei',
    description:
      'Ab 30 Euro liefern wir versandkostenfrei zu euch – das klappt schon ab der vierten Flasche. Und wenn ihr zusammen bestellt, wird’s noch entspannter. Prost darauf!',
  },
];
</script>

<style>
.produkte-spliti-page {
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
      background-color: #f38f36;
      border-color: #f38f36;
      &:hover {
        background-color: #fde63d;
        border-color: #fde63d;
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
