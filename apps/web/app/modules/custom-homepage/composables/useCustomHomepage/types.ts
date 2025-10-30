import type { Ref } from 'vue';

export interface UseCustomHomepageState {
  loading: boolean;
}

export interface UseCustomHomepageReturn {
  loading: Ref<boolean>;
  fetchHomepageData: () => Promise<void>;
}
