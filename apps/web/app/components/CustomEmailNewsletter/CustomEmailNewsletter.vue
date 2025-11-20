<template>
  <div
    data-testid="customemailnewsletter"
    class="px-4 py-16 sm:px-6 lg:px-8"
    :style="{ backgroundColor: bgColor, color: textColor }"
  >
    <div class="max-w-xl mx-auto text-center">
      <h2 v-if="title" class="font-bold text-3xl sm:text-4xl">{{ title }}</h2>
      <p v-if="subtitle" class="mt-4 text-lg opacity-90" v-html="subtitle"></p>

      <form ref="formRef" @submit.prevent="submitForm" class="mt-8 text-left">
        <!-- Success Message -->
        <div
          v-if="successMessage"
          class="flex items-center gap-2 p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 border border-green-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          <span>{{ successMessage }}</span>
        </div>

        <!-- Error Message -->
        <div
          v-if="errorMessage"
          class="flex items-center gap-2 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 border border-red-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clip-rule="evenodd"
            />
          </svg>
          <span>{{ errorMessage }}</span>
        </div>

        <div class="space-y-4">
          <SfInput v-model="formData.VORNAME" name="VORNAME" placeholder="Vorname" />
          <SfInput v-model="formData.EMAIL" name="EMAIL" type="email" placeholder="E-Mail" required />
          <!-- reCAPTCHA Widget -->
          <div ref="recaptchaContainer" class="g-recaptcha" :data-sitekey="recaptchaSiteKey"></div>
          <SfButton type="submit" :disabled="loading" :style="{ backgroundColor: btnBgColor, color: btnTextColor }">
            <SfLoaderCircular v-if="loading" size="sm" />
            <span v-else>Anmelden</span>
          </SfButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { SfInput, SfButton, SfLoaderCircular } from '@storefront-ui/vue';
import type { CustomEmailNewsletterProps } from './types';
declare global {
  interface Window {
    grecaptcha: {
      reset: () => void;
      getResponse: () => string;
    };
  }
}
const runtimeConfig = useRuntimeConfig();
const formActionUrl = runtimeConfig.public.brevoFormActionUrl;
const recaptchaSiteKey = runtimeConfig.public.recaptchaSiteKey;

const {
  title = 'Join the Kornunity',
  subtitle = 'Alle Mitglieder*innen erhalten einen 5 € Willkommens-Gutschein.<br/>Erfahren einmal im Monat von News rund um Kornfetti und erhalten exklusive Angebote.<br/>Kein Spam, nur Hochprozentiges!',
  bgColor = '#000000',
  textColor = '#FFFFFF',
  btnBgColor = '#C51D60',
  btnTextColor = '#FFF',
} = defineProps<CustomEmailNewsletterProps>();

const formData = reactive({
  VORNAME: '',
  EMAIL: '',
});

const loading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const formRef = ref<HTMLFormElement | null>(null);
async function submitForm() {
  successMessage.value = '';
  errorMessage.value = '';

  // Validate reCAPTCHA before submitting
  if (window.grecaptcha && window.grecaptcha.getResponse() === '') {
    errorMessage.value = 'Bitte bestätige, dass du kein Roboter bist.';
    return;
  }

  loading.value = true;

  if (!formRef.value) {
    loading.value = false;
    return;
  }

  // FormData will now automatically include all fields from the form,
  // including the 'g-recaptcha-response' token.
  const body = new FormData(formRef.value);

  try {
    const response = await fetch(formActionUrl, {
      method: 'POST',
      body,
      mode: 'no-cors', // Brevo forms often require this for client-side submission
    });
    if (!response.ok && response.type !== 'opaque') {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Since 'no-cors' gives an opaque response, we can't check status.
    // We optimistically assume success.
    successMessage.value = 'Deine Anmeldung war erfolgreich. Herzlich Willkommen in der Kornunity!';
    formData.VORNAME = '';
    formData.EMAIL = '';
  } catch (error) {
    errorMessage.value = 'Deine Anmeldung konnte nicht gespeichert werden. Bitte versuche es erneut.';
    console.error('Newsletter form submission error:', error);
  } finally {
    loading.value = false;
    // Reset reCAPTCHA widget if it exists
    if (window.grecaptcha) {
      window.grecaptcha.reset();
    }
  }
}
// Inject Brevo's required styles and fonts into the page head
useHead({
  script: [
    {
      src: 'https://www.google.com/recaptcha/api.js',
      async: true,
      defer: true,
    },
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://sibforms.com/forms/end-form/build/sib-styles.css',
    },
  ],
});
</script>
