<template>
  <div class="custom-homepage">
    <!-- Image text section -->
    <div v-if="customImageTextBlockKontakt_kontaktContent">
      <CustomImageTextBlockReverse :data="customImageTextBlockKontakt_kontaktContent" />
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
      <div class="relative w-full flex items-center justify-center px-8 py-16 lg:px-16 lg:py-24 bg-black">
        <div class="custom-newsletter-section">
          <!-- <NewsletterSubscribe
            :name="'NewsletterSubscribe'"
            :type="'NewsletterSubscribe'"
            :content="newsletterContent"
          /> -->
          <CustomEmailNewsletter :bgColor="'#000000'" :textColor="'#FFFFFF'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCustomContent } from '../composables/useCustomContent';

// Get custom content
const { customImageTextBlockKontakt_kontaktContent } = useCustomContent();

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
