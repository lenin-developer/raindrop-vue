<script setup lang="ts">
import { useTheme } from "@/stores/theme";
import { Icon } from "@iconify/vue";
defineProps<{
    cursorType: string,
}>();

const { colorsIcon } = useTheme()


</script>


<template>
    <aside :class="$style.aside">
        <header :class="$style.aside__header">
            <div :class="$style?.['header__content-icon']">
                <Icon icon="mingcute:user-4-fill" width="100%" height="100%" :color="colorsIcon.main" />
            </div>
            <p>nombre del usruario</p>
            <div :class="$style?.['header__content-icon']">
                <Icon icon="majesticons:menu-expand-left" width="100%" height="100%" :color="colorsIcon.secondary" />
            </div>
        </header>
        <hr @mousedown="$emit('resizeAsideLamda')" :class="{ [$style.aside__hr_active]: cursorType !== 'auto'}" />
    </aside>
</template>


<style lang="postcss" module>
.aside {
    display: flex;
    justify-content: space-between;
    background-color: var(--color-gray-500);
    grid-area: aside;

    &> :where(hr) {
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
            border-color:var(--color-green-100);
        }
    }
}

.aside__header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    padding: 6px;
    background-color: var(--color-blue-100);


    & :where(p) {
        padding: 0 12px; 
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: break-word;
        overflow: hidden;
        pointer-events: none;
    }
}

.header__content-icon {
    display: inline-block;
    min-width: 32px;
    height: 32px;
}

.aside__hr_active {
    width: 3px;
    cursor: col-resize;
    background-color: var(--color-green-100);
}
</style>