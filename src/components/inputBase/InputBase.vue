<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue'
defineOptions({ inheritAttrs: false });


type Props = & /* @vue-ignore */ InputHTMLAttributes;

defineProps<Props>()
const modelValue = defineModel<string>()

</script>

<template>

    <input v-if="!$slots.iconLeft && !$slots.iconRight" v-bind="$attrs" v-model="modelValue" type="text"
        :class="$style.inputBase">

    <div v-if="$slots.iconLeft || $slots.iconRight" :class="$style.wrapper">
        <slot name="iconLeft"></slot>
        <input v-bind="$attrs" v-model="modelValue" type="text" :class="$style.inputBase">
        <slot name="iconRight"></slot>
    </div>
</template>

<style lang="postcss" module>
.inputBase {
    width: 100%;
    padding: 8px 6px;
    background-color: transparent;
    border: none;
    border-radius: 6px;
    outline: 1px solid var(--color-gray-300);
    color: var(--color-gray-100);

    &:focus {
        outline-color: var(--color-secondary);
    }
}

.wrapper {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 4px 8px;
    display: flex;
    border-radius: 6px;
    outline: 1px solid var(--color-gray-300);

    &:focus-within {
        outline-color: var(--color-secondary);
    }

    & :where(input) {
        padding: 0px;
        outline: none;

        &:focus {
            outline-color: none;
        }
    }
}
</style>