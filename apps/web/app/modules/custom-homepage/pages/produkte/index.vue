<template>
  <div class="max-w-screen-xl mx-auto px-4 md:px-8 py-8 md:py-16">
    <h1
      class="mb-4 typography-headline-1 text-3xl pt-4 bg-white xs:text-center md:text-left"
      style="font-size: clamp(2rem, 8vw, 3rem)"
    >
      Unsere Produkte
    </h1>
    <div class="md:hidden bg-white z-9">
      <SfButton variant="tertiary" @click="isOpen = true" class="w-full">
        <template #prefix>
          <SfIconTune />
        </template>
        Filter & Sortieren
      </SfButton>
    </div>

    <main class="max-w-screen-xl mx-auto py-4 flex">
      <!-- Filters Sidebar (Desktop) -->
      <aside class="hidden md:block w-1/4 pr-8 self-start sticky top-28">
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
    <SfDrawer v-model="isOpen" placement="left" class="md:hidden bg-white z-50">
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

const route = useRoute();
const { data, fetchProducts, loading } = useProducts();
const products = computed(() => data.value?.products ?? []);
const isOpen = ref(false);
// const showScrollToTop = ref(false);

const applyFilters = (filters: { categoryId: string; sort: string }) => {
  fetchProducts({
    categoryId: filters.categoryId,
  });
  isOpen.value = false;
};

// const handleScroll = () => {
//   showScrollToTop.value = window.scrollY > 400;
// };

// Fetch data on server/client before page is rendered
const initialCategoryId = route.query.categoryId as string | undefined;
await fetchProducts({ categoryId: initialCategoryId ?? '40' });

// Initial fetch on component mount
// onMounted(() => {
//   window.addEventListener('scroll', handleScroll);
//   const productId = route.query.categoryId as string | undefined;

//   if (productId) {
//     // If an ID is in the URL, fetch only that product.
//     // The `id` parameter /produkte?id=123
//     fetchProducts({ categoryId: productId });
//   } else {
//     // Otherwise, fetch with default category.
//     fetchProducts({ categoryId: '40' });
//   }
// });

definePageMeta({
  pageType: 'category',
});
</script>
