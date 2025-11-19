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

    <SfAccordionItem v-model="sortOpen">
      <template #summary>
        <div class="flex justify-between p-2 font-medium">
          <p>Sortieren nach</p>
          <SfIconChevronLeft :class="sortOpen ? 'rotate-90' : '-rotate-90'" />
        </div>
      </template>
      <ul class="mt-2">
        <li class="flex py-1" v-for="option in sortOptions" :key="option.value">
          <SfRadio :id="option.value" name="sort-radio" v-model="selectedSort" :value="option.value" class="p-2" />
          <label :for="option.value" class="ml-2 text-sm cursor-pointer">{{ option.label }}</label>
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

// Define sorting options
const sortOptions = [
  { label: 'Name: A-Z', value: 'texts.name_asc' },
  { label: 'Name: Z-A', value: 'texts.name_desc' },
  { label: 'Preis: Günstigste', value: 'sorting.price.avg_asc' },
  { label: 'Preis: Teuerste', value: 'sorting.price.avg_desc' },
];

const selectedCategory = ref(categories[0]?.id ?? '40');
const selectedSort = ref(sortOptions[0]?.value ?? 'texts.name_asc');

// Watch for changes and emit the combined filter values
watch([selectedCategory, selectedSort], ([categoryId, sort]) => {
  emit('update:filters', { categoryId, sort });
});
</script>
