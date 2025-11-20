<template>
  <div
    class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
    data-testid="age-verification-overlay"
  >
    <div class="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-xl">
      <template v-if="!isRejected">
        <h2 class="mb-4 text-2xl font-bold typography-headline-2">Altersüberprüfung</h2>
        <p class="mb-6 text-neutral-700">
          Bitte bestätige, dass du mindestens 18 Jahre alt bist, um diese Website zu betreten.
        </p>
        <div class="flex flex-col gap-4">
          <SfButton size="lg" variant="primary" @click="handleConfirmation"> Ja, ich bin 18 oder älter </SfButton>
          <SfButton size="lg" variant="secondary" @click="handleRejection"> Nein, ich bin nicht 18 </SfButton>
        </div>
        <p class="mt-4 text-xs text-neutral-500">
          Kornfetti verkauft und liefert Alkohol nur an Personen, die das 18. Lebensjahr vollendet haben.
        </p>
      </template>
      <template v-else>
        <h2 class="mb-4 text-2xl font-bold typography-headline-2">Zugriff verweigert</h2>
        <p class="mb-6 text-neutral-700">Der Inhalt der Seite ist geblockt, da du nicht über 18 bist.</p>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { SfButton } from '@storefront-ui/vue';

const emit = defineEmits<{
  (e: 'verified'): void;
}>();

const isRejected = ref(false);

const handleConfirmation = () => {
  emit('verified');
};

const handleRejection = () => {
  isRejected.value = true;
};
</script>
