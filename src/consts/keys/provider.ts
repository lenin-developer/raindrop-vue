import type { InjectionKey } from 'vue';

export type TypeSetResizePanel = () => void;
export const PROVIDER_SHOW_PANEL = Symbol() as InjectionKey<TypeSetResizePanel>;