<script setup lang="ts">
import { Icon } from "@iconify/vue/dist/iconify.js";
import HeaderPanel from "./components/headerPanel/HeaderPanel.vue";
import PanelMenuLayout from "./layout/PanelMenuLayout.vue";
import ButtonBase from '@/components/buttonBase/ButtonBase.vue';
import ModalAddGroup from "@/components/modalAddGroup/ModalAddGroup.vue";
import { ref } from "vue";
defineProps<{
    cursorType: string,
}>();

defineEmits<{
    activeResizePanel: [],
    stopResizePanel: []
}>();

const modalAddGroup = ref<InstanceType<typeof ModalAddGroup>>();

const openModal = () => {
    modalAddGroup.value?.openModal()
}

</script>


<template>
    <PanelMenuLayout>
        <template #panel-header>
            <HeaderPanel />
        </template>
        <template #panel-opcion>
            <ButtonBase @click="openModal" :class="$style.btn" aria-label="agregar categoria">
                <Icon icon="icons8:plus" width="100%" height="100%" class="util_color-green" />
            </ButtonBase>
        </template>
        <template #pabel-list>
            <ul>
            </ul>
        </template>
        <template #panel-bar>
            <hr @mousedown="$emit('activeResizePanel')"
                :class="[{ [$style.aside__hr_active]: cursorType !== 'auto' }, $style['hr-resize']]" />
        </template>
    </PanelMenuLayout>
    <ModalAddGroup ref="modalAddGroup" />
</template>


<style lang="postcss" module>
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

.btn {
    height: 30px;
    background-color: var(--color-background-main);
    border: 1px solid var(--color-green-100);
    border-radius: 8px;
    padding-top: 3px;
    padding-bottom: 3px;
    height: min-content;


    & :where(svg) {
        height: 1.5rem;

        & :where(path) {
            margin-top: 2px;
            margin-bottom: 2px;
        }
    }

    &:hover {
        background-color: var(--color-green-100);
        border: 1px solid var(--color-background-main);

        & :where(svg) {
            color: var(--color-background-main);
        }
    }
}
</style>