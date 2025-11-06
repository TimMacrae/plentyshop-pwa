<template>
  <div class="banner-carousel-wrapper w-full h-full">
    <!-- Single Banner (No Carousel) -->
    <Banner v-if="banners.length === 1" v-bind="createBannerBlock(banners[0]!, 0)" class="h-full w-full" />

    <!-- Multiple Banners (Carousel with SfScrollable) -->
    <div v-else-if="banners.length > 1" class="relative h-full">
      <SfScrollable
        v-model:activeIndex="activeIndex"
        class="w-full h-full snap-x snap-mandatory overflow-hidden gap-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        wrapper-class="w-full h-full"
        buttons-placement="floating"
        :drag="{ sensitivity: 20 }"
      >
        <template #previous>
          <SfButton class="hidden md:flex !rounded-full !p-3" variant="secondary" size="lg" @click="onPrev">
            <SfIconChevronLeft />
          </SfButton>
        </template>

        <div
          v-for="(banner, index) in banners"
          :key="`banner-${index}`"
          class="h-full w-full shrink-0 snap-start"
          @mouseover="stopAutoplay"
          @mouseleave="startAutoplay"
        >
          <Banner v-bind="createBannerBlock(banner, index)" class="h-full w-full" />
        </div>

        <template #next>
          <SfButton class="hidden md:flex !rounded-full !p-3" variant="secondary" size="lg" @click="onNext">
            <SfIconChevronRight />
          </SfButton>
        </template>
      </SfScrollable>

      <!-- Custom Pagination Dots -->
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        <button
          v-for="(_, index) in banners"
          :key="`dot-${index}`"
          :aria-label="`Go to slide ${index + 1}`"
          class="w-3 h-3 rounded-full transition-colors"
          :class="activeIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'"
          @click="activeIndex = index"
        />
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-16 text-gray-500">No banners available</div>
  </div>
</template>

<script setup lang="ts">
import { SfScrollable, SfButton, SfIconChevronLeft, SfIconChevronRight } from '@storefront-ui/vue';
import Banner from '~/components/blocks/BannerCarousel/Banner.vue';
import type { BannerCampaign } from '~/modules/custom-homepage/composables/useCustomBannerCampaign/types';

interface Props {
  banners: BannerCampaign[];
  autoplay?: boolean;
  loop?: boolean;
  autoplayDelay?: number;
}

// ... existing script ...
const props = withDefaults(defineProps<Props>(), {
  autoplay: true,
  loop: true,
  autoplayDelay: 5000,
});

const activeIndex = ref(0);
let autoplayInterval: NodeJS.Timeout | null = null;

const createBannerBlock = (banner: BannerCampaign, index: number) => {
  return {
    name: 'Banner' as const,
    type: 'Banner' as const,
    content: { image: banner.image, text: banner.text, button: banner.button },
    index,
    lazyLoading: index > 0 ? 'lazy' : 'eager',
    meta: { uuid: `banner-${index}` },
  } as const;
};

const onNext = () => {
  if (activeIndex.value < props.banners.length - 1) {
    activeIndex.value += 1;
  } else if (props.loop) {
    activeIndex.value = 0;
  }
};

const onPrev = () => {
  if (activeIndex.value > 0) {
    activeIndex.value -= 1;
  } else if (props.loop) {
    activeIndex.value = props.banners.length - 1;
  }
};

const startAutoplay = () => {
  if (!props.autoplay || autoplayInterval) return;
  autoplayInterval = setInterval(() => {
    onNext();
  }, props.autoplayDelay);
};

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<style scoped>
/* Use :deep to style child components */
:deep(.banner-image) {
  @apply w-full h-full object-cover;
}

:deep(.banner-text-content) {
  @apply w-full;
}
</style>
