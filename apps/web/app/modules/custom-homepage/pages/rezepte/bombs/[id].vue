<template>
  <div class="bg-black text-white py-16 sm:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
      <NuxtLink to="/rezepte/bombs" class="text-confetti-pink hover:underline inline-block mb-4">
        &larr; Zurück zu den Bombs
      </NuxtLink>
    </div>

    <div v-if="bomb" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <!-- Image Column -->
        <div>
          <NuxtImg
            v-if="bomb.image"
            :src="bomb.image"
            :alt="bomb.title"
            class="w-full h-auto object-cover rounded-lg shadow-lg"
            loading="eager"
            fetchpriority="high"
          />
          <div v-else class="w-full aspect-square bg-neutral-900 rounded-lg shadow-lg" />
        </div>

        <!-- Details Column -->
        <div class="space-y-8">
          <div>
            <h1 class="text-4xl sm:text-5xl font-bold typography-headline-1">{{ bomb.title }}</h1>
            <p v-if="bomb.author" class="mt-2 text-lg text-confetti-pink">by {{ bomb.author }}</p>
          </div>

          <!-- Ingredients -->
          <div>
            <h2 class="text-2xl font-bold border-b border-neutral-700 pb-2 mb-4">Zutaten</h2>
            <div v-html="bomb.zutaten" />
          </div>

          <!-- Preparation -->
          <div>
            <h2 class="text-2xl font-bold border-b border-neutral-700 pb-2 mb-4">Zubereitung</h2>
            <div v-html="bomb.zubereitung" />
          </div>

          <!-- What you need -->
          <div>
            <h2 class="text-2xl font-bold border-b border-neutral-700 pb-2 mb-4">Das brauchst du</h2>
            <p>{{ bomb.dasBrauchstDu }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <h1 class="text-2xl font-bold">Rezept nicht gefunden</h1>
      <NuxtLink to="/rezepte/bombs" class="text-confetti-pink hover:underline mt-4 inline-block">
        Zurück zur Übersicht
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBombs } from '../useBombs';

const route = useRoute();
const { findBombById } = useBombs();

const bombId = Number(route.params.id);
const bomb = findBombById(bombId);

definePageMeta({
  layout: 'default',
  pageType: 'static',
});
</script>
