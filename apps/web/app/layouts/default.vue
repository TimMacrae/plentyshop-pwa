<template>
  <div>
    <!-- CUSTOM HEADER: upstream uses <UiHeaderBlocks />, we keep the customized
         UiHeader so the custom navigationLinks nav is rendered -->
    <UiHeader />

    <NarrowContainer v-if="breadcrumbs?.length" class="p-4">
      <LazyUiBreadcrumbs :breadcrumbs="breadcrumbs" />
    </NarrowContainer>
    <main>
      <slot />
    </main>
    <UiNavbarBottom v-if="viewport.isLessThan('lg')" />
    <Cookiebar />
    <PreviewMode />
    <!-- CUSTOM FOOTER (replaces <UiFooterBlocks />) -->
    <ClientOnly>
      <CustomFooter />
    </ClientOnly>
    <QuickCheckout v-if="isOpen" :product="product" />
  </div>
</template>

<script setup lang="ts">
import type { DefaultLayoutProps } from '~/layouts/types';
import CustomFooter from '~/components/CustomFooter/CustomFooter.vue';

defineProps<DefaultLayoutProps>();

const { setLogoMeta } = useStructuredData();
const { isOpen, product } = useQuickCheckout();
const viewport = useViewport();
setLogoMeta();
</script>
