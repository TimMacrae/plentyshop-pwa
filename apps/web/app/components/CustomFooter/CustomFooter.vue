<template>
  <footer data-testid="custom-footer" class="bg-black text-white font-sans">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 border-t border-neutral-700">
      <!-- Footer Columns -->
      <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Social Column -->
        <div class="flex flex-col items-center sm:items-start">
          <h3 class="font-bold text-lg uppercase tracking-wider typography-headline-2">{{ socialLinks.title }}</h3>
          <div class="flex items-center gap-4 mt-4">
            <a
              v-for="social in socialLinks.links"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.name"
              class="text-neutral-400 hover:text-white transition-colors"
            >
              <component :is="social.icon" class="h-6 w-6" />
            </a>
          </div>
          <NuxtImg
            src="https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Kornfetti_Logo_2025_TT.png"
            alt="Kornfetti Logo"
            class="mt-8 h-12 w-auto"
            loading="lazy"
          />
        </div>

        <!-- Link Columns -->
        <div v-for="column in footerLinkColumns" :key="column.title" class="text-center sm:text-left">
          <h3 class="font-bold text-lg uppercase tracking-wider typography-headline-2">{{ column.title }}</h3>
          <ul class="mt-4 space-y-2">
            <li v-for="link in column.links" :key="link.name">
              <NuxtLink
                :to="link.path"
                :target="link.isExternal ? '_blank' : undefined"
                :rel="link.isExternal ? 'noopener noreferrer' : undefined"
                class="text-neutral-400 hover:text-white transition-colors text-sm"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-16 pt-8 border-t border-neutral-700 text-center text-neutral-500">
        <p class="text-xs">&copy; Copyright {{ new Date().getFullYear() }} | Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { CustomFooterProps } from './types';

defineProps<CustomFooterProps>();

const socialLinks = {
  title: 'Las uns Freunde sein',
  links: [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/Kornfetti/',
      icon: resolveComponent('CustomFooterIconsIconFacebook'),
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCMJ4iKjINOUAz6svI4RUJkA',
      icon: resolveComponent('CustomFooterIconsIconYoutube'),
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kornfetti.korn/?hl=de/',
      icon: resolveComponent('CustomFooterIconsIconInstagram'),
    },
  ],
};

const footerLinkColumns = [
  {
    title: 'Kornfetti',
    links: [
      { name: 'Alle Produkte', path: '/produkte' },
      { name: 'Über Uns', path: '/ueber-uns' },
      { name: 'Events', path: '/events' },
      { name: 'Rezepte', path: '/rezepte' },
      { name: 'Jobs', path: '/jobs' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Kontakt', path: '/kontakt' },
      { name: 'Händleranfrage', path: 'mailto:korntakt@kornfetti.com', isExternal: true },
      { name: 'Kornfetti in deiner Bar', path: 'mailto:korntakt@kornfetti.com', isExternal: true },
      { name: 'Versandkosten', path: '/versandkosten' },
      { name: 'Widerruf', path: '/widerrufsrecht' },
    ],
  },
  {
    title: 'Rechtliches',
    links: [
      { name: 'Impressum', path: '/impressum' },
      { name: 'Datenschutz', path: '/datenschutz' },
      { name: 'AGB', path: '/agb' },
    ],
  },
];
</script>
