<template>
  <div class="producktwelt-page">
    <EditablePage :identifier="'producktwelt'" :type="'immutable'" />
    <h1>Producktwelt Page</h1>
    <!-- Your custom content here -->
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
  pageType: 'content',
});
</script>
