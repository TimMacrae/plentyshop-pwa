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
    <ClientOnly>
      <!-- CUSTOM FOOTER -->
      <!-- <FooterBlock v-if="!route.meta.isBlockified" /> -->
      <CustomFooter />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
// import FooterBlock from '~/components/blocks/Footer/Footer.vue';
import CustomFooter from '~/components/CustomFooter/CustomFooter.vue';

// const route = useRoute();

usePageTitle();
useStructuredData().setLogoMeta();
</script>
