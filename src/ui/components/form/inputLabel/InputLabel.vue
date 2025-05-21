<script setup lang="ts">
import { ref, type InputHTMLAttributes, type Ref } from 'vue'
import {InputBase} from '@/ui/components';


defineOptions({ inheritAttrs: false });

type Props = {
    label?: string,
    id?: string,
    classes?: string
} & /* @vue-ignore */ Omit<InputHTMLAttributes, 'id'>;

defineProps<Props>()

const inputValue = ref('') as Ref<string> ;

</script>

<template>
    <div :class="[$style.inputBase, classes]">
        <div :class="$style.inputBase__sectionInf" >
            <div :for="id?.toString()" v-if="$slots.icon"   >
                <slot name="icon"></slot>
            </div>
            <label v-if="label" :for="id?.toString()" :class="$style.inputBase_label" :aria-label="label" >{{ label }}</label>
        </div>
         <InputBase v-model="inputValue" :id="id?.toString()" :class="$style.inputBase_input"  v-bind="$attrs"/>
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
    outline: 2px solid var(--color-gray-transparent-100);
    border-radius: 6px;
}

.inputBase_input:focus {
    outline: 2px solid var(--color-secondary);
}
</style>