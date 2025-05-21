<script setup lang="ts">
defineProps<{
    bg?: string
}>()

</script>

<template>
    <div :class="$style.wrapperInputIcons">
        <div :class="$style.wrapperInputIcons_contentSlot" v-if="$slots.iconLeft"  >
            <slot name="iconLeft"></slot>
        </div>
        <slot></slot>
        <div :class="$style.wrapperInputIcons_contentSlot" v-if="$slots.iconRight"  >
            <slot name="iconRight"></slot>
        </div>
    </div>
</template>


<style lang="postcss" module>
.wrapperInputIcons {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 6px;

    

    /* --props-bg: v-bind(bg ?? 'initial' );
    --conditional-bg: var( --props-bg, var(--color-blue-100));
    background-color: var(--conditional-bg); */

    /* background-color: v-bind(bg ?? 'var(--color-blue-100)'); */
}

.wrapperInputIcons_contentSlot {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-left: 20px;
    padding-right: 20px;
}

</style>