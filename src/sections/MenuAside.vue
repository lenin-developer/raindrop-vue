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
                <Icon icon="mingcute:user-4-fill" width="32" height="32" :color="colorsIcon.main" />
            </div>
            <p>nombre del usruario</p>
            <Icon icon="material-symbols:menu-rounded" width="32" height="32" :color="colorsIcon.secondary" />
        </header>
        <hr @mousedown="$emit('resizeAsideLamda')" :class="{ [$style.aside__hr_active]: cursorType !== 'auto' }" />
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
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    padding: 6px;
    background-color: var(--color-blue-100);


    & :where(p) {
        display: inline;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        padding: 0 12px;
    }
}

.header__content-icon {
    display: inline-block;
    width: 32px;
    height: 32px;
}

.aside__hr_active {
    width: 3px;
    cursor: col-resize;
    background-color: var(--color-green-100);
}
</style>