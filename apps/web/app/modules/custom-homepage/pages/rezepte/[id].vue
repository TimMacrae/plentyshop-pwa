<template>
  <div class="bg-black text-white py-16 sm:py-24">
    <div v-if="recipe" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <!-- Image Column -->
        <div>
          <NuxtImg
            :src="recipe.image"
            :alt="recipe.title"
            class="w-full h-auto object-cover rounded-lg shadow-lg"
            loading="eager"
            fetchpriority="high"
          />
        </div>

        <!-- Details Column -->
        <div class="space-y-8">
          <h1 class="text-4xl sm:text-5xl font-bold typography-headline-1">{{ recipe.title }}</h1>

          <!-- Ingredients -->
          <div>
            <h2 class="text-2xl font-bold border-b border-neutral-700 pb-2 mb-4">Zutaten</h2>
            <div class="" v-html="recipe.zutaten"></div>
          </div>

          <!-- Preparation -->
          <div>
            <h2 class="text-2xl font-bold border-b border-neutral-700 pb-2 mb-4">Zubereitung</h2>
            <div class="" v-html="recipe.zubereitung"></div>
          </div>

          <!-- What you need -->
          <div>
            <h2 class="text-2xl font-bold border-b border-neutral-700 pb-2 mb-4">Das brauchst du</h2>
            <p>{{ recipe.dasBrauchstDu }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <h1 class="text-2xl font-bold">Rezept nicht gefunden</h1>
      <NuxtLink to="/rezepte" class="text-[#C51D60] hover:underline mt-4 inline-block">Zurück zur Übersicht</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRecipes } from './useRecipes';

const route = useRoute();
const { findRecipeById } = useRecipes();

const recipeId = Number(route.params.id);
const recipe = findRecipeById(recipeId);

definePageMeta({
  layout: 'default',
  pageType: 'static',
});
</script>
