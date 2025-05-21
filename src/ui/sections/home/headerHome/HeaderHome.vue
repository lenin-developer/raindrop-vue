<script setup lang='ts'>
import HaderOpcionLayout from './layout/HeaderOpcionLayout.vue';
import { Icon } from "@iconify/vue";

defineProps<{
    isPanelOpen: boolean
}>();



</script>

<template>
    <HaderOpcionLayout>
        <template #sectionTop>
            <button v-if="!isPanelOpen" @click="$emit('showPanel')" class="util_btn_content_icon " >
                <Icon icon="majesticons:menu-expand-left" width="100%" height="100%"
                     />
            </button>
            <h3>top-header</h3>
        </template>
        <template #sectionBottom>
            <h3>bottom-header</h3>
        </template>
    </HaderOpcionLayout>
</template>

<style lang='postcss' module>
</style>