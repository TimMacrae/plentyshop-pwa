<template>
  <div
    data-testid="customemailnewsletter"
    class="px-4 py-16 sm:px-6 lg:px-8"
    :style="{ backgroundColor: bgColor, color: textColor }"
  >
    <div class="max-w-xl mx-auto text-center">
      <h2 v-if="title" class="font-bold text-3xl sm:text-4xl text-[#e6007e]">{{ title }}</h2>
      <p v-if="subtitle" class="mt-4 text-lg opacity-90" v-html="subtitle"></p>
      <div class="flex justify-center items-center">
        <iframe
          width="340"
          height="305"
          src="https://e446d248.sibforms.com/serve/MUIFAOQKeD7P8wOjIFqgafQWxWyV8c15oQR9hAlt9Xa21_UFjFi6YctgZk1_rPPMAYHJwR9F4w3nOsHopoG3VutHtTJuXbh3AvglC9CRCuapJwZ4cU1I0nxbgog5hW9rGK-yea4_nqQbvapBg9d_kIzQdRrFArPDZG7GIXeZ1OmIo6t6ACwcQ4M2nm0cb5PhpqkjvkcD00Fgyej-"
          frameborder="0"
          scrolling="no"
          style="display: block; border: none; overflow: hidden; max-width: 100%; padding-top: 0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CustomEmailNewsletterProps } from './types';

const {
  title = 'Join the Kornunity',
  subtitle = 'Alle Mitglieder*innen erhalten einen 5 € Willkommens-Gutschein.<br/>Erfahren einmal im Monat von News rund um Kornfetti und erhalten exklusive Angebote.<br/>Kein Spam, nur Hochprozentiges!',
  bgColor = '#000000',
  textColor = '#FFFFFF',
  btnBgColor = '#e6007e',
  btnTextColor = '#FFF',
} = defineProps<CustomEmailNewsletterProps>();
</script>
