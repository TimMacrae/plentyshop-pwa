<template>
  <div data-testid="custom-usp" :style="wrapperStyle">
    <div
      class="max-w-6xl mx-auto px-6 py-4 md:py-6 flex flex-col items-center gap-3 md:flex-row md:justify-between text-sm md:text-base tracking-[0.14em] uppercase"
    >
      <div v-for="usp in uspItemsComputed" :key="usp" class="flex items-center gap-2 md:gap-3">
        <!-- check icon -->
        <span class="inline-flex items-center justify-center w-6 h-6 rounded-full border" :style="iconBorderStyle">
          <span class="-mt-[2px] text-lg leading-none">✓</span>
        </span>
        <span class="whitespace-nowrap">
          {{ usp }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CustomUSPProps } from './types';
const props = defineProps<CustomUSPProps>();

const uspItemsComputed = ['100% natürliche Zutaten', 'Regional hergestellt', 'Versandkostenfrei ab 30 €'];
const wrapperStyle = computed(() => {
  const styles: Record<string, string> = {};
  styles.color = props.textColor || '#FFFFFF';

  if (props.gradiantFrom) {
    const via = props.gradiantVia ? `, ${props.gradiantVia}` : '';
    const to = props.gradiantTo ? `, ${props.gradiantTo}` : '';
    styles.backgroundImage = `linear-gradient(to bottom, ${props.gradiantFrom}${via}${to})`;
  } else {
    styles.backgroundColor = props.bgColor || '#000000';
  }

  return styles;
});

const iconBorderStyle = computed(() => ({
  borderColor: props.textColor ? `${props.textColor}80` : 'rgba(255, 255, 255, 0.8)',
}));
</script>
