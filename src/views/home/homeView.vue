<script setup lang="ts">
import PanelMenu from '@/sections/home/panelMenu/PanelMenu.vue';
import HomeLayout from '@/layouts/HomeLayout.vue';
import HeaderOpcion from '@/sections/home/headerOpcion/HeaderOpcion.vue';

</script>

<template>
    <HomeLayout>
        <template #panelMenu="propsPanel">
            <PanelMenu @active-resize-panel="propsPanel.activeResizePanel" :cursor-type="propsPanel.cursorType"
                @stop-resize-panel="propsPanel.stopResizePanel" />
        </template>
        <template #headerOpcion="propsOpcion">
            <HeaderOpcion @showPanel="propsOpcion?.showPanel" :isPanelOpen="propsOpcion.isPanelOpen" />
        </template>
        <template #mainContent>
            <main>
                <h1>mian</h1>
            </main>
        </template>
    </HomeLayout>
</template>
