<script setup lang="ts">
import PanelMenu from '@/sections/home/panelMenu/PanelMenu.vue';
import HomeLayout from '@/layouts/HomeLayout.vue';

</script>

<template>
    <HomeLayout>
        <template #panelMenu="propPanel">
            <PanelMenu @active-resize-panel="propPanel.activeResizePanel" :cursor-type="propPanel.cursorType" />
        </template>
        <template #headerOpcion>
            <div>
                <h1>opcion</h1>
            </div>
        </template>
        <template #mainContent>
            <main >
                <h1>mian</h1>
            </main>
        </template>
    </HomeLayout>
</template>

<style>

</style>
