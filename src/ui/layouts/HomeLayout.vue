<script setup lang="ts">
import { ref, provide, reactive } from 'vue';
import type { Ref } from 'vue';
//----
import { PROVIDER_SHOW_PANEL } from '@/env/constants/providers/provider';


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
const flagShouldTheEventBeExecuted = ref(false) as Ref<boolean>;
const isPanelOpen = ref(true) as Ref<boolean>

const widthMin = initWidthPanel.min.substring(0, 3)
const minResize = Number(widthMin) / 4;

defineSlots<{
    panelMenu(props: { activeResizePanel: () => void, cursorType: string, stopResizePanel: () => void }): any,
    headerOpcion(props: { showPanel: () => void, isPanelOpen: boolean }): any,
    mainContent(props: {}): any
}>()

const resizePanel = (e: MouseEvent) => {
    if (e?.clientX < minResize) {
        showPanel()
    } else {
        widthPanel.ideal = `${e?.clientX}px`
    }
}

const activeResizePanel = () => {
    Panelelement?.value?.addEventListener('mousemove', resizePanel);
    cursorType.value = 'col-resize';
    widthPanel.timeTransition = '0.0s'
    flagShouldTheEventBeExecuted.value = true;
}

const stopResizePanel = () => {
    if (flagShouldTheEventBeExecuted.value) {
        Panelelement.value.removeEventListener('mousemove', resizePanel);
        cursorType.value = 'auto';
        flagShouldTheEventBeExecuted.value = false;
    }
}

const showPanel = () => {
    widthPanel.timeTransition = '0.2s';

    if (widthPanel.min !== '0px') { // ocultar panel
        stopResizePanel()
        widthPanel.min = '0px';
        widthPanel.ideal = '0px';
        isPanelOpen.value = false;
    } else { // mostrar panel
        widthPanel.min = '200px';
        widthPanel.ideal = '300px';
        isPanelOpen.value = true;
    }
}

provide(PROVIDER_SHOW_PANEL, { showPanel });

</script>

<template>
    <div ref="Panelelement" :class="$style.layout" @mouseup.capture="stopResizePanel">
        <aside :class="$style?.layout__panelMenu">
            <slot name="panelMenu" :activeResizePanel="activeResizePanel" :cursorType="cursorType"
                :stopResizePanel="stopResizePanel"></slot>
        </aside>

        <main :class="$style.layout__main">
            <header>
                <slot name="headerOpcion" :showPanel="showPanel" :isPanelOpen="isPanelOpen" />
            </header>
            <section>
                <slot name="mainContent" />
            </section>
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

.layout__panelMenu{
    grid-area: aside;
    display: flex;
    justify-content: space-between;
    background-color: var(--color-blue-200);
}

.layout__main {
    background-color: var(--color-primary);
    grid-area: main;
}
</style>
