<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue'
import IconMail from '../icons/IconMail.vue';
defineOptions({ inheritAttrs: false });

type Props = {
    label?: string,
    id?: string,
    classes?: string
} & /* @vue-ignore */ Omit<InputHTMLAttributes, 'id'>;

defineProps<Props>()

</script>

<template>
    <div :class="[$style.inputBase, classes]">
        <div :class="$style.inputBase__sectionInf" >
            <div :for="id?.toString()" v-if="$slots.icon"   >
                <slot name="icon"></slot>
            </div>
            <label v-if="label" :for="id?.toString()" :class="$style.inputBase_label" :aria-label="label" >{{ label }}</label>
        </div>

        <input type="text" :id="id?.toString()" v-bind="$attrs" :class="$style.inputBase_input"  >
    </div>
</template>

<style lang="postcss" module>
.inputBase {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
}

.inputBase__sectionInf {
    display: flex;
    align-items: center;
    gap: 6px;
}

.inputBase__sectionInf > div {
    height: 1rem;
    display: flex;
    align-items: center;
}

.inputBase_label {
    font-weight: 200;
}

.inputBase_input {
    padding: 8px;
    border: none;
    outline: 3px solid transparent;
    border-radius: 6px;
}

.inputBase_input:focus {
    outline: 3px solid var(--color-green-100);
}
</style>