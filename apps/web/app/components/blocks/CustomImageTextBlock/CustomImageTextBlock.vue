<template>
  <section class="custom-image-text-block bg-black text-white overflow-hidden">
    <div class="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
      <!-- Left side - Full Cover Image -->
      <div class="relative h-full min-h-[400px] lg:min-h-[700px]">
        <NuxtImg
          v-if="data?.image?.url"
          :src="addModernImageExtension(data.image.url)"
          :alt="data?.image?.alt || 'Himmi Bomb'"
          width="1200"
          height="1400"
          loading="lazy"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 lg:to-black/30" />
      </div>

      <!-- Right side - Content -->
      <div class="relative flex items-center px-8 py-16 lg:px-16 lg:py-24">
        <div class="space-y-6 max-w-2xl">
          <h2
            v-if="data?.title"
            class="font-bold text-pink-500 uppercase tracking-wider"
            style="font-size: clamp(2.5rem, 8vw, 5rem); line-height: 1"
          >
            {{ data.title }}
          </h2>

          <h3 v-if="data?.subtitle" class="text-2xl lg:text-4xl font-bold">
            {{ data.subtitle }}
          </h3>

          <p v-if="data?.description" class="text-gray-300 text-lg lg:text-xl leading-relaxed">
            {{ data.description }}
          </p>

          <div v-if="data?.cta?.text" class="pt-4">
            <NuxtLink
              :to="data.cta.link || '#'"
              class="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-4 text-lg rounded-md transition-colors"
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
