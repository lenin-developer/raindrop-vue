<script setup lang="ts">
import PanelMenu from '@/sections/home/panelMenu/PanelMenu.vue';
import HomeLayout from '@/layouts/HomeLayout.vue';

</script>

<template>
    <HomeLayout>
        <template #panelMenu="propsPanel">
            <PanelMenu @active-resize-panel="propsPanel.activeResizePanel" :cursor-type="propsPanel.cursorType"
                :stop-resize-panel="propsPanel.stopResizePanel" />
        </template>
        <template #headerOpcion="propsOpcion">
            <div>
                <h1>opcion</h1>
                <button v-if="!propsOpcion.isPanelOpen" @click="propsOpcion.showPanel"> menú</button>
            </div>
        </template>
        <template #mainContent>
            <main>
                <h1>mian</h1>
            </main>
        </template>
    </HomeLayout>
</template>
