<template>
  <div>
    <UiSimplifiedHeader />
    <main>
      <slot />
    </main>
    <NuxtLazyHydrate when-idle>
      <Cookiebar />
      <PreviewMode />
    </NuxtLazyHydrate>
    <!-- CUSTOM FOOTER (replaces <UiFooterBlocks />) -->
    <ClientOnly>
      <CustomFooter />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import CustomFooter from '~/components/CustomFooter/CustomFooter.vue';

usePageTitle();
useStructuredData().setLogoMeta();
</script>
