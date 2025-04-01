import type { InjectionKey } from 'vue';

export type TypeSetResizePanel = {
    showPanel:  () => void,
};
export const PROVIDER_SHOW_PANEL = Symbol() as InjectionKey<TypeSetResizePanel>;