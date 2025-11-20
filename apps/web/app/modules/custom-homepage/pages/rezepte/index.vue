<template>
  <div class="custom-homepage">
    <div v-if="bannerCampaignRezepte"><CustomHero :banner="bannerCampaignRezepte" /></div>
    <!-- Recipe Grid Section -->
    <div class="bg-black py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="!text-6xl font-bold text-center text-[#C51D60] mb-12 typography-headline-1">Hammer Rezepte</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="recipe in recipes"
            :key="recipe.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group"
          >
            <!-- Image Container -->
            <div class="bg-black">
              <NuxtLink :to="recipe.link">
                <NuxtImg
                  :src="recipe.image"
                  :alt="recipe.title"
                  class="w-full h-78 object-cover group-hover:opacity-80 transition-opacity duration-300"
                  loading="lazy"
                />
              </NuxtLink>
            </div>

            <!-- Content Container -->
            <div class="p-6 flex-grow flex flex-col bg-black">
              <h3 class="text-xl font-bold text-white">{{ recipe.title }}</h3>
              <p class="mt-1 text-sm flex-grow text-white">{{ recipe.subTitle }}</p>

              <div class="mt-6">
                <SfButton :tag="NuxtLink" :to="recipe.link" class="!bg-[#C51D60] hover:!bg-[#a1174e] !text-white">
                  Zum Rezept
                </SfButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCustomBannerCampaign } from '../../composables/useCustomBannerCampaign/useCustomBannerCampaign';
import { SfButton } from '@storefront-ui/vue';
import { useRecipes } from './useRecipes';

const bannerCampaignRezepte = useCustomBannerCampaign('bannerRezepte');
const NuxtLink = resolveComponent('NuxtLink');
const { recipes } = useRecipes();

definePageMeta({
  layout: 'default',
  pageType: 'static',
});

onMounted(async () => {});
</script>
