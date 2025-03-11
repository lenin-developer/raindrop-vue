<script setup lang="ts">
import { ref, provide } from 'vue';
import type { Ref } from 'vue';
import PanelMenu from '@/sections/home/panelMenu/PanelMenu.vue';
import { PROVIDER_SHOW_PANEL } from '@/consts/keys/provider';

const widthAsideMenu = ref('300px') as Ref<string>;
const cursorType = ref('auto') as Ref<string>;
const element = ref() as Ref<HTMLDivElement>;


provide(PROVIDER_SHOW_PANEL, widthAsideMenu);


const resizePanel = (e: MouseEvent) => {
    widthAsideMenu.value = `${e?.clientX}px`
}

const activeResixePanel = () => {
    element?.value?.addEventListener('mousemove', resizePanel);
    cursorType.value = 'col-resize';
}

const stopResizePanel = () => {
    element.value.removeEventListener('mousemove', resizePanel);
    cursorType.value = 'auto';
}

</script>

<template>
    <div ref="element" :class="$style.layout" @mouseup="stopResizePanel">
        <PanelMenu @active-resixe-panel="activeResixePanel" :cursor-type="cursorType" />
        <main :class="$style.main">
        </main>
    </div>
</template>

<style lang="postcss" module>
.layout {
    display: grid;
    grid-template-columns: clamp(150px, v-bind(widthAsideMenu), 425px) 1fr;
    grid-template-rows: 100vh;
    grid-template-areas: "aside main";
    cursor: v-bind(cursorType);

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
