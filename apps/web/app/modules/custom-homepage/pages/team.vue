<template>
  <div class="bg-black py-16 sm:py-24">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="!text-6xl font-bold text-center text-confetti-pink mb-12 typography-headline-1">Das Team</h1>
      <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-sm sm:max-w-none mx-auto">
        <div
          v-for="member in team"
          :key="member.name"
          class="sm:aspect-portrait sm:flex sm:items-center sm:justify-center transition-transform duration-300 hover:scale-105"
        >
          <NuxtImg
            :src="member.image"
            :alt="member.name"
            class="w-full h-auto sm:w-auto sm:max-w-full sm:max-h-full object-contain rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const imageBaseUrl = 'https://cdn02.plentyone.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/';

const team = [
  { name: 'Nico – Der Ideenjäger & Gründer', image: `${imageBaseUrl}278f9b7f-cc07-42b3-ab88-a60973f4a59c.png` },
  { name: 'Julian – Der Stratege & Teamleader', image: `${imageBaseUrl}227306B1-D16D-453C-8904-44A6752DFE3B.PNG` },
  { name: 'Corni – Der Pixel Poet', image: `${imageBaseUrl}19DAA94F-1377-41B5-A2FA-AC2AC14F66F8.PNG` },
  { name: 'Danny – Die Social Media Maschine', image: `${imageBaseUrl}C3ABFBA3-87E1-4B97-93F0-B429B2598C9B.PNG` },
  {
    name: 'Flo – Der verrückte Vertriebs Super Sajajin',
    image: `${imageBaseUrl}74B18415-98AB-4728-8139-FED7CF3FAD41.PNG`,
  },
  { name: 'Jona – Der Trend Radar', image: `${imageBaseUrl}3B14CBAC-0434-4840-8A9B-2EA163D0B9E8.PNG` },
];

definePageMeta({
  layout: 'default',
  pageType: 'static',
});
</script>
