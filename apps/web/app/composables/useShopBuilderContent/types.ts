import type { Ref } from 'vue';

export interface ShopBuilderBlock {
  type: string;
  data: Record<string, unknown>;
}

export interface UseShopBuilderContentState {
  loading: boolean;
  blocks: ShopBuilderBlock[];
  error: Error | null;
}

export interface UseShopBuilderContentReturn {
  loading: Ref<boolean>;
  blocks: Ref<ShopBuilderBlock[]>;
  error: Ref<Error | null>;
  fetchContent: () => Promise<void>;
}
