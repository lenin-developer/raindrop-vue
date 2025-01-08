<script setup lang="ts">
import { useTheme } from "@/stores/theme";
import { Icon } from "@iconify/vue";
defineProps<{
    cursorType: string,
}>();

const storeTheme = useTheme()


</script>


<template>
    <aside :class="$style.aside">
        <div :class="$style.aside__header">
            <Icon icon="mingcute:user-4-fill" style="font-size: 2rem;"  :color="storeTheme.colorIcon" />
        </div>
        <hr @mousedown="$emit('resizeAsideLamda')" :class="{ [$style.aside__hr_active]: cursorType !== 'auto' }">
    </aside>
</template>


<style lang="postcss" module>
.aside {
    display: flex;
    justify-content: space-between;
    background-color: var(--color-gray-500);
    grid-area: aside;

    &> :where(hr) {
        margin: 0;
        cursor: col-resize;
        width: 2px;
        background-color: var(--color-gray-300);
        border: 0;
        padding: 0;
        transition: background 1s;

        &:hover {
            width: 3px;
            cursor: col-resize;
            background-color: var(--color-green-100);
        }
    }
}

.aside__header {
    width: 100%;
    height: 80px;
    padding: 6px;
    background-color: var(--color-blue-100);
}

.aside__hr_active {
    width: 3px;
    cursor: col-resize;
    background-color: var(--color-green-100);
}
</style>