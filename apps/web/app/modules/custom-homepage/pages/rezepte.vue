<template>
  <div class="custom-homepage">
    <div v-if="bannerCampaignOne"><CustomHero :banner="bannerCampaignOne" /></div>

    <h1>REZEPTE</h1>
    <!-- Brand Promise Section -->
    <div class="bg-black px-4 py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="!text-3xl font-bold text-white sm:!text-5xl typography-headline-2 tracking-wider">
          {{ customBrandPromiseContent.title }}
        </h2>
        <p class="mt-4 text-lg text-white tracking-wider">
          {{ customBrandPromiseContent.text }}
        </p>
      </div>
      <div class="mt-12 flex items-center justify-center gap-x-8">
        <NuxtImg
          v-for="logo in customBrandPromiseContent.logos"
          :key="logo"
          :src="logo"
          :alt="logo"
          height="200"
          loading="lazy"
          class="h-12 md:h-24 w-auto"
        />
      </div>
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

const bannerCampaignOne = useCustomBannerCampaign('campaignOne');
const bannerCampaignTwo = useCustomBannerCampaign('campaignTwo');
const bannerCampaignThree = useCustomBannerCampaign('campaignThree');

// Fetch products from category 40
const { fetchProducts, data: productsData, loading: productsLoading } = useProducts('homepage-products');
await fetchProducts({ categoryId: '40' });
const productsList = computed(() => productsData.value?.products || []);
const productListReduced = computed(() => [...productsList.value.slice(2, 5), ...productsList.value.slice(6, 7)]);

// Get custom content
const {
  customBrandPromiseContent,
  customImageTextBlock_eventsContent,
  customImageTextBlock_rezepteContent,
  customImageTextBlock_aboutUsContent,
} = useCustomContent();
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
      letter-spacing: 0.3rem;
    }
  }
}
</style>
