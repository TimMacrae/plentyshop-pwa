<template>
  <section
    class="custom-image-text-block text-white overflow-hidden"
    :style="{ backgroundColor: data.bgColor || '#000000' }"
  >
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
          <source
            v-if="data?.image?.mobileUrl"
            :srcset="addModernImageExtension(data.image.mobileUrl)"
            media="(max-width: 639px)"
          />

          <!-- Default / fallback image -->
          <NuxtImg
            :src="data?.image?.url || ''"
            :alt="data?.image?.alt || data?.title?.text || 'Image section background'"
            width="1200"
            height="1400"
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover"
          />
        </picture>

        <div class="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 lg:to-black/30" />
      </div>

      <!-- Right side - Content -->
      <div class="relative flex items-center px-8 py-16 lg:px-16 lg:py-24">
        <div class="space-y-6 max-w-2xl">
          <!-- Title -->
          <h2
            v-if="data?.title?.text"
            class="font-bold uppercase tracking-wider typography-headline-1"
            style="font-size: clamp(4rem, 8vw, 7rem); line-height: 1"
            :style="{ color: data.title.color || '#e60073' }"
          >
            {{ data.title.text }}
          </h2>

          <!-- Subtitle -->
          <h3
            v-if="data?.subtitle?.text"
            class="text-2xl lg:text-4xl font-bold"
            :style="{ color: data.subtitle.color || '#ffffff' }"
          >
            {{ data.subtitle.text }}
          </h3>

          <!-- Description -->
          <p
            v-if="data?.description?.text"
            class="text-lg lg:text-xl leading-relaxed"
            :style="{ color: data.description.color || '#ffffff' }"
          >
            {{ data.description.text }}
          </p>

          <!-- CTA -->
          <div v-if="data?.cta?.text" class="pt-4">
            <NuxtLink
              :to="data.cta.link || '#'"
              class="inline-block font-bold px-8 py-4 text-lg rounded-md transition-colors"
              :style="{
                backgroundColor: data.cta.bgColor || '#e60073',
                color: data.cta.color || '#ffffff',
              }"
            >
              {{ data.cta.text }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { CustomImageTextBlockProps } from './types';

defineProps<CustomImageTextBlockProps>();

const { addModernImageExtension } = useModernImage();
</script>

<style scoped>
.custom-image-text-block {
  position: relative;
}
</style>
