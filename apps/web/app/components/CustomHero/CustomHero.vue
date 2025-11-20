<template>
  <section class="relative aspect-[5/4] sm:aspect-video lg:aspect-[16/6] overflow-hidden">
    <!-- Responsive background images -->
    <picture>
      <source :srcset="addModernImageExtension(banner.image.wideScreen)" media="(min-width: 1536px)" />
      <source :srcset="addModernImageExtension(banner.image.desktop)" media="(min-width: 1024px)" />
      <source :srcset="addModernImageExtension(banner.image.tablet)" media="(min-width: 640px)" />
      <img
        :src="addModernImageExtension(banner.image.mobile)"
        :alt="banner.image.alt || 'Hero background'"
        class="absolute inset-0 w-full h-full object-cover object-top"
        loading="eager"
        fetchpriority="high"
      />
    </picture>

    <!-- Brightness filter (optional) -->
    <div class="absolute inset-0" :style="{ backgroundColor: `rgba(0,0,0,${1 - banner.image.brightness})` }"></div>

    <!-- Optional gradient or solid overlay -->
    <div
      v-if="banner.text.background"
      class="absolute inset-0"
      :style="{
        backgroundColor: hexToRgba(banner.text.bgcolor, banner.text.bgopacity),
      }"
    ></div>

    <!-- Text Content -->
    <div class="absolute inset-0 flex px-6 pb-10 md:px-10 md:pb-16" :class="positionClasses">
      <div class="max-w-4xl w-full" :class="textAlignClass" :style="{ color: banner.text.color }">
        <!-- Pretitle -->
        <p v-if="banner.text.pretitle" class="uppercase tracking-widest font-semibold mb-3">
          {{ banner.text.pretitle }}
        </p>

        <!-- Title -->
        <h2
          v-if="banner.text.title"
          class="text-4xl md:text-6xl font-extrabold mb-4 typography-headline-1"
          style="font-size: clamp(4rem, 8vw, 7rem)"
        >
          {{ banner.text.title }}
        </h2>

        <!-- Subtitle -->
        <p v-if="banner.text.subtitle" class="text-lg md:text-xl mb-4 opacity-90">
          {{ banner.text.subtitle }}
        </p>

        <!-- Rich description (HTML-safe from Sheets) -->
        <div
          v-if="banner.text.htmlDescription"
          class="text-base md:text-lg mb-6 opacity-90"
          v-html="banner.text.htmlDescription"
        ></div>

        <!-- CTA Button -->
        <div v-if="banner.button?.label" class="mt-8 flex justify-center">
          <SfButton size="lg" :to="banner.button.link" :variant="banner.button.variant || 'primary'" class="!font-bold">
            {{ banner.button.label }}
          </SfButton>
        </div>
      </div>
    </div>
    <!-- Clickable Overlay Link -->
    <NuxtLink
      v-if="banner.button?.link"
      :to="banner.button.link"
      class="absolute inset-0 z-10"
      :aria-label="banner.button.label || banner.text.title"
    />
  </section>
</template>

<script setup lang="ts">
import { SfButton } from '@storefront-ui/vue';
import type { CustomHeroProps } from './types';

const { banner } = defineProps<CustomHeroProps>();

const { addModernImageExtension } = useModernImage();

const positionClasses = computed(() => {
  // Horizontal: left / center / right
  const horizontal =
    banner.text.align === 'left' ? 'justify-start' : banner.text.align === 'right' ? 'justify-end' : 'justify-center';

  // Vertical: top / center / bottom
  const vertical =
    banner.text.justify === 'top' ? 'items-start' : banner.text.justify === 'bottom' ? 'items-end' : 'items-center';

  return `${horizontal} ${vertical}`;
});

const textAlignClass = computed(() => {
  switch (banner.text.textAlignment) {
    case 'left':
      return 'text-left';
    case 'right':
      return 'text-right';
    default:
      return 'text-center';
  }
});

function hexToRgba(hex: string, alpha = 1): string {
  if (!hex) return `rgba(0,0,0,${alpha})`;
  const normalized = hex.replace('#', '');
  const bigint = parseInt(normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
</script>
