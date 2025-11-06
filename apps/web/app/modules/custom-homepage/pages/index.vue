<template>
  <div class="custom-homepage">
    <!-- Carousel Section -->
    <!-- <div v-if="loading" class="w-full h-full flex items-center justify-center bg-neutral-100">
      <SfLoaderCircular size="xl" />
    </div> -->

    <div v-if="bannerCampaign"><CustomHero :banner="bannerCampaign" /></div>

    <!-- Featured Products Section -->

    <div class="px-16 py-16 bg-black">
      <h2 class="font-bold text-white mb-8 typography-headline-2" style="font-size: clamp(1rem, 8vw, 3rem)">
        Produkte Kornfetti
      </h2>

      <ProductSlider v-if="productsList?.length" :items="productsList" />
    </div>

    <!-- Image text section -->
    <div v-if="customImageTextBlock_himmiBombContent">
      <CustomImageTextBlock :data="customImageTextBlock_himmiBombContent" />
    </div>

    <!-- Products Section -->
    <div v-if="productListReduced.length" class="custom-product-section py-32 xs:py-16 xs:px-8 bg-black">
      <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
        <ProductCard v-for="(product, index) in productListReduced" :key="index" :product="product" />
      </div>
    </div>

    <!-- Image text section -->
    <div v-if="customImageTextBlock_pinkRiotSquadContent">
      <CustomImageTextBlockReverse :data="customImageTextBlock_pinkRiotSquadContent" />
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
            :src="'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Miniaturen_Korn-fetti.jpg'"
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
  </div>
</template>

<script setup lang="ts">
import { useCustomContent } from '../composables/useCustomContent';
import { useCustomBannerCampaign } from '../composables/useCustomBannerCampaign/useCustomBannerCampaign';
import ProductCard from '~/components/ui/ProductCard/ProductCard.vue';
import NewsletterSubscribe from '~/components/blocks/NewsletterSubscribe/NewsletterSubscribe.vue';

const bannerCampaign = useCustomBannerCampaign();

// Fetch products from category 40
const { fetchProducts, data: productsData, loading: productsLoading } = useProducts('homepage-products');
await fetchProducts({ categoryId: '40' });
const productsList = computed(() => productsData.value?.products || []);
const productListReduced = computed(() => [...productsList.value.slice(2, 5), ...productsList.value.slice(6, 7)]);

// Get custom content
const { customImageTextBlock_himmiBombContent, customImageTextBlock_pinkRiotSquadContent } = useCustomContent();
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

definePageMeta({
  layout: 'default',
  pageType: 'static',
});

// Fetch all Shop Builder content on mount
onMounted(async () => {});
</script>

<style>
.custom-homepage {
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
      background-color: #ff0080;
      border-color: #ff0080;
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
      background-color: #ff0080;
      border-color: #ff0080;
      &:hover {
        background-color: #e60073;
        border-color: #e60073;
      }
    }
  }
}
</style>
