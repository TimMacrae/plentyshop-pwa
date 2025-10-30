<template>
  <div class="relative min-h-[576px] lg:min-h-[700px] overflow-hidden">
    <!-- Full Cover Background Image -->
    <NuxtImg
      :src="
        addModernImageExtension(
          content?.image ||
            'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Bomb_trinken_Kornfetti_Hamburg.jpg',
        )
      "
      alt="Hero Background"
      width="1920"
      height="1080"
      class="absolute inset-0 w-full h-full object-cover"
      loading="eager"
      fetchpriority="high"
    />

    <!-- Gradient Overlay for Better Text Readability -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

    <!-- Centered Text Content at Bottom -->
    <div class="relative h-full min-h-[576px] lg:min-h-[700px] flex items-end justify-center">
      <div class="w-full max-w-4xl px-6 py-12 md:px-10 md:py-16 text-center text-white">
        <p
          v-if="content?.subtitle"
          class="typography-text-sm md:typography-text-base font-bold tracking-widest uppercase mb-4"
        >
          {{ content.subtitle }}
        </p>

        <h1 class="typography-display-2 md:typography-display-1 font-bold mb-6">
          {{ content?.title || 'Welcome to Our Store' }}
        </h1>

        <p
          v-if="content?.description"
          class="typography-text-lg md:typography-text-xl mb-8 text-gray-200 max-w-2xl mx-auto"
        >
          {{ content.description }}
        </p>

        <div v-if="content?.ctaText" class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <SfButton
            size="lg"
            :to="content?.ctaLink || '/'"
            class="!bg-pink-500 hover:!bg-pink-600 text-white font-bold"
          >
            {{ content.ctaText }}
          </SfButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SfButton } from '@storefront-ui/vue';
import type { CustomHeroProps } from './types';

defineProps<CustomHeroProps>();

const { addModernImageExtension } = useModernImage();
</script>
