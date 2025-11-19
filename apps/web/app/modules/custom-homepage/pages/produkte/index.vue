<template>
  <div class="max-w-screen-xl mx-auto px-4 md:px-8 py-8 md:py-16">
    <h1 class="mb-4 typography-headline-1 text-3xl" style="font-size: clamp(2rem, 8vw, 3rem)">Unsere Produkte</h1>
    <div class="md:hidden">
      <SfButton variant="tertiary" @click="isOpen = true" class="w-full">
        <template #prefix>
          <SfIconTune />
        </template>
        Filter & Sortieren
      </SfButton>
    </div>

    <main class="max-w-screen-xl mx-auto py-4 flex">
      <!-- Filters Sidebar (Desktop) -->
      <aside class="hidden md:block w-1/4 pr-8">
        <CustomFilters @update:filters="applyFilters" />
      </aside>

      <!-- Product Grid -->
      <div class="flex-1">
        <div v-if="loading" class="flex justify-center items-center h-96">
          <SfLoaderCircular size="lg" />
        </div>
        <div v-else-if="products && products.length > 0" class="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <ProductCard v-for="(product, index) in products" :key="index" :product="product" />
        </div>
        <div v-else class="text-center h-96 flex items-center justify-center">
          <p>Keine Produkte für die ausgewählten Filter gefunden.</p>
        </div>
      </div>
    </main>

    <!-- Filters Drawer (Mobile) -->
    <SfDrawer v-model="isOpen" placement="left" class="md:hidden">
      <header class="flex items-center justify-between p-4 border-b border-neutral-200">
        <h2 class="font-bold typography-headline-4">Filter & Sortieren</h2>
        <SfButton variant="tertiary" @click="isOpen = false" class="!p-2">
          <SfIconClose />
        </SfButton>
      </header>
      <div class="p-4">
        <CustomFilters @update:filters="applyFilters" />
      </div>
    </SfDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { SfButton, SfDrawer, SfIconTune, SfIconClose, SfLoaderCircular } from '@storefront-ui/vue';
import ProductCard from '~/components/ui/ProductCard/ProductCard.vue';
import Filter from '~/components/CategoryFilters/Filter.vue';

const { data, fetchProducts, loading } = useProducts('plp');
const products = computed(() => data.value?.products ?? []);
const isOpen = ref(false);

const applyFilters = (filters: { categoryId: string; sort: string }) => {
  fetchProducts({
    categoryId: filters.categoryId,
    // sorting: filters.sort,
  });
  isOpen.value = false; // Close drawer after applying filters on mobile
};

// Initial fetch on component mount
onMounted(() => {
  // Fetch with default filters from the Filters component sorting: 'texts.name_asc'
  fetchProducts({ categoryId: '40' });
});

definePageMeta({
  pageType: 'category',
});
</script>
