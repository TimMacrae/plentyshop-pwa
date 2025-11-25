<template>
  <div class="flex flex-col gap-4 bg-white">
    <!-- Accordion Groups -->
    <SfAccordionItem v-for="(group, index) in filterGroups" :key="index" v-model="group.isOpen">
      <template #summary>
        <div class="flex justify-between p-2 font-medium cursor-pointer select-none">
          <p>{{ group.title }}</p>
          <SfIconChevronLeft :class="group.isOpen ? 'rotate-90' : '-rotate-90'" />
        </div>
      </template>
      <ul class="mt-2">
        <li class="flex py-1" v-for="item in group.items" :key="item.id">
          <SfRadio :id="item.id" name="category-radio" v-model="selectedCategory" :value="item.id" class="p-2" />
          <label :for="item.id" class="ml-2 text-sm cursor-pointer w-full">{{ item.name }}</label>
        </li>
      </ul>
    </SfAccordionItem>

    <!-- Single Items -->
    <div class="flex flex-col gap-1 border-t border-neutral-200 pt-4">
      <div v-for="item in singleFilters" :key="item.id" class="flex items-center py-1">
        <SfRadio :id="item.id" name="category-radio" v-model="selectedCategory" :value="item.id" class="p-2" />
        <label :for="item.id" class="ml-2 text-sm cursor-pointer font-medium w-full">{{ item.name }}</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { SfAccordionItem, SfRadio, SfIconChevronLeft } from '@storefront-ui/vue';

const emit = defineEmits(['update:filters']);

const selectedCategory = ref('40');

const filterGroups = ref([
  {
    title: 'Sorten',
    isOpen: true,
    items: [
      { id: '40', name: 'Alle Produkte' },
      { id: '54', name: 'Himmi' },
      { id: '53', name: 'Korn' },
      { id: '56', name: 'Krauti' },
      { id: '55', name: 'Spliti' },
    ],
  },
  {
    title: 'Größe',
    isOpen: true,
    items: [
      { id: '80', name: 'Alle Größen' },
      { id: '82', name: '0,7 Liter' },
      { id: '83', name: '20 ml Shots' },
      // { id: '81', name: '25 Liter' },
    ],
  },
  {
    title: 'Bundles',
    isOpen: true,
    items: [
      { id: '84', name: 'Alle Bundles' },
      { id: '79', name: 'Himmi Bundles' },
      { id: '76', name: 'Spliti Bundles' },
      { id: '71', name: 'Korn Bundles' },
      { id: '73', name: 'Krauti Bundles' },
      { id: '85', name: 'Mix-Bundles' },
      { id: '41', name: '5+1 Vorteilspakete' },
    ],
  },
]);

const singleFilters = [
  { id: '86', name: 'Sale %' },
  { id: '87', name: 'Geschenke' },
];

// Watch for changes and emit the combined filter values
watch(selectedCategory, (categoryId) => {
  emit('update:filters', { categoryId });
});
</script>
