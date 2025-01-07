<script setup lang="ts">
 defineProps<{
    cursorType: string,
}>();


</script>


<template>
    <aside :class="$style.aside">
        <div>

        </div> 
        <hr @mousedown="$emit('resizeAsideLamda')" :class="{ [$style.aside__hr_active]: cursorType !== 'auto' }">
    </aside>
</template>


<style lang="postcss" module  >
.aside {
    display: flex;
    justify-content: space-between;
    background-color: red;
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
</style>