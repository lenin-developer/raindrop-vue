<script setup lang='ts'>
import type { ButtonHTMLAttributes } from 'vue';


type props = {
    name: string,
    selected: boolean
} & /* @vue-ignore */  ButtonHTMLAttributes;

defineProps<props>();
defineEmits<{
  selectWorkpace: []
}>();

</script>

<template>

    <li :class="$style.workspaceName">
        <div :class="$style.workspaceName_contenDefault">
            <span>{{ selected ? "(default)" : '' }}</span>
        </div>
        <div :class="$style.workspaceName_contentName">
            <button @click="$emit('selectWorkpace')" >{{name}}</button>
        </div>
    </li>


</template>

<style lang='postcss' module>
.workspaceName {
    display: flex;
    gap: 0.25rem;
    align-items: center;
    width: 100%;
}

.workspaceName_contenDefault {
    min-width: 3.75rem;
    padding-right: 0.5rem;

    &> :where(span) {
        color: var(--color-gray-200);
    }
}

.workspaceName_contentName {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 0.375rem;
    overflow: hidden;


    &> :where(button) {
        height: 100%;
        width: 100%;
        padding: 10px 0px;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: break-word;
        overflow: hidden;
        background: transparent;
        border: none;
        
        color: v-bind(selected ? "var(--color-secondary)" : "var(--color-gray-100)");

        &:hover {
            background-color: #1D2B3D;
            cursor: pointer;
        }
    }

}
</style>