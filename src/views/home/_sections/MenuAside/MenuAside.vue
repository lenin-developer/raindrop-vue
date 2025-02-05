<script setup lang="ts">
import HeaderAside from "./components/HeaderAside.vue";
defineProps<{
    cursorType: string,
}>();


</script>


<template>
    <div :class="$style?.['wrapper-aside']">
        <aside :class='$style?.aside'>
            <HeaderAside />
            <ul>

            </ul>
        </aside>
        <hr @mousedown="$emit('resizeAsideLamda')"
            :class="[{ [$style.aside__hr_active]: cursorType !== 'auto' }, $style['hr-resize']]" />
    </div>
</template>


<style lang="postcss" module>
.wrapper-aside {
    grid-area: aside;
    display: flex;
    justify-content: space-between;
    background-color: var(--color-gray-500);

    & :where(aside) {
        width: 100%;
    }

}


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