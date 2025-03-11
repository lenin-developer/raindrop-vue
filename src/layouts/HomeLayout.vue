<script setup lang="ts">
import { ref, provide, reactive } from 'vue';
import type { Ref } from 'vue';
import PanelMenu from '@/sections/home/panelMenu/PanelMenu.vue';
import { PROVIDER_SHOW_PANEL } from '@/consts/keys/provider';

type TypeWidthPanel = {
    min: string,
    ideal: string
    timeTransition: string
}

const initWidthPanel: TypeWidthPanel = {
    min: '200px',
    ideal: '300px',
    timeTransition: '0.0s'
}

const widthPanel = reactive(initWidthPanel) as TypeWidthPanel;
const cursorType = ref('auto') as Ref<string>;
const Panelelement = ref() as Ref<HTMLDivElement>;

const resizePanel = (e: MouseEvent) => {
    widthPanel.ideal = `${e?.clientX}px`
}

const activeResizePanel = () => {
    Panelelement?.value?.addEventListener('mousemove', resizePanel);
    cursorType.value = 'col-resize';
}

const stopResizePanel = () => {
    Panelelement.value.removeEventListener('mousemove', resizePanel);
    cursorType.value = 'auto';
}

const showPanel = () => {
    if (widthPanel.min !== '0px') { // ocultar panel
        widthPanel.min = '0px';
        widthPanel.ideal = '0px';
        widthPanel.timeTransition = '0.2s'
    } else { // mostrar panel
        widthPanel.min = initWidthPanel.min
        widthPanel.ideal = initWidthPanel.ideal
        widthPanel.timeTransition = initWidthPanel.timeTransition
    }
}

provide(PROVIDER_SHOW_PANEL, showPanel);

</script>

<template>
    <div ref="Panelelement" :class="$style.layout" @mouseup="stopResizePanel">
        <PanelMenu @active-resize-panel="activeResizePanel" :cursor-type="cursorType" />
        <main :class="$style.main">
        </main>
    </div>
</template>


<style lang="postcss" module>

.layout {
    display: grid;
    grid-template-columns: clamp(v-bind(widthPanel.min), v-bind(widthPanel.ideal), 425px) 1fr;
    grid-template-rows: 100vh;
    grid-template-areas: "aside main";
    cursor: v-bind(cursorType);
    transition: v-bind(widthPanel.timeTransition) linear;

    @media (--md-viewport) {
        grid-template-columns: 0px 1fr;
        grid-template-areas: "aside main";
    }
}

.main {
    background-color: var(--color-background-main);
    grid-area: main;
}
</style>
