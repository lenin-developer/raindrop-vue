<script setup lang="ts">

import type { ButtonHTMLAttributes } from 'vue'
defineOptions({ inheritAttrs: false })

type buttonBaseType = {
    paddingIconLeft?: number
} &  /* @vue-ignore */  ButtonHTMLAttributes;

defineProps<buttonBaseType>()

</script>

<template>
    <button type="button" :class="$style.button" v-bind="$attrs" >
        <span v-if="$slots.iconLeft" :class="$style.buttton_icon">
            <slot name="iconLeft"></slot>
        </span>
        <slot></slot>
        <span v-if="$slots.iconRigth" :class="$style.buttton_icon" >
            <slot name="iconRigth"></slot>
        </span>
    </button>
</template>


<style lang="postcss" module>
.button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 8px;
    border: 0px;
    outline: 0px;
    cursor: pointer;
    border-radius: 6px;
    background-color: var(--color-secondary);
    color: var(--color-blue-100);
    font-weight: 800;
    font-size: 16px;
}

.button:active {
    transform: scale(0.995);
}

.buttton_icon {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>