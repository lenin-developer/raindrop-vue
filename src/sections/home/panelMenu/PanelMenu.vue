<script setup lang="ts">
import HeaderPanel from "./components/headerPanel/HeaderPanel.vue";
import PanelMenuLayout from "./layout/PanelMenuLayout.vue";
defineProps<{
    cursorType: string,
}>();

defineEmits<{
    activeResizePanel: [],
}>();

</script>


<template>
    <PanelMenuLayout>
        <template #panel-header>
            <HeaderPanel />
        </template>
        <template #panel-opcion>
            <h2>opciones</h2>
        </template>
        <template #pabel-list>
            <ul>
                <li>aa</li>
            </ul>
        </template>
        <template #panel-bar>
            <hr @mousedown="$emit('activeResizePanel')"
                :class="[{ [$style.aside__hr_active]: cursorType !== 'auto' }, $style['hr-resize']]" />
        </template>
    </PanelMenuLayout>
</template>


<style lang="postcss" module>
.hr-resize {
    position: relative;
    margin: 0;
    padding: 0;
    border: 1px solid transparent;
    cursor: col-resize;
    background-color: var(--color-gray-300);
    transition: background 1s;

    &:hover {
        width: 3px;
        cursor: col-resize;
        border-color: var(--color-green-100);
    }
}

.aside__hr_active {
    width: 3px;
    cursor: col-resize;
    background-color: var(--color-green-100);
}
</style>