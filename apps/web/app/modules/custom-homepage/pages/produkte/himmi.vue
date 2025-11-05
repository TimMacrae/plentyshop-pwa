<template>
  <div class="himmi-page">
    <h1>Himmi Page</h1>
  </div>
</template>

<script setup lang="ts">
import { SfLoaderCircular } from '@storefront-ui/vue';
import { getBlockLoader } from '~/utils/blocks-imports';
import { defineAsyncComponent, onMounted } from 'vue';

definePageMeta({
  layout: 'default',
  pageType: 'content',
});

// Fetch content on mount
onMounted(async () => {});
</script>
