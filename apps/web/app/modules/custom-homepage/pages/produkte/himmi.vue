<template>
  <main class="custom-himmi-page">
    <section class="relative w-full overflow-hidden">
      <!-- Background video -->
      <video
        class="w-full h-[70vh] md:h-[50vh] lg:h-[70vh] object-cover"
        src="https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Pink-Riot-Squad-Trailer-Website-Low-Bitrate-Mobile.mp4"
        autoplay
        muted
        loop
        playsinline
      />
    </section>

    <!-- Bottom USP bar -->
    <CustomUSP :gradiantFrom="'#C51D60'" :gradiantVia="'#C51D60'" :gradiantTo="'#EF87B6'" :textColor="'#FFFFFF'" />

    <!-- Products Section -->
    <section class="bg-black py-16 xs:py-16 md:py-32 xs:px-8">
      <h2
        class="typography-headline-1 text-white mb-12 text-center"
        style="font-size: clamp(3rem, 8vw, 6rem); color: #c51d60"
      >
        Natürlich beliebt
      </h2>
      <div v-if="productListReduced.length" class="custom-product-section">
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
          <ProductCard v-for="(product, index) in productListReduced" :key="index" :product="product" />
        </div>
      </div>
    </section>

    <!-- Image text section -->
    <div v-if="customImageTextBlock_himmiMoreContent">
      <CustomImageTextBlockReverse :data="customImageTextBlock_himmiMoreContent" />
    </div>

    <!-- Image text section -->
    <div v-if="customImageTextBlock_productHimmi_himmiBombContent">
      <CustomImageTextBlock :data="customImageTextBlock_productHimmi_himmiBombContent" />
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
            <h3 class="mb-4 text-xl md:text-2xl font-bold uppercase typography-headline-2 text-white">
              {{ item.title }}
            </h3>

            <!-- Description -->
            <p class="max-w-xs mx-auto text-sm md:text-base leading-relaxed text-white">
              {{ item.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Image text section -->
    <div v-if="customImageTextBlock_productHimmi_pinkRiotSquadContent">
      <CustomImageTextBlockReverse :data="customImageTextBlock_productHimmi_pinkRiotSquadContent" />
    </div>

    <!-- Newsletter Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
      <!-- Left side - Full Cover Image -->
      <div class="relative h-full min-h-[400px] lg:min-h-[700px]">
        <picture>
          <!-- Desktop -->
          <!-- <source
            v-if="data?.image?.desktopUrl"
            :srcset="addModernImageExtension(data.image.desktopUrl)"
            media="(min-width: 1024px)"
          /> -->
          <!-- Tablet -->
          <!-- <source
            v-if="data?.image?.tabletUrl"
            :srcset="addModernImageExtension(data.image.tabletUrl)"
            media="(min-width: 640px)"
          /> -->
          <!-- Mobile -->
          <!-- <source
            v-if="data?.image?.mobileUrl"
            :srcset="addModernImageExtension(data.image.mobileUrl)"
            media="(max-width: 639px)"
          /> -->

          <!-- Default / fallback image -->
          <NuxtImg
            src="https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Kornfetti_Pink_Riot_Squad.jpg"
            :alt="'Image section background'"
            width="1200"
            height="1400"
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover"
          />
        </picture>
      </div>

      <!-- Right side - Content -->
      <div class="relative flex items-center px-8 py-16 lg:px-16 lg:py-24 bg-black">
        <div class="custom-newsletter-section">
          <NewsletterSubscribe
            :name="'NewsletterSubscribe'"
            :type="'NewsletterSubscribe'"
            :content="newsletterContent"
          />
        </div>
      </div>
    </div>
    <!-- Products Section -->
    <section class="bg-black py-16 xs:py-16 md:py-32 xs:px-8">
      <h2
        class="typography-headline-1 text-white pb-12 text-center"
        style="font-size: clamp(3rem, 8vw, 6rem); color: #c51d60"
      >
        Unsere Produkte
      </h2>
      <div v-if="productListReduced.length" class="custom-product-section">
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
          <ProductCard v-for="(product, index) in productListReduced" :key="index" :product="product" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import ProductCard from '~/components/ui/ProductCard/ProductCard.vue';
import { useCustomContent } from '../../composables/useCustomContent';
import NewsletterSubscribe from '~/components/blocks/NewsletterSubscribe/NewsletterSubscribe.vue';

// Fetch products from category 40
const { fetchProducts, data: productsData, loading: productsLoading } = useProducts('homepage-products');
await fetchProducts({ categoryId: '40' });
const productsList = computed(() => productsData.value?.products || []);
const productListReduced = computed(() => [
  ...productsList.value.slice(1, 2),
  ...productsList.value.slice(4, 6),
  ...productsList.value.slice(8, 9),
]);

const {
  customImageTextBlock_productHimmi_pinkRiotSquadContent,
  customImageTextBlock_himmiMoreContent,
  customImageTextBlock_productHimmi_himmiBombContent,
} = useCustomContent();

definePageMeta({
  layout: 'default',
  pageType: 'content',
});

const infoBoxItems = [
  {
    image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/100_Natuerlich.png',
    imageAlt: '100% natürliche Zutaten',
    title: 'Alles natürlich',
    description:
      '„Keine Farbstoffe, keine Geschmacksverstärker, kein Schickimicki!“ Unser Himbeer-Limetten Likör wird ausschließlich aus natürlichen Zutaten hergestellt und bietet somit höchste Qualität in bester Form. Einfach mal probieren und den Geschmack von Fruchtlikör ganz neu erleben!',
  },
  {
    image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/made_in_germany.png',
    imageAlt: 'Made in Germany',
    title: 'Regional hergestellt',
    description:
      'Unser Himbeer-Limetten Likör wird mit Liebe und Sorgfalt in Deutschland hergestellt. Die meisten Zutaten werden regional erzeugt. Zum Beispiel stammt der Weizen im Alkohol zu 100% aus deutschem Anbau. Herstellung, Abfüllung und Verpacken finden hierzulande statt.',
  },
  {
    image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/30_euro_Icon-Kopie.png',
    imageAlt: 'Ab 30 € free',
    title: 'Versandkostenfrei',
    description:
      'Bereits ab 30 EURO liefern wir versandkostenfrei zu euch. Das ist schon ab der vierten Flasche. Es lohnt sich auch, gemeinsam zu bestellen. 😉',
  },
];

const newsletterContent = {
  text: {
    bgColor: '#000',
    title: 'Join the Kornunity',
    htmlDescription:
      'Alle Mitglieder*innen erhalten einen 5 € Willkommens-Gutschein.<br/>Erfahren einmal im Monat von News rund um Kornfetti und erhalten exklusive Angebote.<br/>Kein Spam, nur Hochprozentiges!',
  },
  input: {
    displayNameInput: true,
    nameIsRequired: true,
  },
  button: {
    label: 'ANMELDEN',
  },
};
</script>

<style>
.custom-himmi-page {
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
      background-color: #c51d60;
      border-color: #c51d60;
      &:hover {
        background-color: #e60073;
        border-color: #e60073;
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
  .custom-newsletter-section {
    color: #fff;
    label,
    a {
      color: #fff;
    }
    button {
      background-color: #c51d60;
      border-color: #c51d60;
      &:hover {
        background-color: #e60073;
        border-color: #e60073;
      }
    }
    h2 {
      font-family: 'kornfetti-font', sans-serif;
      font-weight: 700;
      font-size: 5rem;
      line-height: 1.2;
    }
  }
}
</style>
