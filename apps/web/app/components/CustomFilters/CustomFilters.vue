<template>
  <div class="flex flex-col gap-8 bg-white">
    <SfAccordionItem v-model="categoryOpen">
      <template #summary>
        <div class="flex justify-between p-2 font-medium">
          <p>Kategorie</p>
          <SfIconChevronLeft :class="categoryOpen ? 'rotate-90' : '-rotate-90'" />
        </div>
      </template>
      <ul class="mt-2">
        <li class="flex py-1" v-for="category in categories" :key="category.id">
          <SfRadio
            :id="category.id"
            name="category-radio"
            v-model="selectedCategory"
            :value="category.id"
            class="p-2"
          />
          <label :for="category.id" class="ml-2 text-sm cursor-pointer">{{ category.name }}</label>
        </li>
      </ul>
    </SfAccordionItem>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { SfAccordionItem, SfRadio, SfIconChevronLeft } from '@storefront-ui/vue';

const emit = defineEmits(['update:filters']);

const categoryOpen = ref(true);
const sortOpen = ref(true);

// Define categories - these IDs should match your PlentyONE category IDs
const categories = [
  { id: '40', name: 'Alle Produkte' },
  { id: '41', name: 'Shots' },
  { id: '42', name: 'Liköre' },
  { id: '53', name: 'Korn' },
];

const selectedCategory = ref(categories[0]?.id ?? '40');

// Watch for changes and emit the combined filter values
watch([selectedCategory], ([categoryId]) => {
  emit('update:filters', { categoryId });
});
</script>
