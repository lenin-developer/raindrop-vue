<script setup lang="ts">
import {HomeLayout} from '@/ui/layouts';
import PanelMenu from '@/ui/sections/home/panelMenu/PanelMenu.vue';
import HeaderHome from '@/ui/sections/home/headerHome/HeaderHome.vue';

</script>

<template>
    <HomeLayout>
        <template #panelMenu="propsPanel">
            <PanelMenu @active-resize-panel="propsPanel.activeResizePanel" :cursor-type="propsPanel.cursorType"
                @stop-resize-panel="propsPanel.stopResizePanel" />
        </template>
        <template #headerHome="headerHome">
            <HeaderHome @showPanel="headerHome?.showPanel" :isPanelOpen="headerHome.isPanelOpen" />
        </template>
        <template #mainContent>
            <main>
                <h1>mian</h1>
            </main>
        </template>
    </HomeLayout>
</template>
