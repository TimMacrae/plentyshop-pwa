<template>
  <div class="custom-homepage">
    <div v-if="bannerCampaignBombs"><CustomHero :banner="bannerCampaignBombs" /></div>
    <!-- Bomb Grid Section -->
    <div class="bg-black py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="!text-6xl font-bold text-center text-confetti-pink mb-12 typography-headline-1">Kornfetti Bombs</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="bomb in bombs"
            :key="bomb.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group"
          >
            <!-- Image Container -->
            <div class="bg-black">
              <NuxtLink :to="bomb.link">
                <NuxtImg
                  v-if="bomb.image"
                  :src="bomb.image"
                  :alt="bomb.title"
                  class="w-full h-78 object-cover group-hover:opacity-80 transition-opacity duration-300"
                  loading="lazy"
                />
                <div v-else class="w-full h-78 bg-neutral-900 group-hover:opacity-80 transition-opacity duration-300" />
              </NuxtLink>
            </div>

            <!-- Content Container -->
            <div class="p-6 flex-grow flex flex-col bg-black">
              <h3 class="text-xl font-bold text-white">{{ bomb.title }}</h3>
              <p class="mt-1 text-sm flex-grow text-white">{{ bomb.subTitle }}</p>

              <div class="mt-6">
                <UiButton
                  :tag="NuxtLink"
                  :to="bomb.link"
                  class="!bg-confetti-pink hover:!bg-confetti-pink/80 !text-white"
                >
                  Zum Rezept
                </UiButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCustomBannerCampaign } from '../../../composables/useCustomBannerCampaign/useCustomBannerCampaign';
import { useBombs } from '../useBombs';

const bannerCampaignBombs = useCustomBannerCampaign('bannerBombs');
const NuxtLink = resolveComponent('NuxtLink');
const { bombs } = useBombs();

definePageMeta({
  layout: 'default',
  pageType: 'static',
});
</script>
