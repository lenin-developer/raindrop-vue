<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue'
// defineOptions({ inheritAttrs: false });


type Props =  & /* @vue-ignore */ InputHTMLAttributes;

defineProps<Props>()
const modelValue = defineModel<string>({ required: true })

</script>

<template>
    <input v-model="modelValue" type="text" :class="$style.inputBase" >
</template>

<style lang="postcss" module>
.inputBase {
    width: 100%;
    padding: 8px 6px;
    background-color: transparent;
    border: none;
    border-radius: 6px;
    outline: 1px solid var(--color-gray-boder-100);
    color: var(--color-gray-400);

    &:focus {
        outline-color: var(--color-green-100);
    }
}
</style>