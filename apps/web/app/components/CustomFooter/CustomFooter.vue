<template>
  <footer data-testid="custom-footer" class="bg-black text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col items-center gap-y-12">
        <!-- Partner Logos -->
        <div class="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12">
          <a v-for="logo in partnerLogos" :key="logo.alt" :href="logo.url" target="_blank" rel="noopener noreferrer">
            <NuxtImg :src="logo.src" :alt="logo.alt" class="h-8 sm:h-10 lg:h-12 w-auto object-contain" loading="lazy" />
          </a>
        </div>

        <!-- Footer Links -->
        <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-neutral-400">
          <NuxtLink
            v-for="link in footerLinks"
            :key="link.name"
            :to="link.path"
            class="hover:text-white transition-colors"
          >
            {{ link.name }}
          </NuxtLink>
        </nav>

        <!-- Copyright -->
        <div class="text-center text-neutral-500">
          <NuxtImg
            src="https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Kornfetti/Logo/kornfetti_logo_claim_weiss.png"
            alt="Kornfetti Logo"
            class="h-10 w-auto mx-auto mb-4"
            loading="lazy"
          />
          <p class="text-xs">&copy; Copyright {{ new Date().getFullYear() }} | Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { CustomFooterProps } from './types';

defineProps<CustomFooterProps>();
const partnerLogos = [
  {
    src: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/NEW_2023/LEH_Logos/Budni-Logo.png',
    alt: 'Budni',
    url: '#',
  },
  {
    src: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/NEW_2023/LEH_Logos/Rewe_Logo-website-1.png',
    alt: 'Rewe',
    url: '#',
  },
  {
    src: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/NEW_2023/LEH_Logos/edeka-logo-vector-png-chef-hat-vector-png-1897-300x65.jpeg',
    alt: 'Edeka',
    url: '#',
  },
  {
    src: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/NEW_2023/LEH_Logos/Logo_famila.webp',
    alt: 'Famila',
    url: '#',
  },
];

const footerLinks = [
  { name: 'Widerrufsrecht', path: '/widerrufsrecht' },
  { name: 'Impressum', path: '/impressum' },
  { name: 'Datenschutzerklärung', path: '/datenschutz' },
  { name: 'AGB', path: '/agb' },
  { name: 'Kontakt', path: '/kontakt' },
];
</script>
