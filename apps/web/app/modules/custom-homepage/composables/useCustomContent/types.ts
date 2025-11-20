import type { ApiError } from '@plentymarkets/shop-api';

export interface UseCustomContentState {
  data: unknown | null;
  loading: boolean;
  error: ApiError | null;
}

export type FetchCustomContent = (params: unknown) => Promise<unknown | null>;
export type FetchServerCustomContent = (params: unknown) => Promise<unknown | null>;

export interface UseCustomContent {
  data: Readonly<Ref<UseCustomContentState['data']>>;
  loading: Readonly<Ref<boolean>>;
  error: Readonly<Ref<UseCustomContentState['error']>>;
  fetch: FetchCustomContent;
  fetchServer: FetchServerCustomContent;
}

export type UseCustomContentReturn = () => UseCustomContent;
